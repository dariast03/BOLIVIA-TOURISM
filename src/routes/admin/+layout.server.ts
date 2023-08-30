import { handleLoginRedirect } from "$lib/utils"
import { redirect } from "@sveltejs/kit"

export const load = async (event: any) => {
    console.log(event.locals.user);
    if (!event.locals.user && !event.locals.user.rol) {
        throw redirect(302, handleLoginRedirect(event))
    }
}