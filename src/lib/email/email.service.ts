import { resendProvider } from "./resend-provider";
import type { ContactMessage } from "src/types/contact";


export class EmailService
{
    send(message: ContactMessage)
    {
        return resendProvider.send(message);
    }
}

export const emailService = new EmailService();