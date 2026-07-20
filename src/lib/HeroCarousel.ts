import EmblaCarousel, {
    type EmblaCarouselType,
} from "embla-carousel";

import Autoplay from "embla-carousel-autoplay";


export class HeroCarousel
{
    private root: HTMLElement;
    private viewport: HTMLElement;
    private embla?: EmblaCarouselType;

    constructor(selector: string)
    {
        const root = document.querySelector<HTMLElement>(selector);
        if (!root)
        {
            throw new Error(`Hero slider "${selector}" was not found.`);
        }

        const viewport = root.querySelector<HTMLElement>(".embla__viewport");
        if (!viewport)
        {
            throw new Error("Embla viewport was not found.");
        }

        this.root = root;
        this.viewport = viewport;
    }

    init()
    {
        this.embla = EmblaCarousel(
            this.viewport,
            {
                loop: true,
                align: "start",
                duration: 30,
            },
            [
                Autoplay({
                    delay: 5000,
                    stopOnMouseEnter: true,
                    stopOnInteraction: false,
                }),
            ]
        );
    }

    next()
    {
        // this.embla?.scrollNext();
        this.api.scrollNext();
    }

    previous()
    {
        // this.embla?.scrollPrev();
        this.api.scrollPrev();
    }

    play()
    {
        const autoplay = this.api.plugins().autoplay;
        autoplay?.play();
    }

    pause()
    {
        const autoplay = this.api.plugins().autoplay;
        autoplay?.stop();
    }

    destroy()
    {
        // this.embla?.destroy();
        this.api.destroy();
    }

    private get api(): EmblaCarouselType
    {
        if (!this.embla)
        {
            throw new Error("HeroCarousel has not been initialized.");
        }
        return this.embla;
    }

    get selectedIndex()
    {
        return this.api.selectedScrollSnap();
    }

    get slideCount()
    {
        return this.api.scrollSnapList().length;
    }

    canNext()
    {
        return this.api.canScrollNext();
    }

    canPrevious()
    {
        return this.api.canScrollPrev();
    }
}