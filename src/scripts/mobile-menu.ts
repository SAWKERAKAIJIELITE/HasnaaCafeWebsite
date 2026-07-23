import { lockBodyScroll, unlockBodyScroll } from "@/lib/dom";


export class MobileMenuController
{
    private button: HTMLButtonElement;

    private menu: HTMLElement;

    private panel: HTMLElement;

    private overlay: HTMLElement;

    private opened = false;

    constructor()
    {
        this.button = document.querySelector("#mobile-menu-button")!;

        this.menu = document.querySelector("#mobile-menu")!;

        this.panel = document.querySelector("#mobile-panel")!;

        this.overlay = document.querySelector("#mobile-overlay")!;
    }

    init()
    {
        this.button.addEventListener("click", () => this.toggle());

        this.overlay.addEventListener("click", () => this.close());

        document.addEventListener(
            "keydown",
            (e) =>
            {
                if (e.key === "Escape")
                {
                    this.close();
                }
            }
        );

        this.menu.querySelectorAll("a").forEach((link) => { link.addEventListener("click", () => this.close()); });
    }

    destroy() { }

    toggle()
    {
        this.opened ? this.close() : this.open();
    }

    private open()
    {
        // this.opened = true;

        // this.menu.classList.remove("pointer-events-none");

        // this.overlay.classList.remove("opacity-0");

        // this.panel.classList.remove("-translate-y-full");

        // document.body.style.overflow = "hidden";

        // this.button.setAttribute("aria-expanded", "true");

        this.opened = true;

        this.menu.classList.add("mobile-menu--open");

        // document.body.style.overflow = "hidden";
        lockBodyScroll();

        this.button.setAttribute("aria-expanded", "true");
    }

    close()
    {
        // this.opened = false;

        // this.overlay.classList.add("opacity-0");

        // this.panel.classList.add("-translate-y-full");

        // document.body.style.overflow = "";

        // this.button.setAttribute("aria-expanded", "false");

        // setTimeout(() => { this.menu.classList.add("pointer-events-none"); }, 300);

        this.opened = false;

        this.menu.classList.remove("mobile-menu--open");

        // document.body.style.overflow = "";
        unlockBodyScroll();

        this.button.setAttribute("aria-expanded", "false");
    }
}