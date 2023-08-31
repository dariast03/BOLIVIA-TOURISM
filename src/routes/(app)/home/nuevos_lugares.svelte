<script lang="ts">
	import { CarouselTransition, Heading } from 'flowbite-svelte';
	import { images } from './imagenes.js';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import type { ILugarTuristico } from '../../../types/destino.js';
	import { onMount } from 'svelte';

	/* let lugaresTuristicos: ILugarTuristico[] = [];
	const getData = async () => {
		const response = await fetch(PUBLIC_BASE_URL + `/lugares?_limit=10`, {
			method: 'GET',
			headers: {
				Accept: 'application/json, text/plain',
				'Content-Type': 'application/json'
			}
		});

		const data = await response.json();
		console.log(data);
		lugaresTuristicos = data;
	};

	$: onMount(async () => {
		await getData();
	}); */
</script>

<div class="carousel-container mx-auto">
	<Heading class="text-center  mb-6">Un Paraíso por Descubrir</Heading>
	<CarouselTransition
		{images}
		loop
		classSlide="flex items-center justify-center h-full w-full !rounded-none !bg-transparent"
		classDiv="w-full !h-[300px] sm:!h-[400px] !rounded-none !bg-transparent"
		imgFit="cover"
		transitionType="fade"
		transitionParams={{ duration: 1000 }}
		showCaptions={false}
		showThumbs={false}
		duration={5000}
	/>
</div>
