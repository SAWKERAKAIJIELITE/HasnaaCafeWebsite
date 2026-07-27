import type { TimelineItem } from "@/types/timeline";


export const timeline: TimelineItem[] = [
    {
        year: "2012",
        title: "Company Founded",
        description: "Started as a family-owned coffee supplier dedicated to quality and service."
    },
    {
        year: "2016",
        title: "Factory Expansion",
        description: "Expanded production capacity to meet increasing customer demand.."
    },
    {
        year: "2020",
        title: "Regional Partnerships",
        description: "Built strong partnerships with cafés, hotels, and restaurants across the region."
    },
    {
        year: "Today",
        title: "Trusted Coffee Supplier",
        description:"Continuing to deliver premium coffee products with innovation and reliability.",
        current:true
    },
    {
        year: "Future",
        title: "The Journey Continues",
        description: "Every partnership we build today is another step toward tomorrow.",
        current: false,
    }
];