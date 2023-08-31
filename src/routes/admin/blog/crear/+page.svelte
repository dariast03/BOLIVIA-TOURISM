<script lang="ts">
	import { PUBLIC_BASE_URL } from '$env/static/public';

	let fecha = new Date().toISOString().split('T')[0];

	const submitForm = async (e: any) => {
		e.preventDefault();

		const data = Object.fromEntries(new FormData(e.target).entries());
		//@ts-ignore
		data.vistas = 0;

		try {
			const response = await fetch(`${PUBLIC_BASE_URL}/blogs`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});

			if (response.ok) {
				e.target.reset();
				alert('Blog agregado exitosamente');
			} else {
				throw new Error('Error al agregar el blog');
			}
		} catch (error) {
			console.error(error);
			alert('Hubo un error al agregar el blog');
		}
	};
</script>

<div class="p-4 w-full">
	<h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Agregar un nuevo blog</h2>
	<form on:submit|preventDefault={submitForm}>
		<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
			<div class="sm:col-span-2">
				<label for="titulo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Título del Blog</label
				>
				<input
					type="text"
					name="titulo"
					id="titulo"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa el título del blog"
					required
				/>
			</div>
			<div class="w-full">
				<label for="autor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Autor</label
				>
				<input
					type="text"
					name="autor"
					id="autor"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Autor del blog"
					required
				/>
			</div>
			<div class="w-full">
				<label for="fecha" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Fecha</label
				>
				<input
					type="date"
					name="fecha"
					id="fecha"
					value={fecha}
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					required
				/>
			</div>
			<div class="w-full">
				<label for="categoria" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Categoría</label
				>
				<input
					type="text"
					name="categoria"
					id="categoria"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Categoría del blog"
					required
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="descripcion"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label
				>
				<textarea
					id="descripcion"
					name="descripcion"
					rows="8"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Tu descripción del blog aquí"
					required
				/>
			</div>
		</div>
		<button
			type="submit"
			class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
		>
			Agregar blog
		</button>
	</form>
</div>
