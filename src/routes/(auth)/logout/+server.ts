import { redirect } from "@sveltejs/kit"
import type { RequestEvent } from "../../$types"

export const POST = (event: RequestEvent) => {
    event.cookies.delete("user")
    throw redirect(302, "/")
}