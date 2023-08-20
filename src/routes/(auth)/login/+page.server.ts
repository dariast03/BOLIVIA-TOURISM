import { loginUser } from "../../../lib/server/auth"
import { redirect } from "@sveltejs/kit"
import type { RequestEvent } from "./$types.js";

export const actions = {
    default: async (event: RequestEvent) => {
        const data = await event.request.formData()
        const email = data.get('email');
        const password = data.get('password');

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 3000);
        });

        if (email === "admin@grupo5.com" && password === "password") {
            loginUser(event)
            const redirectTo = event.url.searchParams.get("redirectTo")
            if (redirectTo) {
                throw redirect(302, `/${redirectTo.slice(1)}`)
            }
            throw redirect(302, "/")
        }

        const messsageError = "Usuario o contrasena incorrectos"
        throw redirect(302, `/login?message=${messsageError}`)
    }
}

export const load = async (event) => {
    if (event.locals.user) {
        throw redirect(302, "/")
    }
}
