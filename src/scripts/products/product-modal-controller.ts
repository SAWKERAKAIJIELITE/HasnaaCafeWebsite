import { productStore } from "./product-store";
import { productModalTemplate } from "./modal-template";


export class ProductModalController
{
    private modal!: HTMLElement;
    private content!: HTMLElement;

    init()
    {
        this.modal = document.querySelector("[data-product-modal]")!;

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

        this.content =this.modal.querySelector("[data-modal-content]")!;
    }

    private open(id: string)
    {
        const product = productStore.getProduct(id);

        if (!product)
            return;

        this.content.innerHTML = productModalTemplate(product);

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