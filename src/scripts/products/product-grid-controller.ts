import { productGridTemplate } from "./grid-template";
import { productState } from "./product-state";


export class ProductGridController
{
    private grid!: HTMLElement;

    private changing = false;
    private current: string;

    init()
    {
        this.grid = document.querySelector("[data-product-grid]")!;
        this.current = document.documentElement.lang === "ar" ? "ar" : "en";

        this.render();

        document.addEventListener("products:category-change", () => this.render());
        document.addEventListener("products:filter-change", () => this.render());
    }

    private async render()
    {
        this.current = document.documentElement.lang === "ar" ? "ar" : "en";

        if (this.changing)
            return;

        this.changing = true;

        this.grid.classList.add("opacity-0");

        await new Promise(resolve => setTimeout(resolve, 180));

        this.grid.innerHTML = productGridTemplate(
            await productState.getProducts(this.current),
            this.current
        );

        this.grid.classList.remove("opacity-0");

        this.animateCards();

        this.changing = false;
    }

    private animateCards()
    {
        const cards = [...this.grid.children];

        cards.forEach((card, index) =>
        {
            const element = card as HTMLElement;

            element.animate([
                {
                    opacity: 0,
                    transform: "translateY(24px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
                {
                    duration: 500,
                    delay: index * 80,
                    easing: "ease",
                    fill: "forwards"
                }
            );
        });
    }

    destroy() { }
}