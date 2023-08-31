<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import DestinoCard from '../../../components/DestinoCard.svelte';
	import { onMount } from 'svelte';
	import { PUBLIC_BASE_URL } from '$env/static/public';

	let testData = [];
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

	const getData = async () => {
		const ciudades = await getDataCiudades();

		const x = await new Promise((resolve) => {
			let newData: any[] = [];
			ciudades.map(async (x: any) => {
				const response = await fetch(PUBLIC_BASE_URL + `/lugares?departamento=${x.slug}`, {
					method: 'GET',
					headers: {
						Accept: 'application/json, text/plain, */*',
						'Content-Type': 'application/json'
					}
				});
				const data = await response.json();

				newData.push({
					ciudad: x,
					lugares: data
				});
			});

			resolve(newData);
		});

		/* 		const response = await fetch(PUBLIC_BASE_URL + `/lugares`, {
			method: 'GET',
			headers: {
				Accept: 'application/json, text/plain, *',
				'Content-Type': 'application/json'
			}
		});

		const data = await response.json(); */

		console.log(x);

		/* 	const newData = data.map((x) => x.departamento);
		const x = new Set(newData);
		console.log(x); */

		//		testData = data;
	};

	onMount(async () => {
		await getData();
	});

	const destinos = [
		{
			id: 54,
			slug: 'casa-dorada',
			nombre: 'Casa Dorada',
			descripcion:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quod earum aliquam voluptatibus perspiciatis provident voluptate in quas, saepe, aperiam repudiandae sit dolor quam, facilis laboriosam. Consequuntur perferendis non libero.',
			imagen:
				'https://th.bing.com/th/id/R.3ec70040fce681fd8b961de4c8d1bfe8?rik=qDXz%2ffPEdb%2bnow&pid=ImgRaw&r=0'
		},
		{
			id: 54,
			slug: 'castillo-azul',
			nombre: 'Castillo Azul',
			descripcion:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quod earum aliquam voluptatibus perspiciatis provident voluptate in quas, saepe, aperiam repudiandae sit dolor quam, facilis laboriosam. Consequuntur perferendis non libero.',
			imagen:
				'https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/brscljwvihdac76nsyas'
		}
	];
</script>

<div class="max-w-6xl mx-auto w-full">
	<Heading tag="h1">DESTINOS</Heading>
	<P>TARIJA</P>

	<div class="mx-2">
		<div class="destinos flex flex-wrap gap-5 justify-center">
			{#each destinos as destino}
				<DestinoCard {destino} />
			{/each}
		</div>
	</div>
</div>
