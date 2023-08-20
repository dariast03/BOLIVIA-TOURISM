import type { RequestEvent } from "../$types";

export const load = async (event: RequestEvent) => {
    return {
        user: event.locals.user
    }
}