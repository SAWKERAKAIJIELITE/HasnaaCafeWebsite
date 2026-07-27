export class ScrollToTopController
{
    private button!: HTMLButtonElement;
    private progress!: SVGCircleElement;
    private circumference = 151;

    init()
    {
        this.button = document.querySelector("#scroll-to-top")!;
        this.progress = document.querySelector("#scroll-progress")!;

        window.addEventListener("scroll", this.handleScroll);
        this.button.addEventListener("click", this.scrollToTop);

        this.handleScroll();
    }

    destroy()
    {
        window.removeEventListener("scroll", this.handleScroll);
        this.button.removeEventListener("click", this.scrollToTop);
    }

    private handleScroll = () =>
    {
        const scrollTop = window.scrollY;

        const maxScroll =document.documentElement.scrollHeight- window.innerHeight;

        const percent = scrollTop / maxScroll;

        const offset =this.circumference -percent * this.circumference;

        this.progress.style.strokeDashoffset = offset.toString();

        if (scrollTop > 600)
        {
            this.button.classList.add("scroll-top--visible");
        } else
        {
            this.button.classList.remove("scroll-top--visible");
        }

        // if (window.scrollY > 600)
        // {
        //     this.button.classList.remove(
        //         "opacity-0",
        //         "pointer-events-none",
        //         "translate-y-6",
        //         "scale-90"
        //     );
        //     this.button.classList.add(
        //         "opacity-100",
        //         "translate-y-0",
        //         "scale-100"
        //     );
        // }
        // else
        // {
        //     this.button.classList.add(
        //         "opacity-0",
        //         "pointer-events-none",
        //         "translate-y-6",
        //         "scale-90"
        //     );
        //     this.button.classList.remove(
        //         "opacity-100",
        //         "translate-y-0",
        //         "scale-100"
        //     );
        // }
    };

    private scrollToTop = () => { 
        const reduceMotion =window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        window.scrollTo({
            top: 0,
            behavior:reduceMotion? "auto": "smooth"
        });
        // window.scrollTo({ top: 0, behavior: "smooth", }); 
    };
}