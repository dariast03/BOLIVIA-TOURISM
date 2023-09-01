<script lang="ts">
	import { Select, Label } from 'flowbite-svelte';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import type { IDepartamento } from '../../../../types';

	let selected: any;
	let ciudades: IDepartamento[] = [];

	$: parseCiudades = ciudades.map((x) => {
		return {
			value: x.nombre.toLocaleLowerCase(),
			name: x.nombre
		};
	});

	const onSubmit = async (e: any) => {
		const data = Object.fromEntries(new FormData(e.target).entries());
		//@ts-ignore
		data.imagenes = data?.imagenes?.split(',');
		data.ubicacion = {
			//@ts-ignore
			latitud: Number(data.latitud),
			longitud: Number(data.longitud)
		};
		//@ts-ignore
		data.votos = 0;

		try {
			const response = await fetch(`${PUBLIC_BASE_URL}/lugares`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});

			if (response.ok) {
				alert('Lugar turístico agregadov exitosamente');
				e.target.reset();
			} else {
				throw new Error('Error al agregar el lugar turístico');
			}
		} catch (error) {
			console.error(error);
			alert('Hubo un error al agregar el lugar turístico');
		}
	};

	const getData = async () => {
		const response = await fetch(PUBLIC_BASE_URL + `/ciudades`, {
			method: 'GET',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
		});
		const dataJson = await response.json();
		ciudades = dataJson;
	};

	onMount(async () => {
		await getData();
	});
</script>

<div class="p-4 w-full">
	<h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
		Agregar un nuevo lugar turístico
	</h2>
	<form on:submit|preventDefault={onSubmit}>
		<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
			<div class="w-full">
				<label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Nombre del lugar</label
				>
				<input
					type="text"
					name="nombre"
					id="nombre"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa el nombre del lugar"
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
					name="descripcion"
					rows="6"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa la descripción del lugar"
					required
				/>
			</div>
			<div class="w-full">
				<label for="latitud" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Latitud</label
				>
				<input
					type="number"
					name="latitud"
					id="latitud"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="-14.829724090435176"
					required
				/>
			</div>
			<div class="w-full">
				<label for="longitud" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Longitud</label
				>
				<input
					type="number"
					name="longitud"
					id="longitud"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="-65.00769627698163"
					required
				/>
			</div>
			<div class="w-full">
				<label for="imagenes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Imágenes</label
				>
				<input
					type="text"
					name="imagenes"
					id="imagenes"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="URLs de imágenes separadas por comas"
					required
				/>
			</div>
			<div class="w-full">
				<Label>
					Departamento
					<Select
						placeholder="Selecciona una ciudad"
						class="mt-2"
						items={parseCiudades}
						bind:value={selected}
						name="departamento"
					/>
				</Label>
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
