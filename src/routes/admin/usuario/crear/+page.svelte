<script lang="ts">
	import { PUBLIC_BASE_URL } from '$env/static/public';

	let nombres = '';
	let apellidos = '';
	let email = '';
	let password = '';
	let rol = '';

	const submitForm = async (e: any) => {
		const data = Object.fromEntries(new FormData(e.target).entries());
		data.rol = 'admin';

		try {
			const response = await fetch(`${PUBLIC_BASE_URL}/users`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});

			if (response.ok) {
				alert('Usuario agregado exitosamente');
				e.target.reset();
			} else {
				throw new Error('Error al agregar el usuario');
			}
		} catch (error) {
			console.error(error);
			alert('Hubo un error al agregar el usuario');
		}
	};
</script>

<div class="p-4 w-full">
	<h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Agregar un nuevo usuario</h2>
	<form on:submit|preventDefault={submitForm}>
		<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
			<div class="w-full">
				<label for="nombres" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Nombres</label
				>
				<input
					type="text"
					name="nombres"
					id="nombres"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa los nombres"
					required
				/>
			</div>
			<div class="w-full">
				<label for="apellidos" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Apellidos</label
				>
				<input
					type="text"
					name="apellidos"
					id="apellidos"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa los apellidos"
					required
				/>
			</div>

			<div class="w-full">
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Email</label
				>
				<input
					type="email"
					name="email"
					id="email"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa el correo electrónico"
					required
				/>
			</div>
			<div class="w-full">
				<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Contraseña</label
				>
				<input
					type="password"
					name="password"
					id="password"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa la contraseña"
					required
				/>
			</div>
		</div>
		<button
			type="submit"
			class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
		>
			Agregar
		</button>
	</form>
</div>
