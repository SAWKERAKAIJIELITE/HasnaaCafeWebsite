import type { Product,ProductSummary } from "@/types/product";
import { localize } from "@/i18n/localize";

const imgs = import.meta.glob(
    "/src/content/products/**/*.{jpg,jpeg,png,gif,webp,avif}",
    { eager: true, import: "default" },
);


const originsDict = {
    Brazil: { ar: "البرازيل", en: "Brazil", },
    Colombia: { ar: "كولومبيا", en: "Colombia", },
    Ceylon: { ar: "سيلان", en: "Ceylon", },
    Ethiopia: { ar: "إثيوبيا", en: "Ethiopia", },
    Yemen: { ar: "يمن", en: "Yemen", },
    Arabic: { ar: "عربي", en: "Arabic", },
    China: { ar: "الصين", en: "China", },
}

const packageChipClass = "inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-[#005826] hover:text-white";
const badgeClass = "inline-flex w-fit items-center rounded-full bg-[#005826]/10 px-3 py-1 text-xs font-bold uppercase tracking-[.18em] text-[#005826]";
const arrowClass = "group inline-flex items-center gap-2 font-semibold text-[#005826] transition duration-300";


export function featuredTemplate(product: ProductSummary,currentLanguage:string)
{
    return `
<div class="featured-product overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,.08)]">
    <div class="grid min-h-[420px] lg:h-[520px]  lg:grid-cols-[48%_52%]">
        <div class="relative overflow-hidden bg-slate-100 h-[320px] lg:h-full ">
            <img
                src="${imgs[`/src/content/products/${product.id}/${product.thumbnail}`].src}"
                alt="${product.name_en}"
                class="h-full w-full object-cover transition duration-700 hover:scale-105 object-center"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
        </div>
        <div class="flex flex-col justify-center p-8 lg:p-10">
            <span class="text-sm font-bold uppercase tracking-[.3em] text-[#fdb913]"> Featured Product </span>
            <h3 class="mt-5 text-3xl lg:text-4xl font-black text-slate-900"> ${localize({ ar: product.name, en: product.name_en }, currentLanguage) } </h3>
            <p class="mt-5 leading-7 line-clamp-3 text-slate-600"> ${localize(product.description,currentLanguage) } </p>
            <div class="mt-10 grid gap-6 sm:grid-cols-2">
                <div>
                    <p class="text-xs uppercase tracking-[.25em] text-slate-400"> Origin </p>
                    <p class="mt-2 font-semibold text-slate-800"> ${
                        product.origin ? localize(originsDict[product.origin], currentLanguage) : "-"
                    } </p>
                </div>
            </div>
            <button data-product-open data-product-id="${product.id}" class="mt-12 inline-flex w-fit items-center rounded-full bg-[#005826] px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#3c9339]"> View Details </button>
            </div>
            </div>
            </div>
            `;
        }
        // <div class="mt-8">
        //     <p class="mb-4 text-xs uppercase tracking-[.25em] text-slate-400"> Packaging </p>
        //     <div class="flex flex-wrap gap-3">
        //         ${product.packaging.map(pkg => `
        //             <span class="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"> ${pkg.amount} ${pkg.unit} </span>
        //         `).join("")}
        //     </div>
        // </div>
        // <div>
        //     <p class="text-xs uppercase tracking-[.25em] text-slate-400"> Roast </p>
        //     <p class="mt-2 font-semibold text-slate-800"> ${product.roastLevel ?? "-"} </p>
        // </div>
        //     <div class="mt-10">
        //         <p class="mb-4 text-xs uppercase tracking-[.25em] text-slate-400"> Applications </p>
        //         <div class="flex flex-wrap gap-3">
        //             ${product.applications.map(app => `
        //             <span class="rounded-full border border-[#005826]/20 bg-[#005826]/5 px-4 py-2 text-sm font-medium text-[#005826]"> ${app} </span>
        //             `).join("")
        // }
        //         </div>
        //     </div>