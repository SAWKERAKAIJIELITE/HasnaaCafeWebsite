import { ActionError, defineAction } from "astro:actions";
import type { ContactMessage } from "src/types/contact";
import { buildContactEmail } from "./email-template";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);


class ResendProvider
{
    async send(message: ContactMessage)
    {
        const result = await resend.emails.send({
            from: "Website <onboarding@resend.dev>",

            to: [
                process.env.CONTACT_EMAIL
            ],

            subject: `Website Contact • ${message.service}`,

            replyTo: message.email,

            html: buildContactEmail(message),
        });

        if (result.error)
        {
            throw new ActionError({
                code: "BAD_REQUEST",
                message: result.error.message,
            });
        }

        return result.data;
    }
}

export const resendProvider = new ResendProvider();

// export const server = {
//     send: defineAction({
//         accept: "form",
//         handler: async () =>
//         {
//             const { data, error } = await resend.emails.send({
//                 from: 'onboarding@resend.dev',
//                 to: 'delivered@resend.dev',
//                 subject: 'Hello World',
//                 html: '<strong>it works!</strong>',
//             });

//             if (error)
//             {
//                 throw new ActionError({
//                     code: "BAD_REQUEST",
//                     message: error.message,
//                 });
//             }

//             return data;
//         },
//     }),
// };