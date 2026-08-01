import { reader } from "@/lib/keystatic/reader";
import type { HeroSlide } from "@data/hero";


export async function getHero()
{
    const hero = await reader.singletons.hero.read();
    if (!hero)
    {
        throw new Error("Hero singleton not found.");
    }
    return hero.slides.filter(slide => slide.enabled);
}