<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import DestinoCard from '../../../components/DestinoCard.svelte';

	const destinos = [
		{
			id: 54,
			slug: 'casa-dorada',
			lugar: 'Casa Dorada',
			descripcion:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quod earum aliquam voluptatibus perspiciatis provident voluptate in quas, saepe, aperiam repudiandae sit dolor quam, facilis laboriosam. Consequuntur perferendis non libero.',
			imagen:
				'https://th.bing.com/th/id/R.3ec70040fce681fd8b961de4c8d1bfe8?rik=qDXz%2ffPEdb%2bnow&pid=ImgRaw&r=0'
		},
		{
			id: 54,
			slug: 'castillo-azul',
			lugar: 'Castillo Azul',
			descripcion:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quod earum aliquam voluptatibus perspiciatis provident voluptate in quas, saepe, aperiam repudiandae sit dolor quam, facilis laboriosam. Consequuntur perferendis non libero.',
			imagen:
				'https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/brscljwvihdac76nsyas'
		}
	];
</script>

<Heading tag="h1">DESTINOS</Heading>
<P>TARIJA</P>

<div class="mx-2">
	<div class="destinos flex flex-wrap gap-5 justify-center">
		{#each destinos as destino}
			<DestinoCard {destino} />
		{/each}
	</div>
</div>
