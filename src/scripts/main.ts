// import EmblaCarousel from "embla-carousel";
// import Autoplay from "embla-carousel-autoplay";
import { HeroCarousel } from "@/lib/HeroCarousel";
import { NavbarController } from "./navbar";
import { AnimationController } from "./animations";
import { CounterController } from "./counters";
import { ActiveSectionController } from "./active-section";
import { MobileMenuController } from "./mobile-menu";
import { ScrollToTopController } from "./scroll-to-top";
import { ProductCategoryController } from "./products/category-controller";
import { FeaturedProductController } from "./products/featured-controller";
import { ProductImagePreloader } from "@/scripts/products/image-preloader";
import { ProductGridController } from "@/scripts/products/product-grid-controller";
import { ProductModalController } from "@/scripts/products/product-modal-controller";
import { ProductFilterController } from "@/scripts/products/filter-controller";
import { LanguageController } from "./language-controller";
import { TranslationController } from "./translation-controller";


document.addEventListener("DOMContentLoaded", () =>
{
    const slider = new HeroCarousel("#hero-slider");
    const navbar = new NavbarController("#navbar");
    const animationController = new AnimationController();
    const counterController = new CounterController();
    const activeSectionController = new ActiveSectionController();
    const mobileMenuController = new MobileMenuController();
    const scrollToTopController = new ScrollToTopController();
    const productCategory = new ProductCategoryController();
    const featuredProductController = new FeaturedProductController();
    const imagePreloader = new ProductImagePreloader();
    const productGridController = new ProductGridController();
    const productModalController = new ProductModalController();
    const productFilterController = new ProductFilterController();
    const languageController = new LanguageController();
    const translationController = new TranslationController();

    slider.init();
    navbar.init();
    animationController.init();
    counterController.init();
    activeSectionController.init();
    mobileMenuController.init();
    scrollToTopController.init();
    productCategory.init();
    featuredProductController.init();
    imagePreloader.init();
    productGridController.init();
    productModalController.init();
    productFilterController.init();
    languageController.init();
    translationController.init();
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