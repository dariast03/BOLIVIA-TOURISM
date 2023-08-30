<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	import type { IDestino, ILugarTuristico } from '../types';

	export let destino: ILugarTuristico;

	const toggleFilter = (x: MouseEvent) => {
		//@ts-ignore
		x.target.getElementsByTagName('img')[0].classList.toggle('filtro-none');
	};
</script>

<Card
	on:mouseenter={toggleFilter}
	on:mouseleave={toggleFilter}
	class="card shadow-2xl"
	img={'https://th.bing.com/th/id/R.3ec70040fce681fd8b961de4c8d1bfe8?rik=qDXz%2ffPEdb%2bnow&pid=ImgRaw&r=0'}
>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{destino.nombre}
	</h5>
	<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
		{destino.descripcion}
	</p>
	<Button href={`/destino/${destino.nombre.replaceAll(' ', '-')}`}>
		Ver mas <Icon name="arrow-right-outline" class="w-3.5 h-3.5 ml-2 text-white" />
	</Button>
</Card>
