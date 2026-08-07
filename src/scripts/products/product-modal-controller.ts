import { productModalTemplate } from "./modal-template";
import { productState } from "./product-state";


export class ProductModalController
{
    private modal!: HTMLElement;
    private content!: HTMLElement;
    private current: string;

    init()
    {
        this.modal = document.querySelector("[data-product-modal]")!;
        this.current = document.documentElement.lang === "ar" ? "ar" : "en";

        document.addEventListener("click", (event) =>
        {
            const target = event.target as HTMLElement;

            const button = target.closest("[data-product-open]") as HTMLElement | null;

            if (!button)
                return;

            const id = button.dataset.productId!;

            this.open(id);
        });

        this.modal.querySelector("[data-close-modal]")?.addEventListener("click", () => this.close());

        this.modal.addEventListener("click", (event) =>
        {
            if (event.target === this.modal)
            {
                this.close();
            }
        });

        document.addEventListener("keydown", (event) =>
        {
            if (event.key === "Escape")
            {
                this.close();
            }
        });

        this.content = this.modal.querySelector("[data-modal-content]")!;
    }

    private async open(id: string)
    {
        this.current = document.documentElement.lang === "ar" ? "ar" : "en";

        const product = await productState.getProduct(id);

        if (!product)
            return;

        this.content.innerHTML = productModalTemplate(product, this.current);

        this.modal.classList.remove("hidden");

        this.modal.classList.add("flex");

        document.body.style.overflow = "hidden";
    }

    private close()
    {
        this.modal.classList.add("hidden");

        this.modal.classList.remove("flex");

        document.body.style.overflow = "";
    }

    destroy() { }
}