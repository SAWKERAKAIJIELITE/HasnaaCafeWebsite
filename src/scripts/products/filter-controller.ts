import { productState } from "./product-state";
import { localize } from "@/i18n/localize";


const originsDict = {
    Brazil: { ar: "البرازيل", en: "Brazil", },
    Colombia: { ar: "كولومبيا", en: "Colombia", },
    Ceylon: { ar: "سيلان", en: "Ceylon", },
    Ethiopia: { ar: "إثيوبيا", en: "Ethiopia", },
    Yemen: { ar: "يمن", en: "Yemen", },
    Arabic: { ar: "عربي", en: "Arabic", },
    China: { ar: "الصين", en: "China", },
}
const roastDict = {
    light: { en: "Light", ar: "تحميص خفيف" },
    medium: { en: "Medium", ar: "تحميص وسط" },
    dark: { en: "Dark", ar: "تحميص داكن" },
}


export class ProductFilterController
{
    private search!: HTMLInputElement;
    private origin!: HTMLSelectElement;
    private roast!: HTMLSelectElement;
    private current: string;

    init()
    {
        this.search = document.querySelector("[data-product-search]")!;
        this.origin = document.querySelector("[data-origin-filter]")!;
        this.roast = document.querySelector("[data-roast-filter]")!;
        this.current = document.documentElement.lang === "ar" ? "ar" : "en";

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

        this.rebuildFilters();
    }

    notify()
    {
        document.dispatchEvent(new CustomEvent("products:filter-change"));
    }

    private async rebuildFilters()
    {
        productState.setOrigin("all");
        productState.setRoast("all");

        const origins = await productState.getOrigins();
        const roasts = await productState.getRoasts();
        // const flavors = (
        //     await productState.getProducts(this.current)
        // ).map(p => p.flavor).reduce(
        //     (dict, item) =>
        //     {
        //         dict[item.en] = item;
        //         return dict;
        //     },
        //     {}
        // );

        this.origin.innerHTML = origins.map(origin => `
            <option value="${origin}">
            ${origin === "all" ? "All Origins" : localize(originsDict[origin], this.current)}
            </option>
        `).join("");

        this.roast.innerHTML = roasts.map(roast => `
            <option value="${roast}">
            ${roast === "all" ? "All Roasts" : localize(roastDict[roast], this.current)}
            </option>
        `).join("");

        this.origin.value = "all";
        this.roast.value = "all";

        this.notify()
    }
}