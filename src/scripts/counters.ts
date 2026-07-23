export class CounterController
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

                    this.animate(entry.target as HTMLElement);

                    this.observer.unobserve(entry.target);
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll<HTMLElement>(".counter").forEach((counter) =>
        {
            this.observer.observe(counter);
        });
    }

    destroy()
    {
        this.observer.disconnect();
    }

    private animate(counter: HTMLElement)
    {
        const target = Number(counter.dataset.target);

        const suffix = counter.dataset.suffix ?? "";

        const duration = 1500;

        const start = performance.now();

        const update = (time: number) =>
        {
            const progress = Math.min(
                (time - start) / duration,
                1
            );

            const current = Math.floor(progress * target);

            counter.textContent = `${current}${suffix}`;

            if (progress < 1)
            {
                requestAnimationFrame(update);
            }
        };
        requestAnimationFrame(update);
    }
}