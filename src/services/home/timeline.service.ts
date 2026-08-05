import { getEntry } from "astro:content";


export async function getTimeline()
{
    const timeline = await getEntry("timeline", "timeline");
    if (!timeline)
    {
        throw new Error("Timeline singleton not found.");
    }
    return timeline.data.timestamps.filter(timestamp => timestamp.enabled);
}