import type { Product } from "@/types/product";
import { localize } from "@/i18n/localize";
import { translations } from "@/i18n/translations";
const imgs = import.meta.glob(
    "/src/content/products/**/*.{jpg,jpeg,png,gif,webp,avif}",
    { eager: true, import: "default" },
);

// ${localize(translations.productCategory[product.category])}
// ${localize(product.title)}
// ${localize(product.description)}
// <p class="mt-2 font-semibold text-slate-800"> ${product.origin ? localize(product.origin) : "-"} </p>
// ${product.roastLevel ? localize(translations.roast[product.roastLevel]) : "-"}
// ${localize(translations.productApplication[app])}

export function productModalTemplate(product: Product)
{
    // <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    return `
<div class="grid lg:grid-cols-[45%_55%]">
    <div class="bg-slate-100 h-[280px] sm:h-[360px] lg:h-auto overflow-hidden relative">
        <img
            src="${imgs[`/src/content/products/${product.id}/${product.thumbnail}`].src}"
            alt="${product.name}"
            class="h-full w-full object-cover object-center"
        />
    </div>
    <div class="flex flex-col lg:max-h-[85vh]
lg:overflow-y-auto sm:p-8 justify-center p-6">
        <span class="inline-flex w-fit rounded-full bg-[#005826]/10 px-3 py-1 text-xs font-bold uppercase tracking-[.2em] text-[#005826]">
            ${product.category}
        </span>
        <h2 class="mt-6 text-3xl lg:text-[2rem] font-black text-slate-900"> 
            ${product.name}
        </h2>
        <p class="mt-6 leading-8 text-slate-600">
            ${product.description}
        </p>
        <div class="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
                <p class="text-xs uppercase tracking-[.25em] text-slate-400"> Origin </p>
                <p class="mt-2 font-semibold text-slate-800"> ${product.origin ?? "-"} </p>
            </div>
            <div>
                <p class="text-xs uppercase tracking-[.25em] text-slate-400"> Roast </p>
                <p class="mt-2 font-semibold text-slate-800">
                    ${product.roastLevel ?? "-"}
                </p>
            </div>
        </div>
        <div class="mt-10">
            <p class="mb-4 text-xs uppercase tracking-[.25em] text-slate-400"> Packaging </p>
            <div class="flex flex-wrap gap-3">
                ${product.packaging.map(pkg => `
                    <span class="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">${pkg.amount} ${pkg.unit}</span>
                `).join("")}
            </div>
        </div>
        <a href="#contact" class="mt-12 inline-flex w-fit items-center rounded-full bg-[#005826] px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#3c9339]">
            Request Catalogue
        </a>
    </div>
</div>
`;
}