<script>
	import { Img, Heading, P, GradientButton, Video, Button } from 'flowbite-svelte';
	import Footer from './Footer.svelte';
	import CardDepartamento from '../../components/CardDepartamento.svelte';

	const imagenes = [
		{
			alt: 'erbology',
			src: 'https://boliviaturistica.com/wp-content/uploads/2017/06/Atractivo-turistico-La-Paz-Bolivia-Puerta-del-Sol.jpg',
			title: 'LA PAZ',
			slug: 'la-paz'
		},
		{
			alt: 'shoes',
			src: 'https://4.bp.blogspot.com/-wQcEYzY-Rdw/WaCA2BHtiMI/AAAAAAAACmM/zMGjmRUJk6YpMBMVxorCRjSNpogitlQtACLcBGAs/s1600/Iglesia-de-San-Lorenzo-Tarija-Bolivia.jpg',
			title: 'TARIJA',
			slug: 'tarija'
		},
		{
			alt: 'small bag',
			src: 'https://boliviaturistica.com/wp-content/uploads/2018/12/isla-incahuasi-sitio-turistico-de-potosi.jpg',
			title: 'POTOSÍ',
			slug: 'potosi'
		},
		{
			alt: 'plants',
			src: 'https://2.bp.blogspot.com/-jfV5pcW4oKw/WbmI4oBrFiI/AAAAAAAACr4/DRsBf2Nqh-I6EbuycQDZKK7IlZwQLAWrACLcBGAs/s1600/chullpares-de-macaya-oruro-bolivia.jpg',
			title: 'ORURO',
			slug: 'oruro'
		},
		{
			alt: 'watch',
			src: 'https://boliviaturistica.com/wp-content/uploads/2017/06/Santuario-Virgen-de-Cotoca-Santa-Cruz-Bolivia.jpg',
			title: 'SANTA CRUZ',
			slug: 'santa-cruz'
		},
		{
			alt: 'shoe',
			src: 'https://boliviaturistica.com/wp-content/uploads/2019/12/beni-destino-turistico-rurrenabaque.jpg',
			title: 'BENI',
			slug: 'beni'
		},
		{
			alt: 'cream',
			src: 'https://www.opinion.com.bo/asset/thumbnail,992,558,center,center/media/opinion/images/2023/08/04/2023080419514957446.jpg',
			title: 'PANDO',
			slug: 'pando'
		},
		{
			alt: 'small bag',
			src: 'https://4.bp.blogspot.com/-66GvtQoIqNw/Wfid-MhaEnI/AAAAAAAAC3w/vhVnP1PLuLwauYIcCYUpLqJlIjKkaSOLwCLcBGAs/s1600/Pocona-iglesia-sitio-turistico-de-cochabamba.jpg',
			title: 'COCHABAMBA',
			slug: 'cochabamba'
		},
		{
			alt: 'lamp',
			src: 'https://3.bp.blogspot.com/-KeApw2bwxFk/WcE3zRPyAEI/AAAAAAAACto/VIxlG_GIHewwzr2TgdEiAFfFODa9yvukQCLcBGAs/s1600/sitios-turisticos-tarabuco-chuquisaca-bolivia.jpg',
			title: 'CHUQUISACA',
			slug: 'chuquisaca'
		}
	];
</script>

<div class="background">
	<div class="flex-container">
		<div class="video-container">
			<a id="asd">
				<Video src="/video/bolivia.mp4" controls class="w-full h-auto" trackSrc="flowbite.mp4" />
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
	<br />
	<br />
	<p class="text-3xl dark:text-white">Nuestros Destinos</p>
	<br />
	<div class="grid-container">
		{#each imagenes as imagen}
			<CardDepartamento data={imagen} />
		{/each}
	</div>
	<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

	<div class="centered-text-box">
		<div class="text-box">
			<h2 class="section-title">Turismo Nice</h2>
			<div class="content">
				<img
					class="image-right"
					src="https://cdn.pixabay.com/photo/2017/10/23/05/56/summer-2880261_1280.jpg"
					alt="Imagen a la derecha"
				/>
				<p>
					Contamos con todo lo necesario para convertir tus eventos corporativos no solo en
					encuentros exitosos y productivos, sino en experiencias verdaderamente trascendentes, con
					algunos de los paisajes más hermosos del mundo como telón de fondo.
				</p>
			</div>
		</div>
	</div>
</div>

<Footer />

<style>
	.background {
		background: linear-gradient(to bottom, #5447ff, #f5f5f5);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.flex-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.grid-container {
		/* 	display: grid;
		grid-template-columns: repeat(3, 1fr); */
		gap: 0;
		margin: 0 auto;
		padding: 0;
		width: 95%;
		/* 	height: 100vh; */
	}

	@media (min-width: 468px) {
		.grid-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 768px) {
		.grid-container {
			display: grid;
			width: 70%;
			grid-template-columns: repeat(3, 1fr);
		}
	}
	.video-container {
		flex: 1;
		max-width: 50%;
	}
	.text-container {
		flex: 1;
		padding: 0 2rem;
	}
	/* .image-container {
		position: relative;
				overflow: hidden;
		width: 100%;
		padding-bottom: 100%;
	}

	.image {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.image-link {
		position: relative;
		display: block;
	}

	.image-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: transparent;
		backdrop-filter: blur(8px);
		opacity: 0;
		transition: opacity 0.3s ease;
		display: flex;
		justify-content: center;
		align-items: center;
	} */

	/* .image-container:hover .image-overlay {
		opacity: 1;
	}

	.image-text {
		color: white;
		font-size: 14px;
		text-align: center;
		margin: 0;
		padding: 10px;
		backdrop-filter: none;
	}

	.image-title {
		position: absolute;
		bottom: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		background-color: rgba(255, 255, 255, 0);
		color: rgb(209, 201, 255);
		text-align: center;
		margin: 0;
	} */
	.btn-container {
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}

	.btn-quiero-viajar {
		background-color: #000000;
		color: white;
		border: none;
		padding: 10px 20px;
		cursor: pointer;
		transition: background-color 0.3s, transform 0.3s;
	}

	.btn-quiero-viajar:hover {
		background-color: #ffffff;
		transform: translateX(10px);
		color: rgb(0, 0, 0);
	}
	.centered-text-box {
		display: flex;
		justify-content: center;
		margin-top: 30px;
	}

	.text-box {
		background-color: rgba(255, 255, 255, 0.9);
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}
	.centered-text-box {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 30px;
	}

	/* .x {
		transform: translate(50%, -50%);
	} */
	.text-box {
		background-color: rgba(255, 255, 255, 0.9);
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		width: 70%;
		margin: 0 auto;
	}

	.content {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.image-right {
		max-width: 50%;
		height: auto;
	}

	@media (max-width: 768px) {
		.content {
			flex-direction: column;
			text-align: center;
		}

		.image-right {
			max-width: 100%;
		}
	}

	.text-box {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: 60%;
		background-color: #ffffff;
		padding: 1rem;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.section-title {
		font-size: 30px;
		margin-left: 30rem;
		margin-bottom: 1rem;
	}

	.content {
		display: flex;
		align-items: center;
	}

	.image-right {
		max-width: 50%;
		margin-left: 1rem;
		border-radius: 8px;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
	}

	p {
		font-size: 16px;
		line-height: 1.5;
		margin: 0;
	}
</style>
