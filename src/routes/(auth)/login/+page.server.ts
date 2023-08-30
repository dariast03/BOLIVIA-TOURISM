import { loginUser } from "../../../lib/server/auth"
import { redirect } from "@sveltejs/kit"
import type { RequestEvent } from "./$types.js";
import { PUBLIC_BASE_URL } from '$env/static/public';

const parseBaseUrl = PUBLIC_BASE_URL.substring(0, PUBLIC_BASE_URL.length - 4)


const traducciones = {
    "Cannot find user": "No se ha encontrado al usuario",
    "Password is too short": "La contraseña es demasiado corta",
    "Incorrect password": "La contraseña es incorrecta",
    "": "Hubo un error al iniciar sesion"
}

const verificarCredenciales = async (data: any) => {
    const response = await fetch(parseBaseUrl + '/login', {
        method: "POST",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)

    })

    return await response.json();
}


export const actions = {
    default: async (event: RequestEvent) => {
        const data = await event.request.formData()
        const email = data.get('email');
        const password = data.get('password');

        const result = await verificarCredenciales({ email, password })

        console.log(result);
        if (result?.accessToken) {
            event.cookies.set("user", `${result.user.email}|${password}`)

            const redirectTo = event.url.searchParams.get("redirectTo")
            if (redirectTo) {
                throw redirect(302, `/${redirectTo.slice(1)}`)
            }

            throw redirect(302, result?.user.rol ? "/admin/dashboard" : "/")
        }

        const messsageError = result || "Usuario o contrasena incorrectos"
        //@ts-ignore
        throw redirect(302, `/login?message=${traducciones[messsageError || ""]}`)
    }
}

export const load = async (event) => {
    console.log(event.locals);
    if (event.locals.user) {
        throw redirect(302, "/")
    }
}
