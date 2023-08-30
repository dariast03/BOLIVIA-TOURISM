<script lang="ts">
	import type { PageData } from './$types';
	import { Button, Heading, P, Search } from 'flowbite-svelte';
	import DestinoCard from '../../../../components/DestinoCard.svelte';
	import { onMount } from 'svelte';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import type { ILugarTuristico } from '../../../../types';

	export let data: PageData;

	let textoBuscar = '';
	let lugaresTuristicos: ILugarTuristico[] = [];

	const getData = async () => {
		const response = await fetch(
			PUBLIC_BASE_URL + `/lugares?departamento=${data.ciudad.replaceAll('-', ' ')}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json, text/plain, */*',
					'Content-Type': 'application/json'
				}
			}
		);

		const dataJson = await response.json();
		lugaresTuristicos = dataJson;
	};

	onMount(async () => {
		await getData();
	});

	$: filtroDatos = lugaresTuristicos.filter(
		(item) =>
			item.nombre.toLocaleLowerCase().includes(textoBuscar.toLocaleLowerCase()) ||
			item.descripcion.toLocaleLowerCase().includes(textoBuscar.toLocaleLowerCase()) ||
			item.departamento.toLocaleLowerCase().includes(textoBuscar.toLocaleLowerCase())
	);
</script>

<div class="container mx-auto mb-10">
	<Heading tag="h1" class="text-center md:text-left p-5 md:p-10 uppercase ">{data.ciudad}</Heading>
	<Search bind:value={textoBuscar} placeholder="Busca algo...." />

	{#if textoBuscar}
		<P class="mt-5 ml-2">{filtroDatos.length} resultados de {lugaresTuristicos.length}</P>
	{/if}
</div>

<div class="mx-2">
	<div class="destinos flex flex-wrap gap-5 justify-center">
		{#each filtroDatos as lugaresTuristicos}
			<DestinoCard destino={lugaresTuristicos} />
		{/each}
	</div>
</div>
