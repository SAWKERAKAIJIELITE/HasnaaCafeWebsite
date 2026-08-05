// import { productStore } from "./product-store";
import { productState } from "./product-state";
import { localize } from "@/i18n/localize";
import { translations } from "@/i18n/translations";

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
            productState.setSearch(this.search.value);

            this.notify();
        });

        this.origin.addEventListener("change", () =>
        {
            productState.setOrigin(this.origin.value);

            this.notify();
        });

        this.roast.addEventListener("change", () =>
        {
            productState.setRoast(this.roast.value);

            this.notify();
        });

        document.addEventListener("products:filters-rebuild", () => this.rebuildFilters());
        // document.addEventListener("products:category-changed",() => this.rebuildFilters());

        this.rebuildFilters();
    }

    notify()
    {
        document.dispatchEvent(new CustomEvent("products:filter-change"));
    }

    private async rebuildFilters()
    {
        // Reset the store
        productState.setOrigin("all");
        productState.setRoast("all");

        const origins = await productState.getOrigins();
        const roasts = await productState.getRoasts();

        //     ${origin === "all"
        // ? localize(translations.filters.allOrigins)
        // : origin
        // }
        this.origin.innerHTML = origins.map(origin => `
            <option value="${origin}">
            ${origin === "all" ? "All Origins" : origin}
            </option>
        `).join("");

        // ${roast === "all"
        // ? localize(translations.filters.allRoasts)
        // : localize(translations.roast[roast as keyof typeof translations.roast])
        // }
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