export class ContactAnimation
{
    playSuccess(form: HTMLFormElement)
    {
        form.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(1.015)" },
                { transform: "scale(1)" }
            ],
            {duration: 350}
        );
    }
}