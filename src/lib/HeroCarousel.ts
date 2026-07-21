import EmblaCarousel, {
    type EmblaCarouselType,
} from "embla-carousel";

import Autoplay from "embla-carousel-autoplay";


export class HeroCarousel
{
    // private root: HTMLElement;
    // private viewport: HTMLElement;
    private readonly options = {
        autoplayDelay: 5000,
        loop: true,
        duration: 30,
    };
    private progressAnimation?: Animation;
    private embla?: EmblaCarouselType;

    private readonly elements: {
        root: HTMLElement;
        viewport: HTMLElement;
        previous: HTMLButtonElement;
        next: HTMLButtonElement;
        dots: HTMLElement;
        progress: HTMLElement;
    };

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

        const previous = root.querySelector<HTMLButtonElement>("[data-prev]");

        const next = root.querySelector<HTMLButtonElement>("[data-next]");

        const dots = root.querySelector<HTMLElement>("[data-dots]");

        const progress = root.querySelector<HTMLElement>("[data-progress]");

        if (!viewport || !previous || !next || !dots || !progress)
            throw new Error("Hero slider is missing required elements.");

        // this.root = root;
        // this.viewport = viewport;

        this.elements = {
            root,
            viewport,
            previous,
            next,
            dots,
            progress,
        };
    }

    init()
    {
        this.embla = EmblaCarousel(
            this.elements.viewport,
            {
                loop: this.options.loop,
                align: "start",
                duration: this.options.duration,
            },
            [
                Autoplay({
                    delay: this.options.autoplayDelay,
                    stopOnMouseEnter: true,
                    stopOnInteraction: false,
                }),
            ]
        );

        this.elements.next.addEventListener("click", () =>
        {
            this.pause();
            this.next();
        });
        this.elements.previous.addEventListener("click", () =>
        {
            this.pause();
            this.previous();
        });

        this.createDots();
        this.updateDots();
        this.api.on("select", () =>
        {
            this.updateDots();
            this.startProgress();
            this.preloadNextSlide();
        });

        window.addEventListener("keydown", this.onKeyDown);
        this.startProgress();
    }

    private createDots()
    {
        this.elements.dots.innerHTML = "";

        this.api.scrollSnapList().forEach((_, index) =>
        {
            const button = document.createElement("button");

            button.className = "hero-dot";
            button.setAttribute(
                "aria-label",
                `Go to slide ${index + 1}`
            );
            button.addEventListener("click", () =>
            {
                this.pause();
                this.api.scrollTo(index);
            });

            this.elements.dots.appendChild(button);
        });
    }

    private updateDots()
    {
        const dots = this.elements.dots.querySelectorAll(".hero-dot");

        dots.forEach((dot, index) =>
        {
            dot.classList.toggle(
                "is-active",
                index === this.selectedIndex
            );
        });
    }

    private onKeyDown = (event: KeyboardEvent) =>
    {
        switch (event.key)
        {
            case "ArrowLeft":
                this.previous();
                break;

            case "ArrowRight":
                this.next();
                break;
        }
    };

    private startProgress()
    {
        this.progressAnimation?.cancel();

        this.progressAnimation = this.elements.progress.animate(
            [
                { width: "0%" },
                { width: "100%" },
                // { transform: "scaleX(0)" },
                // { transform: "scaleX(1)" },
            ],
            {
                duration: this.options.autoplayDelay,
                easing: "linear",
                fill: "forwards",
            }
        );
    }

    private preloadNextSlide()
    {
        const next = (this.selectedIndex + 1) % this.slideCount;

        console.log("next: " + next);

        this.loadSlide(next);
    }

    private loadSlide(index: number)
    {
        const slide = this.api.slideNodes()[index];

        const image = slide.querySelector<HTMLImageElement>("img");

        if (!image) return;

        if (!image.src)
        {
            image.src = image.dataset.src!;
        }
    }

    private resetProgress()
    {
        this.progressAnimation?.cancel();
        this.elements.progress.style.width = "0";
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
        this.progressAnimation?.play();
    }

    pause()
    {
        const autoplay = this.api.plugins().autoplay;
        autoplay?.stop();
        this.progressAnimation?.pause();
    }

    destroy()
    {
        // this.embla?.destroy();
        window.removeEventListener(
            "keydown",
            this.onKeyDown
        );

        this.progressAnimation?.cancel();
        this.elements.progress.style.width = "0%";
        // this.elements.progress.style.transform = "scaleX(0)";

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