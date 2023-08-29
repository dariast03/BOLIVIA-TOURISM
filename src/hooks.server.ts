import { authenticateUser } from "./lib/server/auth"

export const handle = async ({ event, resolve }: { event: any, resolve: any }) => {
    event.locals.user = await authenticateUser(event)

    return resolve(event)
}