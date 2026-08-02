import { defineCollection } from "astro:content";
import { z } from 'astro/zod';
import { file, glob } from "astro/loaders";
import { parse as parseYaml } from "yaml";


const heroCollection = defineCollection({
    loader: glob({ base: 'src/content', pattern: '**/*.yaml' }),
    // type: "data",
    // schema: ({ image }) =>
    //     z.object({
    //         slides: z.array(
    //             z.object({
    //                 enabled: z.boolean(),
    //                 title: z.string(),
    //                 subtitle: z.string(),
    //                 mediaType: z.enum(["image", "video"]),
    //                 media: image(),
    //                 primaryButton: z.object({
    //                     label: z.string(),
    //                     href: z.string(),
    //                 }),
    //                 secondaryButton: z.object({
    //                     label: z.string(),
    //                     href: z.string(),
    //                 }),
    //             })
    //         ),
    //     }),
});

export const collections = {
    hero: heroCollection,
};