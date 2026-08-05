import { contactApi } from "./contact-api";
import { validateContact } from "./validation";
import { ContactAnimation } from "./contact-animation";
import { ContactState } from "./contact-state";
import {ErrorRenderer} from "./error-renderer";

export class ContactController
{
    private form!: HTMLFormElement;
    private submit!: HTMLButtonElement;
    private success!: HTMLElement;
    private error!: HTMLElement;

    private animation = new ContactAnimation();
    private state: ContactState;
    private api = contactApi;
    private renderer!: ErrorRenderer;

    init()
    {
        this.form = document.querySelector("[data-contact-form]")!;
        if (!this.form) return;

        this.state = new ContactState(this.form);
        this.renderer = new ErrorRenderer(this.form);

        this.submit = this.form.querySelector("[type=submit]")!;
        this.success = document.querySelector("[data-contact-success]")!;
        this.error = document.querySelector("[data-contact-error]")!;

        this.form.addEventListener("submit", e => this.submitForm(e));
    }

    private async submitForm(e: SubmitEvent)
    {
        e.preventDefault();

        this.hideMessages();
        this.renderer.clear();

        this.submit.disabled = true;
        this.submit.textContent = "Sending...";

        try
        {
            const data = this.state.getData();

            const { valid, errors } = validateContact(data);

            if (!valid)
            {
                this.renderer.show(errors);
                throw new Error(JSON.stringify(errors));
            }

            await this.api.send(data);

            this.state.reset()

            this.animation.playSuccess(this.form);

            this.success.classList.remove("hidden");

        } catch (err)
        {
            console.error(err)
            this.error.classList.remove("hidden");
        } finally
        {
            this.submit.disabled = false;
            this.submit.textContent = "Send Message";
        }
    }

    private hideMessages()
    {
        this.success.classList.add("hidden");
        this.error.classList.add("hidden");
    }
}