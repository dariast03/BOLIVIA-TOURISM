import { dev } from "$app/environment"
import type { RequestEvent } from "@sveltejs/kit"
import { PUBLIC_BASE_URL } from '$env/static/public';
const parseBaseUrl = PUBLIC_BASE_URL.substring(0, PUBLIC_BASE_URL.length - 4)

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

export const authenticateUser = async (event: RequestEvent) => {
	const { cookies } = event
	const cookieUser = cookies.get("user")

	if (cookieUser) {
		const userCredentials = cookieUser.split("|");

		const userResponse = await verificarCredenciales({
			email: userCredentials[0],
			password: userCredentials[1]
		})

		if (userResponse.accessToken) return userResponse.user
		return null
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