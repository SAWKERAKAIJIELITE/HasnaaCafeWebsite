import { defineCollection } from "astro:content";
import { z } from 'astro/zod';
import { file, glob } from "astro/loaders";
import { parse as parseYaml } from "yaml";


const heroCollection = defineCollection({
    loader: glob({ base: 'src/content', pattern: 'hero.yaml' }),
});

const aboutCollection = defineCollection({
    loader: glob({ base: 'src/content', pattern: 'about.yaml' }),
});

const timeLineCollection = defineCollection({
    loader: glob({ base: 'src/content', pattern: 'timeline.yaml' }),
});

const contactCollection = defineCollection({
    loader: glob({ base: 'src/content', pattern: 'contact.yaml' }),
});

const productsCollection = defineCollection({
    loader: glob({ base: 'src/content/products/', pattern: '*/index.yaml' }),
});

const offersCollection = defineCollection({
    loader: glob({ base: 'src/content/offers/', pattern: '*/index.yaml' }),
});

const councilCollection = defineCollection({
    loader: glob({ base: 'src/content/council/', pattern: '*/index.yaml' }),
});

const eventsCollection = defineCollection({
    loader: glob({ base: 'src/content/news-events/', pattern: '*/index.yaml' }),
});

export const collections = {
    hero: heroCollection,
    about: aboutCollection,
    timeline: timeLineCollection,
    products: productsCollection,
    offers: offersCollection,
    council: councilCollection,
    contact: contactCollection,
    event: eventsCollection
};