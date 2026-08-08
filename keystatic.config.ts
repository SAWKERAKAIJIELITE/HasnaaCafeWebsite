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
        products: collection({
            label: "المنتجات",
            path: "src/content/products/*/",
            slugField: "name",
            schema: {
                available: fields.checkbox({
                    label: "متاح",
                    defaultValue: true,
                }),
                featured: fields.checkbox({
                    label: "مميز",
                    defaultValue: false,
                }),
                name: fields.slug({ name: { label: "الاسم بالعربي" } }),
                name_en: fields.text({ label: "الاسم بالإنجليزية" }),
                category: fields.select({
                    label: "النوع",
                    options: [
                        { label: "بن", value: "coffee-beans" },
                        { label: "قهوة سريعة التحضير", value: "instant-coffee" },
                        { label: "شاي", value: "tea" },
                        { label: "شوكولا", value: "chocolate" },
                        { label: "قهوة سائلة", value: "liquid-coffee" },
                    ],
                    defaultValue: "coffee-beans",
                }),
                description: fields.object({
                    en: fields.text({ label: "English", multiline: true }),
                    ar: fields.text({ label: "عربي", multiline: true }),
                }, { label: "الوصف" }),
                thumbnail: fields.image({
                    label: "الصورة الرئيسية",
                    // directory: "public/images/products",
                    // publicPath: "/images/products",
                }),
                gallery: fields.array(
                    fields.image({
                        label: "Image",
                        // directory: "public/images/products",
                        // publicPath: "/images/products",
                    }),
                    { label: "معرض الصور", }
                ),
                origin: fields.select({
                    label: "المنشأ",
                    options: [
                        { label: "البرازيل", value: "Brazil", },
                        { label: "كولومبيا", value: "Colombia", },
                        { label: "سيلان", value: "Ceylon", },
                        { label: "إثيوبيا", value: "Ethiopia", },
                        { label: "يمن", value: "Yemen", },
                        { label: "عربي", value: "Arabic", },
                        { label: "الصين", value: "China", },
                        { label: "", value: "", },
                    ],
                    defaultValue: "Brazil",
                }),
                roastLevel: fields.select({
                    label: "درجة التحميص",
                    options: [
                        { label: "خفيف", value: "light", },
                        { label: "وسط", value: "medium", },
                        { label: "داكن", value: "dark", },
                        { label: "", value: "", },
                    ],
                    defaultValue: "light",
                }),
                packaging: fields.array(
                    fields.object({
                        amount: fields.number({ label: "الكمية", validation: { min: 1 } }),
                        unit: fields.select({
                            label: "الوحدة",
                            options: [
                                { label: "لتر", value: "L", },
                                { label: "ميلي لتر", value: "mL", },
                                { label: "غرام", value: "g", },
                                { label: "كيلو غرام", value: "Kg", },
                            ],
                            defaultValue: "g"
                        }),
                    }), {
                    label: 'التعبئة',
                    itemLabel: item => `${item.fields.amount.value}: ${item.fields.unit.value}`
                }),
                flavor: fields.object({
                        en: fields.text({ label: "English"}),
                        ar: fields.text({ label: "عربي"}),
                    }, { label: "النكهة" }), 
                // specifications: fields.array(
                //     fields.object({
                //         name: fields.text({ label: 'الخاصية' }),
                //         value: fields.text({ label: 'القيمة' }),
                //     }), {
                // label: "خصائص إضافية",
                // itemLabel: item => `${item.fields.name.value}: ${item.fields.value.value}`
                // }),
            },
        }),
        offers: collection({
            label: "Offers",
            slugField: "title",
            path: "src/content/offers/*/",
            schema: {
                title: fields.slug({ name: { label: "العنوان بالعربي" } }),
                title_en: fields.text({ label: "العنوان بالإنجليزية" }),
                stamp: fields.object({
                    en: fields.text({
                        label: "English",
                        description: "Short badge text, e.g. '20% OFF' or '3RD FREE'.",
                    }),
                    ar: fields.text({
                        label: "عربي",
                        description: "عبارة قصيرة تسويقية مثل حسم 20بالمئة أو القطعة الثالثة مجاناً"
                    }),
                }, { label: "الطابع" }),
                description: fields.object({
                    en: fields.text({ label: "English", multiline: true }),
                    ar: fields.text({ label: "عربي", multiline: true }),
                }, { label: "الوصف" }),
                expiry: fields.object({
                    en: fields.text({
                        label: "English",
                        description: "e.g. 'Ends 08.31.26' or 'While stocks last'.",
                    }),
                    ar: fields.text({
                        label: "عربي",
                        description: "مثل ينتهي في تاريخ 1/1/2027 أو حتى انتهاء الكمية"
                    }),
                }, { label: "مدة العرض" }),
                // href: fields.url({ label: "Link", description: "Where 'Redeem offer' points to." }),
                image: fields.image({
                    label: "Photo",
                    // directory: "src/assets/images/offers",
                    // publicPath: "@assets/images/offers/",
                }),
                published: fields.checkbox({ label: "Published", defaultValue: true }),
            },
        }),
        council: collection({
            label: "Management Council",
            slugField: "name",
            path: "src/content/council/*/",
            schema: {
                name: fields.slug({ name: { label: "الاسم بالعربي" } }),
                name_en: fields.text({ label: "الاسم بالإنجليزية" }),
                title: fields.object({
                    en: fields.text({ label: "English", }),
                    ar: fields.text({ label: "عربي", }),
                }, { label: "المنصب" }),
                // order: fields.integer({
                //     label: "Order",
                //     description: "Controls display order — lower numbers show first.",
                //     defaultValue: 1,
                // }),
                bio: fields.object({
                    en: fields.text({ label: "English", multiline: true }),
                    ar: fields.text({ label: "عربي", multiline: true }),
                }, { label: "نبذة تعريفية" }),
                image: fields.image({
                    label: "Portrait",
                    // directory: "src/assets/images/council",
                    // publicPath: "@assets/images/council/",
                }),
                email: fields.text({
                    label: "Email",
                    description: "Optional — leave blank to hide the contact icon on the card.",
                }),
                published: fields.checkbox({ label: "Published", defaultValue: true }),
            },
        }),
        newsEvents: collection({
            label: "News & Events",
            slugField: "title",
            path: "src/content/news-events/*/",
            schema: {
                title: fields.slug({ name: { label: "العنوان بالعربي" } }),
                title_en: fields.text({ label: "العنوان بالانكليزي" }),
                type: fields.select({
                    label: "النوع",
                    options: [
                        { label: "تحديثات", value: "news" },
                        { label: "أحداث", value: "event" },
                    ],
                    defaultValue: "news",
                }),
                date: fields.date({
                    label: "تاريخ النشر",
                    description: "Drives both sorting and the calendar tag on the card.",
                }),
                excerpt: fields.object({
                    en: fields.text({ label: "English", multiline: true }),
                    ar: fields.text({ label: "عربي", multiline: true }),
                }, { label: "مقتطفات" }),
                meta: fields.object({
                    en: fields.text({ label: "English" }),
                    ar: fields.text({ label: "عربي" }),
                }, {
                    label: "الوصف",
                    description: "يظهر في أسفل البطاقة — على سبيل المثال: (المكان/الزمن) لحدث ما و (أخبار الشركة) للأخبار ",
                }),
                href: fields.url({ label: "Link", description: "Where RSVP / Read the story points to." }),
                image: fields.image({
                    label: "Photo",
                    // directory: "src/assets/images/news-events",
                    // publicPath: "@assets/images/news-events/",
                }),
                published: fields.checkbox({ label: "Published", defaultValue: true }),
            },
        }),
    },
    singletons: {
        hero: singleton({
            label: "Hero",
            path: "src/content/hero",
            schema: {
                slides: fields.array(
                    fields.object({
                        enabled: fields.checkbox({
                            label: "Enabled",
                            defaultValue: true,
                        }),
                        title: fields.object({
                            en: fields.text({ label: "English" }),
                            ar: fields.text({ label: "عربي" }),
                        }, { label: "العنوان" }),
                        // title_ar: fields.text({ label: "العنوان الرئيسي" }),
                        // subtitle: fields.text({
                        //     label: "Subtitle",
                        //     multiline: true,
                        // }),
                        subtitle: fields.object({
                            en: fields.text({ label: "English" }),
                            ar: fields.text({ label: "عربي" }),
                        }, { label: "العنوان الفرعي" }),
                        // subtitle_ar: fields.text({
                        //     label: "العنوان الفرعي",
                        //     multiline: true,
                        // }),
                        mediaType: fields.select({
                            label: "Media Type",
                            options: [
                                { label: "Image", value: "image", },
                                { label: "Video", value: "video", },
                            ],
                            defaultValue: "image",
                        }),
                        media: fields.image({
                            label: "Media",
                            directory: "public/images",
                            publicPath: "/images",
                        }),
                        primaryButton: fields.object({
                            label: fields.object({
                                en: fields.text({ label: "English" }),
                                ar: fields.text({ label: "عربي" }),
                            }, { label: "النص داخل الزر" }),
                            // label_ar: fields.text({ label: "النص داخل الزر" }),
                            href: fields.select({
                                label: "Link",
                                options: [
                                    { label: "المنتجات", value: "#products", },
                                    { label: "من نحن", value: "#about", },
                                    { label: "المقالات", value: "#news", },
                                    { label: "العروض", value: "#offers", },
                                    { label: "اتصل بنا", value: "#contact", },
                                    { label: "الإدارة", value: "#council", },
                                ],
                                defaultValue: "#products",
                            }),
                        }, { label: "Primary Button", }),
                        secondaryButton: fields.object({
                            label: fields.object({
                                en: fields.text({ label: "English" }),
                                ar: fields.text({ label: "عربي" }),
                            }, { label: "النص داخل الزر" }),
                            // label_ar: fields.text({ label: "النص داخل الزر" }),
                            href: fields.select({
                                label: "Link",
                                options: [
                                    { label: "المنتجات", value: "#products", },
                                    { label: "من نحن", value: "#about", },
                                    { label: "المقالات", value: "#news", },
                                    { label: "العروض", value: "#offers", },
                                    { label: "اتصل بنا", value: "#contact", },
                                    { label: "الإدارة", value: "#council", },
                                ],
                                defaultValue: "#products",
                            }),
                        }, {
                            label: "Secondary Button",
                        }),
                    }),
                    {
                        label: "Slides",
                        itemLabel: item => `${item.fields.enabled.value && "enabled"} ${item.fields.title.fields.en.value}`
                    }
                ),
            },
        }),
        about: singleton({
            label: "About",
            path: "src/content/about",
            schema: {
                eyebrow: fields.text({ label: "Eyebrow" }),
                title: fields.object({
                    en: fields.text({ label: "English" }),
                    ar: fields.text({ label: "عربي" }),
                }, { label: "العنوان" }),
                description: fields.object({
                    en: fields.text({ label: "English", multiline: true }),
                    ar: fields.text({ label: "عربي", multiline: true }),
                }, { label: "الوصف" }),
                image: fields.image({
                    label: "Image",
                    directory: "public/images/about",
                    publicPath: "/images/about"
                }),
                stats: fields.array(
                    fields.object({
                        enabled: fields.checkbox({
                            label: "Enabled",
                            defaultValue: true,
                        }),
                        value: fields.text({ label: "Value" }),
                        label: fields.object({
                            en: fields.text({ label: "English" }),
                            ar: fields.text({ label: "عربي" }),
                        }, { label: "العلامة" }),
                    }),
                    {
                        label: "Statistics",
                        itemLabel: item => `${item.fields.label.fields.ar.value}: ${item.fields.value.value}`
                    }
                ),
                features: fields.array(
                    fields.object({
                        en: fields.text({ label: "English" }),
                        ar: fields.text({ label: "عربي" }),
                    }, { label: "الميزات" }),
                    { label: "Features", itemLabel: item => item.fields.ar.value }
                ),
                button: fields.object({
                    label: fields.text({ label: "Label" }),
                    href: fields.select({
                        label: "Link",
                        options: [
                            { label: "Products", value: "#products", },
                            { label: "About", value: "#about", },
                            { label: "Articles", value: "#articles", },
                            { label: "Offers", value: "#offers", },
                            { label: "Contacts", value: "#contact", },
                            { label: "Management", value: "#management", },
                        ],
                        defaultValue: "#products",
                    }),
                }, { label: "Button" }),
                chairman: fields.object({
                    enabled: fields.checkbox({
                        label: "Enabled",
                        defaultValue: true,
                    }),
                    name: fields.object({
                        en: fields.text({ label: "English" }),
                        ar: fields.text({ label: "عربي" }),
                    }, { label: "الاسم" }),
                    quote: fields.object({
                        en: fields.text({ label: "English", multiline: true }),
                        ar: fields.text({ label: "عربي", multiline: true }),
                    }, { label: "الاقتباس" }),
                    photo: fields.image({
                        label: "Photo",
                        directory: "public/images/about",
                        publicPath: "/images/about"
                    }),
                    signature: fields.image({
                        label: "Signature",
                        directory: "public/images/about",
                        publicPath: "/images/about"
                    }),
                }, { label: "Chairman's Quote", })
            },
        }),
        timeline: singleton({
            label: "TimeLine",
            path: "src/content/timeline",
            schema: {
                timestamps: fields.array(
                    fields.object({
                        enabled: fields.checkbox({
                            label: "Enabled",
                            defaultValue: true,
                        }),
                        title: fields.object({
                            en: fields.text({ label: "English" }),
                            ar: fields.text({ label: "عربي" }),
                        }, { label: "عنوان" }),
                        year: fields.object({
                            en: fields.text({ label: "English" }),
                            ar: fields.text({ label: "عربي" }),
                        }, {
                            label: "الزمن",
                            description: "مثال: 2023 أو 2023-2024 أو عبارة مثل اليوم / بعد سنة"
                        }),
                        description: fields.object({
                            en: fields.text({ label: "English", multiline: true }),
                            ar: fields.text({ label: "عربي", multiline: true }),
                        }, { label: "الوصف" }),
                        current: fields.checkbox({
                            label: "Current",
                            defaultValue: false
                        })
                    }),
                    {
                        label: "Timestamps",
                        itemLabel: item => `${item.fields.enabled.value && "enabled"} ${item.fields.title.fields.ar.value}`
                    }
                ),
            },
        }),
        contact: singleton({
            label: "Contacts",
            path: "src/content/contact",
            schema: {
                title: fields.object({
                    en: fields.text({ label: "English" }),
                    ar: fields.text({ label: "عربي" }),
                }, { label: "العنوان" }),
                subtitle: fields.object({
                    en: fields.text({ label: "English", multiline: true }),
                    ar: fields.text({ label: "عربي", multiline: true }),
                }, { label: "العنوان الفرعي" }),
                image: fields.image({
                    label: "Image",
                    // directory: "public/images/contact",
                    // publicPath: "/images/contact"
                }),
                phone: fields.text({ label: "Phone" }),
                email: fields.text({ label: "Email" }),
                address: fields.object({
                    en: fields.text({ label: "English", multiline: true }),
                    ar: fields.text({ label: "عربي", multiline: true }),
                }, { label: "الموقع" }),
                googleMaps: fields.text({ label: "الموقع على Google Maps" }),
                workingHours: fields.array(
                    fields.object({
                        day: fields.text({ label: "Days" }),
                        time: fields.text({ label: "time" }),
                    })
                    , {
                        label: "Working Hours",
                        itemLabel: item => `${item.fields.day.value} ${item.fields.time.value}`
                    }
                ),
                socials: fields.array(
                    fields.object({
                        type: fields.select({
                            label: "type",
                            options: [
                                { label: "whatsapp", value: "whatsapp" },
                                { label: "facebook", value: "facebook" },
                                { label: "instagram", value: "instagram" },
                                { label: "linkedin", value: "linkedin" },
                                { label: "Telegram", value: "telegram" },
                            ],
                            defaultValue: "facebook",
                        }),
                        link: fields.url({ label: "Link" }),
                    })
                    , {
                        label: "وسائل التواصل الاجتماعي",
                        itemLabel: item => `${item.fields.type.value} ${item.fields.link.value}`
                    }
                ),
            },
        }),
    }
}
);