<script>
	import { Heading, P, Video } from 'flowbite-svelte';
</script>

<!-- <div class="">
	<div class="flex-container">
		<div class="video-container">
			<a id="asd">
				<Video
					src="/video/bolivia.mp4"
					autoplay={true}
					mute
					controls
					class="w-full h-auto"
					trackSrc="flowbite.mp4"
				/>
			</a>
		</div>
		<div class="text-container">
			<Heading class="mb-4" tag="h1" customSize="text-3xl"
				>Bienvenidos a Nuestra Guía de Turismo</Heading
			>
			<P>
				¡Explora las maravillas de Bolivia con nuestra guía de turismo! Desde las alturas
				majestuosas de La Paz hasta las llanuras exuberantes de Beni, te invitamos a descubrir la
				diversidad y la belleza única de nuestras regiones. Nuestros recorridos te llevarán a través
				de ciudades históricas, paisajes naturales impresionantes y encuentros culturales
				inolvidables.
			</P>
			<div class="btn-container">
				<button class="btn-quiero-viajar" id="quiero-viajar">¡Quiero Viajar!</button>
			</div>
		</div>
	</div>
</div> -->

<section class="bg-white dark:bg-gray-900">
	<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
		<div class="mr-auto place-self-center lg:col-span-7">
			<h1
				class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
			>
				Bienvenidos a Nuestra Guía de Turismo
			</h1>
			<p
				class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
			>
				Explora las maravillas únicas de Bolivia con nuestra guía turística. Desde las alturas de La
				Paz hasta las llanuras de Beni, descubre la diversidad a través de ciudades históricas,
				paisajes impresionantes y experiencias culturales inolvidables.
			</p>
			<a
				href="/ciudades"
				class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
			>
				Explorar Ciudades
				<svg
					class="w-5 h-5 ml-2 -mr-1"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</a>
		</div>
		<div class="mt-6 lg:mt-0 lg:col-span-5 lg:flex">
			<Video
				src="/video/bolivia.mp4"
				autoplay={true}
				mute
				loop
				controls
				class="w-full h-auto"
				trackSrc="flowbite.mp4"
			/>
		</div>
	</div>
</section>

<style>
	.flex-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: -180px;
	}
	.video-container {
		flex: 1;
		max-width: 100%;
		margin-top: 20px;
	}
	.text-container {
		flex: 1;
		padding: 0 1rem;
		max-width: 100%;
	}
	.btn-container {
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}
	.btn-quiero-viajar {
		background-color: #000000;
		color: white;
		border: none;
		padding: 9px 20px;
		cursor: pointer;
		transition: background-color 0.3s, transform 0.3s;
	}

	.btn-quiero-viajar:hover {
		background-color: #ffffff;
		transform: translateX(10px);
		color: rgb(0, 0, 0);
	}
	@media (max-width: 440px) {
		.flex-container {
			flex-direction: column;
		}

		.video-container {
			max-width: 70%;
		}
		.text-container {
			max-width: 100%;
		}
		.btn-container {
			margin-top: 20px; /* Adjust margin to your preference */
		}
	}
	@media (max-width: 800px) {
		.text-container {
			max-width: 70%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
