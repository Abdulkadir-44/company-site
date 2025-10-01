
import { Users, Rocket, Star, Clock } from "lucide-react";

const partners = [
    { id: 1, name: "Microsoft", logo: "/vercel.svg" },
    { id: 2, name: "Google", logo: "/vercel.svg" },
    { id: 3, name: "Amazon", logo: "/vercel.svg" },
    { id: 4, name: "Apple", logo: "/vercel.svg" },
    { id: 5, name: "Meta", logo: "/vercel.svg" },
    { id: 6, name: "Tesla", logo: "/vercel.svg" },
    { id: 7, name: "Netflix", logo: "/vercel.svg" },
    { id: 8, name: "Spotify", logo: "/vercel.svg" },
];

const recentProjects = [
    { id: 1, client: "TechCorp", type: "E-ticaret", image: "/bg.jpeg" },
    { id: 2, client: "StartupX", type: "Mobil App", image: "/bg.jpeg" },
    { id: 3, client: "DigitalLtd", type: "Web App", image: "/bg.jpeg" },
    { id: 4, client: "InnovateCo", type: "Dashboard", image: "/bg.jpeg" },
];

const statsData = [
    {
        id: 1,
        icon: Users,
        number: "3",
        title: "Mutlu Müşteri",
        bgGradient: "bg-gradient-to-br from-purple-500 to-purple-700",
        textColor : "text-purple-700/80"
    },
    {
        id: 2,
        icon: Rocket,
        number: "8",
        title: "Tamamlanan Proje",
        bgGradient: "bg-gradient-to-br from-blue-500 to-blue-700",
        textColor : "text-blue-700/80"
    },
    {
        id: 3,
        icon: Star,
        number: "5",
        title: "Yıllık Deneyim",
        bgGradient: "bg-gradient-to-br from-green-500 to-green-700",
        textColor : "text-green-700/80"
    },
    {
        id: 4,
        icon: Clock,
        number: "24/7",
        title: "Teknik Destek",
        bgGradient: "bg-gradient-to-br from-orange-500 to-orange-700",
        textColor : "text-orange-700/80"
    }
];

export { partners, recentProjects, statsData };