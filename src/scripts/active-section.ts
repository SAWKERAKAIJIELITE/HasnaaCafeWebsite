export class ActiveSectionController
{
    private observer!: IntersectionObserver;

    private readonly visibleSections = new Map<string, number>();

    init()
    {
        const sections = document.querySelectorAll<HTMLElement>("section[id]");

        this.observer = new IntersectionObserver((entries) =>
        {
            entries.forEach((entry) =>
            {
                // if (!entry.isIntersecting)
                //     return;

                // this.activate(entry.target.id);

                this.visibleSections.set(entry.target.id, entry.intersectionRatio);
                this.updateActiveSection();
            });
        },
            { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
        );


        sections.forEach((section) => { this.observer.observe(section); });
    }

    destroy()
    {
        this.observer.disconnect();
    }

    private updateActiveSection()
    {
        let current = "";
        let highestRatio = 0;

        this.visibleSections.forEach((ratio, id) =>
        {
            if (ratio > highestRatio)
            {
                highestRatio = ratio;
                current = id;
            }
        });

        if (current)
        {
            this.activate(current);
        }
    }

    private activate(id: string)
    {
        document.querySelectorAll<HTMLAnchorElement>(".nav-link").forEach((link) =>
        {
            const active = link.getAttribute("href") === `#${id}`;

            link.classList.toggle(
                "active",
                active
            );
        });
    }
}