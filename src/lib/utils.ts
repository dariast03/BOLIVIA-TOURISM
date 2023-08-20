import type { RequestEvent } from "@sveltejs/kit"

export function handleLoginRedirect(
    event: RequestEvent,
    message: string = "Necesitas estar autenticado para ingresar a esta pagina!!"
) {
    const redirectTo = event.url.pathname + event.url.search
    return `/login?redirectTo=${redirectTo}&message=${message}`
}