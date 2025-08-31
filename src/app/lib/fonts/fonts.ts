import { Poppins, Newsreader } from "next/font/google";

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
    display: 'swap',
});

export const newsreader = Newsreader({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-newsreader',
    display: 'swap',
});