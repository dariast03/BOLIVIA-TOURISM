<script lang="ts">
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import { Card, Checkbox, Label, Input, Button, Toast } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	import { enhance } from '$app/forms';

	let message: string;
	let isLogin = false;
	$: message = $page.url.searchParams.get('message') ?? '';

	const getData = async () => {
		const response = await fetch(PUBLIC_BASE_URL + '/users');
		const data = await response.json();
		//	console.log(data);
	};

	getData();
</script>

<div class="min-h-screen flex items-center justify-center flex-col">
	<Card class="w-full max-w-md min-h-s ">
		{#if message}
			<Toast
				color="red"
				class="max-w-full border-gray-100 shadow-lg dark:border-gray-600 border mb-5"
			>
				<svelte:fragment slot="icon">
					<Icon name="close-circle-solid" class="w-5 h-5" />
					<span class="sr-only">Error icon</span>
				</svelte:fragment>
				{message}
			</Toast>
		{/if}

		<form
			class="flex flex-col space-y-6"
			method="post"
			use:enhance={(form) => {
				isLogin = true;

				return async ({ update }) => {
					await update();

					isLogin = false;
				};
			}}
		>
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">Inicia sesion</h3>
			<Label class="space-y-2">
				<span>Email</span>
				<Input type="email" name="email" placeholder="Tu email" required />
			</Label>
			<Label class="space-y-2">
				<span>Contraseña</span>
				<Input type="password" name="password" placeholder="•••••••" required />
			</Label>
			<div class="flex items-start">
				<Checkbox class="cursor-pointer">Recuerdame</Checkbox>
				<a href="/" class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500">
					Olvidaste tu contraseña?
				</a>
			</div>
			<Button type="submit" class="w-full">{isLogin ? 'Cargando' : 'Login'}</Button>
		</form>
	</Card>
</div>

<article>
	<header>
		<h1>Login</h1>
	</header>
	<form method="POST">
		<label for="email">Email</label>
		<input type="email" id="email" name="email" required />
		<label for="password">Password</label>
		<input type="password" id="password" name="password" required />
		<button type="submit">Login</button>
	</form>
</article>
