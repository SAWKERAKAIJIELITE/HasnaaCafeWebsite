import { getFeaturedProduct } from "@/data/products/index";
import type { ProductCategory } from "@/types/product";
import { featuredTemplate } from "./templates";
import { productStore } from './product-store'

export class FeaturedProductController
{
    private root!: HTMLElement;
    private changing = false;

    init()
    {
        this.root = document.querySelector("[data-featured-content]")!;

        this.render();

        // document.addEventListener("products:changed", () => this.render());
        document.addEventListener("products:category-change", () => this.render());
        document.addEventListener("products:filter-change", () => this.render());
    }

    private async render()
    {
        if (this.changing)
            return;

        this.changing = true;

        const product = productStore.getFeatured();

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
        </div>
    `;

            this.changing = false;
            return;
        }

        const card = this.root.querySelector(".featured-product");

        if (card)
        {
            card.classList.add("featured-product--changing");

            await new Promise(resolve => setTimeout(resolve, 250));
        }

        this.root.innerHTML = featuredTemplate(product);

        const newCard = this.root.querySelector(".featured-product");

        if (newCard)
        {
            newCard.classList.add("featured-product--enter");

            requestAnimationFrame(() => { newCard.classList.remove("featured-product--enter"); });
        }

        this.changing = false;

        // this.root.innerHTML=featuredTemplate(product)

        // this.setImage(product.image);
        // this.setTitle(product.title);
        // this.setDescription(product.description);
        // this.setOrigin(product.origin ?? "-");
        // this.setRoast(product.roastLevel ?? "-");
        // this.setPackages(product.packages);
        // this.setApplications(product.applications);
    }

    private setImage(src: string)
    {
        const image = this.root.querySelector<HTMLImageElement>("[data-featured-image]")!;

        image.src = src;
    }

    private setTitle(title: string)
    {
        this.root.querySelector("[data-featured-title]")!.textContent = title;
    }

    private setDescription(description: string)
    {
        this.root.querySelector("[data-featured-description]")!.textContent = description;
    }

    private setOrigin(origin: string)
    {
        this.root.querySelector("[data-featured-origin]")!.textContent = origin;
    }

    private setRoast(roast: string)
    {
        this.root.querySelector("[data-featured-roast]")!.textContent = roast;
    }

    private setPackages(packages: any[])
    {
        const container = this.root.querySelector("[data-featured-packages]")!;

        container.innerHTML = packages.map((pkg) => `<span class="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold">${pkg.weight}</span>`).join("");
    }

    private setApplications(applications: string[])
    {
        const container = this.root.querySelector("[data-featured-applications]")!;

        container.innerHTML = applications.map((item) => `<span class="rounded-full border border-[#005826]/20 bg-[#005826]/5 px-4 py-2 text-sm font-medium text-[#005826]">${item}</span>`).join("");
    }

    destroy() { }
}