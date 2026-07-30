import { productMap } from "@/data/products/index";
import type { Product } from "@/types/product";
import { localize } from "@/i18n/localize";
import { translations } from "@/i18n/translations";
import type { ProductCategory } from "@/types/product";

export function productGridTemplate(products: Product[])
{
    // const products = productMap[category].filter(product => !product.featured);

    return products.map(product => `
        <article class="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#005826]/20 hover:shadow-[0_30px_70px_rgba(0,0,0,.12)]">
            <div class="relative overflow-hidden bg-slate-100">
                <img
                    src="${product.image}"
                    alt="${product.title}"
                    class="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            <div class="p-7">
                <span class="inline-flex w-fit items-center rounded-full bg-[#005826]/10 px-3 py-1 text-xs font-bold uppercase tracking-[.18em] text-[#005826]"> ${localize(translations.productCategory[product.category])} </span>
                <h3 class="mt-5 text-2xl font-black text-slate-900"> ${localize(product.title) } </h3>
                <p class="mt-4 line-clamp-3 leading-7 text-slate-600"> ${localize(product.description)} </p>
                <div class="mt-6 flex flex-wrap gap-2">
                    ${product.packages.map(pkg => `
                        <span class="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"> ${pkg.weight} </span>
                        `).join("")
        }
                </div>
                <button data-product-open data-product-id="${product.id}" class="group mt-8 inline-flex items-center gap-2 font-semibold text-[#005826]">
                    <span> View Details </span>
                    <span class="transition-transform duration-300 group-hover:translate-x-1"> → </span>
                </button>
            </div>
        </article>
    `).join("");
}