import type { ContactMessage } from "src/types/contact";


export function buildContactEmail(data: ContactMessage)
{
    return `
        <h2>New Contact Request</h2>

        <table cellspacing="8">
            <tr>
                <td><b>Name</b></td>
                <td>${data.name}</td>
            </tr>

            <tr>
                <td><b>Company</b></td>
                <td>${data.company ?? "-"}</td>
            </tr>

            <tr>
                <td><b>Email</b></td>
                <td>${data.email}</td>
            </tr>

            <tr>
                <td><b>Phone</b></td>
                <td>${data.phone ?? "-"}</td>
            </tr>

            <tr>
                <td><b>Country</b></td>
                <td>${data.country ?? "-"}</td>
            </tr>

            <tr>
                <td><b>Product</b></td>
                <td>${data.service}</td>
            </tr>

            <tr>
                <td><b>Message</b></td>
                <td>${data.message}</td>
            </tr>
        </table>
    `;
}