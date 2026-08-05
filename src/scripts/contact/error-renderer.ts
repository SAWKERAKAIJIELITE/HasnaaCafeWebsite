export class ErrorRenderer
{
    constructor(private form: HTMLFormElement,) { }

    clear()
    {
        this.form.querySelectorAll("[data-error]").forEach(element => { element.textContent = ""; });
    }

    show(errors: Record<string, string>,)
    {
        this.clear();

        Object.entries(errors).forEach(([field, message]) =>
        {
            const element =this.form.querySelector<HTMLElement>(`[data-error="${field}"]`,);

            if (element)
            {
                element.textContent = message;
            }
        });
    }
}