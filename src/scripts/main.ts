// import EmblaCarousel from "embla-carousel";
// import Autoplay from "embla-carousel-autoplay";
import { HeroCarousel } from "@/lib/HeroCarousel";
import { NavbarController } from "./navbar";
import { AnimationController } from "./animations";
import { CounterController } from "./counters";
import { ActiveSectionController } from "./active-section";
import { MobileMenuController } from "./mobile-menu";


document.addEventListener("DOMContentLoaded", () =>
{
    const slider = new HeroCarousel("#hero-slider");
    const navbar = new NavbarController("#navbar");
    const animationController = new AnimationController();
    const counterController = new CounterController();
    const activeSectionController = new ActiveSectionController();
    const mobileMenuController = new MobileMenuController();
    slider.init();
    navbar.init();
    animationController.init();
    counterController.init();
    activeSectionController.init();
    mobileMenuController.init();
});
// export function initHeroSlider()
// {
//     const root = document.querySelector<HTMLElement>("#hero-slider");

//     if (!root) return;

//     const viewport = root.querySelector<HTMLElement>(".embla__viewport");

//     if (!viewport) return;

//     EmblaCarousel(viewport, {
//         loop: true,
//         // align: "start",
//         duration: 50,
//     }, [
//         Autoplay({
//             delay: 5000,
//             stopOnMouseEnter: true,
//             stopOnInteraction: false,
//         }),
//     ]);
// }
// console.log("root");
// const root = document.querySelector("#hero-slider");
// console.log("root + ", root);
// document.addEventListener("astro:page-load", () =>
// document.addEventListener("DOMContentLoaded", () =>
// {
//     const root = document.querySelector("#hero-slider");
//     // console.log("root22");
//     if (!root) return;

//     const viewport = root.querySelector(".embla__viewport");
//     if (!viewport) return;

//     EmblaCarousel(viewport, {
//         loop: true,
//         // align: "start",
//         duration: 50,
//     }, [
//         Autoplay({
//             delay: 5000,
//             stopOnMouseEnter: true,
//             stopOnInteraction: false,
//         }),
//     ]);

// });