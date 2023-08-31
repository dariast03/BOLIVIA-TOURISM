<script>
	import { Button, Heading, P } from 'flowbite-svelte';
</script>

<div class="container">
	<div
		class="combined-box bg-slate-100 dark:bg-slate-800 p-6 lg:p-10 grid lg:grid-cols-2 rounded-xl"
	>
		<div class="box-content my-2 md:my-5">
			<Heading tag="h4">Cumple tus sueños</Heading>
			<P align="center" class="my-5">
				Contamos con todo lo necesario para convertir tus eventos corporativos no solo en encuentros
				exitosos y productivos, sino en experiencias verdaderamente trascendentes, con algunos de
				los paisajes más hermosos del mundo como telón de fondo.
			</P>
			<Button color="blue">Ir a la oferta</Button>
		</div>

		<div class="box-image">
			<img
				class="image-right"
				src="https://cdn.pixabay.com/photo/2017/10/23/05/56/summer-2880261_1280.jpg"
				alt="Imagen a la derecha"
			/>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 50px;
	}

	.combined-box {
		/* 		display: flex;
		align-items: center; */
		max-width: 80vw;
		/*     border: 2px solid #ccc; */
		/* 	padding: 1rem; */
		/*     background-color: #f0f0f0; */
		margin: 0 auto;
	}

	.box-content {
		flex: 1;
		padding-right: 1rem;
		text-align: center;
	}

	.box-image {
		flex: 1;
		text-align: right;
		margin-top: 0rem;
	}

	.image-right {
		max-width: 100%;
		height: auto;
	}

	.button {
		display: inline-block;
		padding: 0.5rem 1rem;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s;
		margin-top: 0.5rem;
	}

	.button:hover {
		background-color: #0056b3;
	}

	@media (max-width: 440px) {
		.combined-box {
			flex-direction: column;
			max-width: 90vw;
		}

		.box-content,
		.box-image {
			text-align: center;
		}

		.image-right {
			margin: 0 auto;
			margin-top: 1rem;
			margin-bottom: 1rem;
		}

		.button {
			margin-top: 1rem;
		}
	}
</style>
