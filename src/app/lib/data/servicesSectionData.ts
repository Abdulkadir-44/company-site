import { Code, Monitor, Cloud} from "lucide-react";


export const servicesData = [
    {
        id: 1,
        title: "Web Geliştirme",
        description: "Modern ve kullanıcı dostu web siteleri tasarlıyor, en son teknolojilerle geliştiriyoruz. Fikrinizi, global erişime sahip, hızlı ve güvenli bir dijital platforma dönüştürüyoruz.",
        detailedContent: "Responsive tasarım, SEO optimizasyonu, yüksek performans ve güvenlik standartları ile web sitelerinizi geliştiriyoruz. E-ticaret platformları, kurumsal web siteleri, blog siteleri ve özel web uygulamaları konularında uzmanız. Modern JavaScript framework'leri ve en güncel teknolojileri kullanarak, kullanıcı deneyimi odaklı çözümler sunuyoruz.",
        features: [
            "Responsive ve Mobile-First Tasarım",
            "SEO ve Performans Optimizasyonu", 
            "E-ticaret Entegrasyonları",
            "Content Management Sistemleri",
            "API Entegrasyonu ve Geliştirme"
        ],
        imageUrl: "/servicesSectionPhotos/test.jpg",
        icon: Code,
        gradient: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        tags: ["React", "Next.js", "Tailwind"]
    },
    {
        id: 2,
        title: "Masaüstü Uygulamalar",
        description: "İşletmenizin özel ihtiyaçlarına yönelik, platform bağımsız çalışabilen güçlü ve verimli masaüstü uygulamaları geliştiriyoruz. Karmaşık iş akışlarınızı basitleştiriyoruz.",
        detailedContent: "Windows, macOS ve Linux işletim sistemlerinde çalışabilen, yüksek performanslı masaüstü uygulamaları geliştiriyoruz. Veri yönetimi, süreç otomasyonu, raporlama araçları ve özel işletme yazılımları konularında deneyimliyiz. Native performans ile cross-platform uyumluluğu bir araya getiriyoruz.",
        features: [
            "Yüksek Performans ve Güvenlik",
            "Veritabanı Entegrasyonları",
            "Offline Çalışma Desteği",
            "Otomatik Güncelleme Sistemi",
            "Özelleştirilebilir Arayüz"
        ],
        imageUrl: "/servicesSectionPhotos/desktop.jpg",
        icon: Monitor,
        gradient: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        tags: ["Electron", "Tauri", "Cross-Platform"]
    },
    {
        id: 3,
        title: "Cloud & DevOps",
        description: "Projelerinizi bulut altyapısında güvenli bir şekilde barındırıyor ve CI/CD süreçleriyle canlıya alma işlemlerini otomatikleştiriyoruz. Kesintisiz ve ölçeklenebilir bir hizmet sunuyoruz.",
        detailedContent: "Modern DevOps pratikleri ve bulut teknolojileri ile projelerinizin deployment, monitoring ve scaling süreçlerini otomatikleştiriyoruz. Container teknolojileri, mikroservis mimarileri ve CI/CD pipeline'ları ile sürekli entegrasyon ve teslimat sağlıyoruz. 7/24 monitoring ve otomatik backup sistemleri ile verilerinizin güvenliğini garanti ediyoruz.",
        features: [
            "Otomatik CI/CD Pipeline Kurulumu",
            "Container Orchestration (Kubernetes)",
            "Mikroservis Mimarisi",
            "7/24 Monitoring ve Alerting",
            "Otomatik Backup ve Recovery",
            "Load Balancing ve Auto Scaling"
        ],
        imageUrl: "/servicesSectionPhotos/cloud.jpg",
        icon: Cloud,
        gradient: "from-green-500 to-emerald-500",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        tags: ["AWS", "Docker", "Kubernetes"]
    },
];
