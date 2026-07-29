import { products } from "@/data/products/index";

export class ProductImagePreloader
{
    private images: HTMLImageElement[] = [];

    init()
    {
        const uniqueImages = [...new Set(products.map(p => p.image))];
        uniqueImages.forEach(src =>
        {
            const image = new Image();

            image.src = src;

            this.images.push(image);
        });

        console.log(`Preloaded ${this.images.length} product images`);
    }

    destroy()
    {
        this.images.length = 0;
    }
}