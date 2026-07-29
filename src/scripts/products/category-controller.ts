import { productStore } from './product-store'
import type { ProductCategory } from "@/types/product";


export class ProductCategoryController
{
    private buttons: HTMLButtonElement[];

    private active:ProductCategory = "coffee-beans";

    constructor()
    {
        this.buttons = [...document.querySelectorAll<HTMLButtonElement>("[data-category-button]")];
    }

    init()
    {
        productStore.setCategory(this.active);
        this.update();

        this.buttons.forEach(button =>
        {
            button.addEventListener("click", () =>
            {
                const category = button.dataset.category as ProductCategory;

                if (category === this.active)
                    return;

                this.active = category;

                productStore.setCategory(category);
                productStore.setSearch("");

                const search = document.querySelector<HTMLInputElement>("[data-product-search]");

                if (search)
                {
                    search.value = "";
                }

                this.update();

                // document.dispatchEvent(new CustomEvent("products:category-changed"));
                document.dispatchEvent(new CustomEvent("products:category-change"));
                document.dispatchEvent(new CustomEvent("products:filters-rebuild"));
                // Refresh everything using the new state
                document.dispatchEvent(new CustomEvent("products:filter-change"));
            }
            );
        });
    }

    private update()
    {
        this.buttons.forEach(button =>{button.classList.toggle("active",button.dataset.category === this.active);});
    }

    destroy() { }
}