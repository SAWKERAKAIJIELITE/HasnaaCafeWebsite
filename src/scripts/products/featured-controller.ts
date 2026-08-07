import { featuredTemplate } from "./templates";
import { productState } from "./product-state";


export class FeaturedProductController
{
    private root!: HTMLElement;
    private changing = false;
    private current: string;

    init()
    {
        this.root = document.querySelector("[data-featured-content]")!;
        this.current = document.documentElement.lang === "ar" ? "ar" : "en";

        this.render(this.current);

        document.addEventListener("products:category-change", () =>
        {
            this.current = document.documentElement.lang === "ar" ? "ar" : "en";
            this.render(this.current);
        });
        document.addEventListener("products:filter-change", () =>
        {
            this.current = document.documentElement.lang === "ar" ? "ar" : "en";
            this.render(this.current)
        });
    }

    private async render(currentLanguage: string)
    {
        if (this.changing)
            return;

        this.changing = true;

        const product = await productState.getFeatured(currentLanguage);

        if (!product)
        {
            this.root.innerHTML = `
                <div class="rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
                    <h3 class="text-2xl font-bold text-slate-700">
                        No featured product found
                    </h3>

                    <p class="mt-4 text-slate-500">
                        Try changing your search or filters.
                    </p>
                </div>`;
            this.changing = false;
            return;
        }

        const card = this.root.querySelector(".featured-product");

        if (card)
        {
            card.classList.add("featured-product--changing");

            await new Promise(resolve => setTimeout(resolve, 250));
        }

        this.root.innerHTML = featuredTemplate(product, currentLanguage);

        const newCard = this.root.querySelector(".featured-product");

        if (newCard)
        {
            newCard.classList.add("featured-product--enter");

            requestAnimationFrame(() => { newCard.classList.remove("featured-product--enter"); });
        }

        this.changing = false;
    }

    destroy() { }
}