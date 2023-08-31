<script lang="ts">
	import { Heading, Img } from 'flowbite-svelte';
	import type { IDepartamento } from '../../../types';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { onMount } from 'svelte';

	let ciudades: IDepartamento[] = [];

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

<div class="max-w-4xl mx-auto w-full flex flex-col gap-5 mt-8">
	{#each ciudades as ciu}
		<a href={`/destinos/${ciu.slug}`} class="ciudad relative">
			<img alt="IMAGEN" src={ciu.imagen} class="hover:h-0 w-full" />
			<div class="overlay">
				<Heading class="text-white">{ciu.nombre}</Heading>
			</div>
		</a>
	{/each}
</div>

<style>
	.ciudad {
		height: auto;
	}
	:global().ciudad img {
		height: 200px;
		object-fit: cover;
		transition: all 1s;
	}

	.ciudad img:hover {
		height: 340px;
	}

	.ciudad:hover .overlay {
		opacity: 1;
	}

	.overlay {
		transition: all 0.3s;
		position: absolute;
		top: 50%;
		left: 50%;
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		/* 	background-color: transparent;
		backdrop-filter: blur(8px); */
		pointer-events: none;
		opacity: 0;
	}
</style>
