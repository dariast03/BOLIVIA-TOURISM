<script lang="ts">
	import { Button, Carousel, Heading, P } from 'flowbite-svelte';
	import LeafletMap from '../../../../components/LeafletMap.svelte';
	import type { PageData } from './$types';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import { images } from '../../home/imagenes';
	import type { ILugarTuristico } from '../../../../types';
	export let data: PageData;

	/* 
	{
      id: 0,
      name: 'Cosmic timetraveler',
      imgurl: 'https://boliviamia.net/Images/Tourpics/atop-uyuni-11.jpg',
      attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
    },
	*/

	const getData = fetch(PUBLIC_BASE_URL + `/lugares?slug=${data.slug}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		}
	}).then((x) => x.json());

	/* 		const dataRes = await response.json();

		destino = dataRes; */

	const newImages = [
		{
			id: 0,
			name: 'XD 1',
			imgurl: 'https://tipsparatuviaje.com/wp-content/uploads/2019/07/parque-nacional-madidi.jpg',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
		},
		{
			id: 1,
			name: 'XD 2',
			imgurl: 'https://boliviamia.net/Images/Tourpics/atop-uyuni-11.jpg',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
		},
		{
			id: 2,
			name: 'XD 3',
			imgurl: 'https://boliviamia.net/Images/Tourpics/atop-uyuni-03.jpg',
			attribution: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
		}
	];
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
	{#await getData}
		<!-- optionally show something while promise is pending -->
	{:then data}
		<div class="flex flex-col md:flex-row -mx-4">
			<div class="md:flex-1 px-4">
				<div class="max-w-4xl dark p-2 bg-gray-100 dark:bg-gray-800">
					<Carousel
						images={newImages}
						showCaptions={false}
						imgFit="contain"
						classImg="!bg-none !rounded-md animate-[fadeIn_.5s_ease-in-out_1] h-full"
						classThumb="p-0 h-20 rounded-md shadow-xl hover:outline hover:outline-primary-500"
						classThumbDiv="bg-transparent"
						thumbBtnClass="m-2"
					/>
				</div>
			</div>

			<div class="md:flex-1 px-4">
				<Heading
					tag="h2"
					class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"
				>
					{data[0].nombre}
				</Heading>

				<P class="text-gray-400 dark:text-gray-300">{data[0].departamento.toUpperCase()}</P>

				<div class="flex items-center space-x-4 my-4">
					<div>
						<div class="rounded-lg bg-gray-100 flex py-2 px-3">
							<span class="font-bold text-indigo-600 text-3xl"> {data[0]?.votos || 0}</span>
						</div>
					</div>
					<div class="flex-1">
						<p class="text-green-500 text-xl font-semibold">Votos</p>
						<p class="text-gray-400 text-sm">Recomendaciones de turistas</p>
					</div>
				</div>

				<P class="text-gray-500">
					{data[0].descripcion}
				</P>

				<div class="flex py-4 space-x-4">
					<Button type="button" color="yellow">Add to Cart</Button>
				</div>
			</div>
		</div>

		<Heading class="my-8">UBICACION</Heading>
		<LeafletMap lati={data[0].ubicacion.latitud} long={data[0].ubicacion.longitud} />
	{:catch error}
		<!-- optionally show something while promise was rejected -->
	{/await}
</div>
