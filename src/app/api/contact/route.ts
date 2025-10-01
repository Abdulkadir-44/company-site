// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma/prisma'; 
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { headers } from 'next/headers';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, '1 m'),
  analytics: true,
});


const contactFormSchema = z.object({
  fullName: z.string()
    .min(2, { message: "Ad Soyad alanı en az 2 karakter olmalıdır." })
    .max(50, { message: "Ad Soyad alanı en fazla 50 karakter olabilir." }),
  email: z.string()
    .email({ message: "Lütfen geçerli bir e-posta adresi girin." }),
  phone: z.string().optional(),
  subject: z.string()
    .min(1, { message: "Lütfen bir konu seçin." }), // Boş olmamasını garantiler
  message: z.string()
    .min(10, { message: "Mesajınız en az 10 karakter olmalıdır." })
    .max(1000, { message: "Mesajınız en fazla 1000 karakter olabilir." }),
  token: z.string(),
});


export async function POST(req: Request) {
  const ip = (await headers()).get('x-forwarded-for') ?? '127.0.0.1';
  const { success: isNotRateLimited } = await ratelimit.limit(ip);
  if (!isNotRateLimited) {
    return NextResponse.json({ message: 'Çok fazla istek gönderdiniz.' }, { status: 429 });
  }

  try {
    const body = await req.json();
    const validatedData = contactFormSchema.parse(body);

    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${validatedData.token}`,
    });
    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      return NextResponse.json({ message: 'Bot aktivitesi tespit edildi.' }, { status: 403 });
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        subject: validatedData.subject,
        message: validatedData.message,
      },
    });

    return NextResponse.json({ message: 'Mesajınız başarıyla alındı.', submission }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstErrorMessage = error.issues[0]?.message || 'Lütfen formdaki hataları düzeltin.';
      
      return NextResponse.json(
        { 
          message: firstErrorMessage, 
          errors: error.issues      
        }, 
        { status: 400 }
      );
    }
    console.error(error);
    return NextResponse.json({ message: 'Sunucuda bir hata oluştu.' }, { status: 500 });
  }
}