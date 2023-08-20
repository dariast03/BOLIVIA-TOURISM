import { dev } from "$app/environment"
import type { RequestEvent } from "@sveltejs/kit"

export const authenticateUser = (event: RequestEvent) => {
	const { cookies } = event
	const tokenUser = cookies.get("auth")

	if (tokenUser === "bf63f1784c8110e7adcb0ac9f1bfee5bc686a3d1eeda6196b6d9fb28a170652a") {
		const user = {
			id: 1,
			email: "admin@grupo5.com",
			nombre: "Grupo5"
		}
		return user
	}

	return null
}

export const loginUser = (event: RequestEvent) => {
	event.cookies.set("auth", "bf63f1784c8110e7adcb0ac9f1bfee5bc686a3d1eeda6196b6d9fb28a170652a", {
		path: "/",
		httpOnly: true,
		maxAge: 60 * 60 * 24 * 7,
		secure: dev ? false : true,
		sameSite: "strict"
	})
}