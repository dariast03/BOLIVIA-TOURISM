<script lang="ts">
	import { PUBLIC_BASE_URL } from '$env/static/public';

	const onSubmit = async (e: any) => {
		const data = Object.fromEntries(new FormData(e.target).entries());

		try {
			const response = await fetch(`${PUBLIC_BASE_URL}/ciudades`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});

			if (response.ok) {
				e.target.reset();
				alert('Ciudad agregada exitosamente');
			} else {
				throw new Error('Error al agregar la ciudad');
			}
		} catch (error) {
			alert('Hubo un error al agregar la ciudad');
		}
	};
</script>

<div class="p-4 w-full">
	<h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Agregar una nueva ciudad</h2>
	<form on:submit|preventDefault={onSubmit}>
		<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
			<div class="w-full">
				<label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Nombre de la ciudad</label
				>
				<input
					type="text"
					name="nombre"
					id="nombre"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa el nombre de la ciudad"
					required
				/>
			</div>
			<div class="w-full">
				<label
					for="descripcion"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label
				>
				<textarea
					id="descripcion"
					rows="6"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa la descripción de la ciudad"
					required
				/>
			</div>
			<div class="w-full">
				<label for="pais" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>País</label
				>
				<input
					type="text"
					name="pais"
					id="pais"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa el país"
					required
				/>
			</div>
			<div class="w-full">
				<label for="slug" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Slug</label
				>
				<input
					type="text"
					name="slug"
					id="slug"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa el slug"
					required
				/>
			</div>
			<div class="w-full">
				<label for="imagen" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Imagen</label
				>
				<input
					type="text"
					name="imagen"
					id="imagen"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa la URL de la imagen"
					required
				/>
			</div>
		</div>
		<button
			type="submit"
			class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
		>
			Agregar ciudad
		</button>
	</form>
</div>
