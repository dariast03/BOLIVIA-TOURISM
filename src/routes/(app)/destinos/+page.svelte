<script lang="ts">
	import { Heading, Label, P, Select } from 'flowbite-svelte';
	import DestinoCard from '../../../components/DestinoCard.svelte';
	import { onMount } from 'svelte';
	import { PUBLIC_BASE_URL } from '$env/static/public';

	const getDataCiudades = async () => {
		const response = await fetch(PUBLIC_BASE_URL + `/ciudades`, {
			method: 'GET',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
		});

		const data = await response.json();
		return data;
	};
	let destinos = [];

	const getData = async () => {
		let newData: any[] = [];

		const ciudades = await getDataCiudades();
		for (const x of ciudades) {
			const response = await fetch(PUBLIC_BASE_URL + `/lugares?departamento=${x.slug}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json, text/plain, */*',
					'Content-Type': 'application/json'
				}
			});

			const data = await response.json();
			newData.push({ ciudad: x, lugares: data });
		}
		console.log(newData, 'NEW DATA');
		destinos = newData;
	};

	onMount(async () => {
		await getData();
	});

	let selected;
	$: selectDestinos = destinos.map((x) => {
		return {
			value: x.ciudad.slug,
			name: x.ciudad.nombre
		};
	});

	$: filtrados = destinos.filter((x) => x.ciudad.slug.includes(selected));
	/*   [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ]; */
</script>

<div class="max-w-4xl lg:max-w-7xl mx-auto w-full mt-10">
	<div class="flex justify-between mx-5">
		<Heading tag="h1">DESTINOS</Heading>

		<Label>
			Filtar por ciudad
			<Select
				placeholder="Selecciona una ciudad"
				class="mt-2"
				items={selectDestinos}
				bind:value={selected}
			/>
		</Label>
	</div>

	<div class="mx-2">
		<div class="destinos flex flex-wrap gap-5 justify-center">
			{#each filtrados as destino}
				<Heading tag="h3" class="text-center sticky">{destino.ciudad.nombre}</Heading>
				<!-- <DestinoCard {destino} /> -->
				{#each destino.lugares as lugar}
					<!-- 	<Heading tag="h5">{lugar.nombre}</Heading> -->
					<DestinoCard destino={lugar} />
					<!-- <DestinoCard {destino} /> -->
					<!--  -->
				{/each}
			{/each}
		</div>
	</div>
</div>
