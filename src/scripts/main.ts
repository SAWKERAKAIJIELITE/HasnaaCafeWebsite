// import EmblaCarousel from "embla-carousel";
// import Autoplay from "embla-carousel-autoplay";
import { HeroCarousel } from "@/lib/HeroCarousel";


document.addEventListener("DOMContentLoaded", () =>
{
    const slider = new HeroCarousel("#hero-slider");
    slider.init();
    // slider.startProgress();
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