export class AnimationController
{
    private observer!: IntersectionObserver;

    init()
    {
        this.observer = new IntersectionObserver(
            (entries) =>
            {
                entries.forEach((entry) =>
                {
                    if (!entry.isIntersecting)
                        return;

                    entry.target.classList.add("active");

                    this.observer.unobserve(entry.target);
                });
            },
            { threshold: 0.2 }
        );

        document.querySelectorAll(
            ".reveal,.reveal-left,.reveal-right,.reveal-scale"
        ).forEach((el) => this.observer.observe(el));

        document.querySelectorAll("[data-stagger]").forEach((parent) =>
        {
            console.log('About to stagger children of', parent);
            [...parent.children].forEach((child, index) =>
            {
                (child as HTMLElement).style.transitionDelay = `${index * 500}ms`;
            });
        });
    }

    destroy()
    {
        this.observer.disconnect();
    }
}