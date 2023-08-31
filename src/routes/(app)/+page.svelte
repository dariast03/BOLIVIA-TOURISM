<script lang="ts">
	import { Img, Heading, P, GradientButton, Video } from 'flowbite-svelte';
	import VideoComponent from './home/video.svelte';
	import Galeria from './home/galeria.svelte';
	import NuevosLugares from './home/nuevos_lugares.svelte';
	import Sueños from './home/sueños.svelte';
	import Slidys from './home/slidy.svelte';
	import Email from './home/email.svelte';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { onMount } from 'svelte';

	let testData = [];
	const getData = async () => {
		const response = await fetch(PUBLIC_BASE_URL + `/lugares`, {
			method: 'GET',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
		});

		const data = await response.json();
		const newData = data.map((x: any, i: any) => {
			return {
				...x,
				slug: x.nombre.replaceAll(' ', '-').toLowerCase(),
				id: i + 1
			};
		});

		//console.log(newData);
		//console.log(JSON.stringify(newData));

		testData = data;
	};

	onMount(async () => {
		await getData();
	});
</script>

<div class="w-full max-w-7xl mx-auto">
	<div class="h-screen items-center flex">
		<VideoComponent />
	</div>
	<div class="">
		<Galeria />
	</div>

	<div class="mt-20 md:mt-0 lg:h-screen items-center flex">
		<NuevosLugares />
	</div>
	<Sueños />
	<Slidys />
	<Email />
</div>

<!-- <Footer /> -->

<style>
	.background {
		/* background: linear-gradient(to bottom, #030114, #f5f5f5); */
		/* 	min-height: 80vh; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	p {
		font-size: 16px;
		line-height: 1.5;
		margin: 0;
	}
</style>
