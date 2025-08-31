// Timeline data
import { Code, Users, Target, Eye, Award, Zap, } from "lucide-react";
const timelineData = [
    {
        year: "2020-2024",
        title: "Freelance Dönem",
        description: "Bu dönemde bireysel projeler üzerinde çalışarak hem teknik hem de iletişim becerilerimizi geliştirdik. Farklı sektörlerden müşterilerle iş birliği yaparak web tasarımı, frontend geliştirme ve kullanıcı deneyimi odaklı çözümler ürettik. Proje yönetimi, müşteri ilişkileri ve teslimat süreçlerinde sorumluluk alarak profesyonel iş disiplinimizi güçlendirdik.",
        icon: Code,
        color: "from-blue-500 to-cyan-500",
        headColor : "text-blue-500"
    },
    {
        year: "2025",
        title: "Şirket Kuruluşu",
        description: "Freelance döneminde edindiğimiz tecrübeleri ve müşteri portföyünü kurumsal bir yapıya taşıyarak NEBASOFTWARE’i kurduk. Şirketimizin temelini, müşteri memnuniyetine odaklanan kaliteli yazılım çözümleri ve yenilikçi yaklaşım üzerine inşa ettik. Bu süreçte marka kimliğimizi oluşturduk, iş süreçlerimizi profesyonelleştirdik ve sürdürülebilir bir büyüme stratejisi belirledik.",
        icon: Users,
        color: "from-purple-500 to-pink-500",
        headColor : "text-purple-500"
    },
    {
        year: "2025+",
        title: "Büyüme & İnovasyon",
        description: "Kuruluşun ardından ekibimizi genişleterek daha büyük ve kapsamlı projelere imza atmaya başladık. Teknoloji trendlerini yakından takip ederek yapay zeka, bulut tabanlı çözümler ve modern frontend teknolojileri gibi alanlarda inovatif ürünler geliştiriyoruz. Amacımız, sadece yazılım geliştirmek değil; müşterilerimizin iş süreçlerini daha verimli ve geleceğe hazır hale getiren çözümler sunmak.",
        icon: Zap,
        color: "from-green-500 to-emerald-500",
        headColor : "text-green-500"
    }
];

// Values data
const valuesData = [
    {
        icon: Target,
        title: "Misyonumuz",
        description: "İşletmelerin dijital dönüşüm sürecinde güvenilir teknoloji partneri olarak, modern web teknolojileri ve bulut çözümleriyle rekabet avantajı sağlamalarına destek olmak.",
        gradient: "from-purple-600 to-blue-600",
        headColor : "text-purple-600"
    },
    {
        icon: Eye,
        title: "Vizyonumuz",
        description: "Müşterilerimize değer katan yenilikçi teknolojiler üretmeye devam ederek, yazılım sektöründe güvenilir ve güçlü bir marka konumuna ulaşmak.",
        gradient: "from-blue-600 to-cyan-600",
        headColor : "text-blue-600"
    },
    {
        icon: Award,
        title: "Değerlerimiz",
        description: "Kalite odaklı çalışma, sürekli öğrenme, müşteri memnuniyeti, şeffaflık ve inovasyonu benimseyen bir ekip kültürü.",
        gradient: "from-green-600 to-emerald-600",
        headColor : "text-green-600"
    }
];

// Expertise areas
const expertiseAreas = [
    { 
        name: "Web Development", 
        percentage: 95, 
        headColor: "text-purple-500", 
        color: "bg-purple-500",
        tags: ["React", "Next.js", "TailwindCSS"],
        tagBgColor : "bg-purple-600/90 border-purple-200 hover:bg-purple-700 hover:border-purple-300", 
    },
    { 
        name: "Cloud & AWS", 
        percentage: 85, 
        headColor: "text-blue-500", 
        color: "bg-blue-500",
        tags: ["AWS EC2", "S3", "Lambda"] ,
        tagBgColor : "bg-blue-600/90 border-blue-200 hover:bg-blue-700 hover:border-blue-300",
    },
    { 
        name: "Database Systems", 
        percentage: 80, 
        headColor: "text-green-500", 
        color: "bg-green-500",
        tags: ["MySQL", "PostgreSQL", "MongoDB"],
        tagBgColor : "bg-green-600/90  border-green-200 hover:bg-green-700 hover:border-green-300", 
    },
    { 
        name: "Desktop Apps", 
        percentage: 75, 
        headColor: "text-orange-500", 
        color: "bg-orange-500",
        tags: ["Electron", "C#", ".NET"],
        tagBgColor : "bg-orange-600/90 border-orange-200 hover:bg-orange-700 hover:border-orange-300", 
    },
];

export { timelineData, valuesData, expertiseAreas };