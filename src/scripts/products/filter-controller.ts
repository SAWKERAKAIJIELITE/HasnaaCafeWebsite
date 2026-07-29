import { productStore } from "./product-store";


export class ProductFilterController
{
    private search!: HTMLInputElement;
    private origin!: HTMLSelectElement;
    private roast!: HTMLSelectElement;

    init()
    {
        this.search = document.querySelector("[data-product-search]")!;

        this.origin = document.querySelector("[data-origin-filter]")!;

        this.roast = document.querySelector("[data-roast-filter]")!;

        this.search.addEventListener("input", () =>
        {
            productStore.setSearch(this.search.value);

            this.notify();
        });

        this.origin.addEventListener("change", () =>
        {
            productStore.setOrigin(this.origin.value);

            this.notify();
        });

        this.roast.addEventListener("change", () =>
        {
            productStore.setRoast(this.roast.value);

            this.notify();
        });

        document.addEventListener("products:filters-rebuild",() => this.rebuildFilters());
        // document.addEventListener("products:category-changed",() => this.rebuildFilters());

        this.rebuildFilters();
    }

    notify()
    {
        document.dispatchEvent(new CustomEvent("products:filter-change"));
    }

    private rebuildFilters()
    {
        // Reset the store
        productStore.setOrigin("all");
        productStore.setRoast("all");

        const origins = productStore.getOrigins();
        const roasts = productStore.getRoasts();

        this.origin.innerHTML = origins.map(origin => `
            <option value="${origin}">
                ${origin === "all" ? "All Origins" : origin}
            </option>
        `).join("");

        this.roast.innerHTML = roasts.map(roast => `
            <option value="${roast}">
                ${roast === "all" ? "All Roasts" : roast}
            </option>
        `).join("");

        this.origin.value = "all";
        this.roast.value = "all";

        this.notify()
    }
}