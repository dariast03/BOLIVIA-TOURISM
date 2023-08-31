<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	/* @ts-ignore */
	import { Slidy } from 'svelte-slidy';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import type { ILugarTuristico } from '../../../types';
	import { onMount } from 'svelte';

	let lugaresTuristicos: ILugarTuristico[] = [];

	$: slidy_cards = {
		slides: lugaresTuristicos,
		wrap: {
			id: 'slidy_cards',
			width: '100vw',
			height: '100vh',
			padding: '50px 0 50px',
			align: 'middle',
			alignmargin: 0
		},
		slide: {
			gap: 50,
			width: '80vw',
			height: '100vh',
			backimg: false,
			imgsrckey: 'src',
			objectfit: 'contain'
		},
		controls: {
			dots: false,
			dotsnum: false,
			dotsarrow: false,
			dotspure: true,
			arrows: true,
			keys: true,
			drag: true,
			wheel: true
		},
		options: {
			axis: 'x',
			loop: true,
			duration: 350
		}
	};

	const getData = async () => {
		const response = await fetch(PUBLIC_BASE_URL + `/lugares?_sort=votos&_order=desc&_limit=10`, {
			method: 'GET',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
		});

		const data = await response.json();

		const parseDate = data.map((x: any, i: any) => {
			return {
				...x,
				src: 'https://tipsparatuviaje.com/wp-content/uploads/2019/07/parque-nacional-madidi.jpg'
			};
		});

		lugaresTuristicos = parseDate;
	};

	onMount(async () => {
		await getData();
	});
</script>

<div class="mt-40">
	<Heading class="text-center">Sumérgete en la Diversidad de Bolivia</Heading>
	<div class="container">
		<Slidy {...slidy_cards} let:item>
			<a href={`/destino/${item.slug}`} class="slide">
				<img
					alt={item.nombre}
					src={'https://tipsparatuviaje.com/wp-content/uploads/2019/07/lago-titicaca.jpg'}
				/>
				<article>
					<Heading tag="h6">{item.nombre}</Heading>
				</article>
			</a>
		</Slidy>
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: -100px;
	}
	@media screen and (min-width: 500px) {
		:global(#slidy_cards .slidy-ul li) {
			width: 70vw;
		}
	}
	@media screen and (min-width: 600px) {
		:global(#slidy_cards .slidy-ul li) {
			width: 50vw;
		}
	}
	@media screen and (min-width: 700px) {
		:global(#slidy_cards .slidy-ul li) {
			width: 33vw;
		}
	}
	:global(#slidy_cards .slidy-ul li img) {
		transform: scale(1);
		transition: transform 350ms, box-shadow 350ms;
	}
	:global(#slidy_cards .slidy-ul li) {
		overflow: visible;
		margin-top: -100px;
	}
	:global(#slidy_cards .slidy-ul li.active img) {
		transform: scale(1.15);
		box-shadow: 0 14px 25px rgba(0, 0, 0, 0.36);
	}
	:global(body) {
		margin: 0;
		padding: 0;
	}
	.slide {
		position: relative;
		display: flex;
		flex-flow: column;
		text-align: center;
		align-content: center;
		justify-content: center;
		height: 100%;
		border-radius: 1rem;
	}
	.slide img {
		max-height: 200px;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		vertical-align: middle;
		object-fit: cover;
		position: relative;
		z-index: 1;
		border-radius: 1rem;
		box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);
	}
	.slide article {
		padding: 1rem;
	}
	.slide h2 {
		color: black;
		transition: color 0.3s;
	}
	.slide:not(:hover) h2 {
		color: purple;
	}
</style>
