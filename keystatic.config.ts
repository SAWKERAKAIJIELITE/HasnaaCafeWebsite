import { config, singleton, fields, collection } from "@keystatic/core";


export default config({
    storage: {
        // kind: "local",
        kind:"cloud"
        // kind: 'github',
        // repo: 'SAWKERAKAIJIELITE/HasnaaCafeWebsite'
    },
    cloud: {
        project: 'hanaa-coffee/hasnaacafewebsite',
    },

    collections: {
        // heroes: collection({
        //     label: "Hero Slides",
        //     path: "content/heroes/*",
        //     format: "yaml",
        //     slugField: "id",
        //     schema: {
        //         enabled: fields.checkbox({
        //             label: "Enabled",
        //             defaultValue: true,
        //         }),
        //         order: fields.integer({
        //             label: "Order",
        //             defaultValue: 1,
        //         }),
        //         id: fields.slug({
        //             name: {
        //                 label: "Slug",
        //             },
        //         }),
        //         // arr: fields.,
        //         title: fields.text({ label: "Title", }),
        //         // title: fields.slug({ name: { label: 'Title' } }),
        //         subtitle: fields.text({
        //             label: "Subtitle",
        //             multiline: true,
        //         }),
        //         mediaType: fields.select({
        //             label: "Media Type",
        //             options: [
        //                 { label: "Image", value: "image" },
        //                 { label: "Video", value: "video" },
        //             ],
        //             defaultValue: "image",
        //         }),
        //         media: fields.image({
        //             label: "Media",
        //             directory: "public/images/hero",
        //             publicPath: "/images/hero/",
        //         }),
        //         primaryButton: fields.object(
        //             {
        //                 label: fields.text({ label: "Label" }),
        //                 href: fields.text({ label: "Href" }),
        //             },
        //             {
        //                 label: "Primary Button",
        //             }
        //         ),
        //         secondaryButton: fields.object(
        //             {
        //                 label: fields.text({ label: "Label" }),
        //                 href: fields.text({ label: "Href" }),
        //             },
        //             {
        //                 label: "Secondary Button",
        //             }
        //         ),
        //         // slides: fields.array(
        //         //     fields.object({
        //         //         image: fields.image({
        //         //             label: "Image",
        //         //             directory: "public/images/hero",
        //         //             publicPath: "/images/hero/",
        //         //         }),
        //         //         title: fields.text({ label: "Title" }),
        //         //     }),
        //         //     { label: "Slides" }
        //         // ),
        //     },
        // }),
    },
    singletons: {
        hero: singleton({
            label: "Hero",
            path: "content/hero",
            schema: {
                slides: fields.array(
                    fields.object({
                        // id: fields.slug({name: {label: "Slug"}}),
                        enabled: fields.checkbox({
                            label: "Enabled",
                            defaultValue: true,
                        }),
                        title: fields.text({ label: "Title" }),
                        subtitle: fields.text({
                            label: "Subtitle",
                            multiline: true,
                        }),
                        mediaType: fields.select({
                            label: "Media Type",
                            options: [
                                {
                                    label: "Image",
                                    value: "image",
                                },
                                {
                                    label: "Video",
                                    value: "video",
                                },
                            ],
                            defaultValue: "image",
                        }),
                        media: fields.image({
                            label: "Media",
                            directory: "public/images",
                            publicPath: "/images",
                        }),
                        primaryButton: fields.object({
                            label: fields.text({ label: "Label" }),
                            href: fields.select({
                                label: "Link",
                                options: [
                                    {
                                        label: "Products",
                                        value: "#products",
                                    },
                                    {
                                        label: "About",
                                        value: "#about",
                                    },
                                    {
                                        label: "Articles",
                                        value: "#articles",
                                    },
                                    {
                                        label: "Offers",
                                        value: "#offers",
                                    },
                                    {
                                        label: "Contacts",
                                        value: "#contact",
                                    },
                                    {
                                        label: "Management",
                                        value: "#management",
                                    },
                                ],
                                defaultValue: "#products",
                            }),
                        }, {
                            label: "Primary Button",
                        }),
                        secondaryButton: fields.object({
                            label: fields.text({ label: "Label" }),
                            href: fields.select({
                                label: "Link",
                                options: [
                                    {
                                        label: "Products",
                                        value: "#products",
                                    },
                                    {
                                        label: "About",
                                        value: "#about",
                                    },
                                    {
                                        label: "Articles",
                                        value: "#articles",
                                    },
                                    {
                                        label: "Offers",
                                        value: "#offers",
                                    },
                                    {
                                        label: "Contacts",
                                        value: "#contact",
                                    },
                                    {
                                        label: "Management",
                                        value: "#management",
                                    },
                                ],
                                defaultValue: "#products",
                            }),
                        }, {
                            label: "Secondary Button",
                        }),
                    }),
                    { label: "Slides" }
                ),
            },
        }),
    }
}
);