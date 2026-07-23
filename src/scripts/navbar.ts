export class NavbarController
{
    private navbar: HTMLElement;

    constructor(selector: string)
    {
        const navbar = document.querySelector<HTMLElement>(selector);

        if (!navbar)
            throw new Error("Navbar not found.");

        this.navbar = navbar;
    }

    init()
    {
        this.update();

        console.log('Navbar');

        window.addEventListener("scroll", () => this.update());
    }

    private update()
    {
        const scrolled = window.scrollY > 50;

        this.navbar.classList.toggle("bg-white/95",scrolled);
        this.navbar.classList.toggle("backdrop-blur",scrolled);
        this.navbar.classList.toggle("shadow-lg",scrolled);
    }
}