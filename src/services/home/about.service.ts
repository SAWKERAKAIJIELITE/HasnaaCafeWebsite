import { getEntry } from "astro:content";


export async function getAbout()
{
    const about = await getEntry("about", "about");
    if (!about)
    {
        throw new Error("About singleton not found.");
    }
    return about.data;
}