<script lang="ts">
	import { Button, P } from 'flowbite-svelte';
	import type { ICardDepartamento } from '../types';

	export let data: ICardDepartamento;
</script>

<div class="image-link">
	<div class="image-container">
		<img class="image" src={data.src} alt={data.alt} />
		<P
			align="center"
			class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-10px] text-white text-2xl font-black drop-shadow-[0_1.2px_2px_rgba(0,0,0,1)]"
			>{data.title}</P
		>

		<div class="image-overlay">
			<Button href={`destinos?departamento=${data.slug}`} color="blue" class="cursor-pointer "
				>Ver Lugares</Button
			>
		</div>
	</div>
</div>

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
	.image-container {
		position: relative;
		/* 		overflow: hidden; */
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
	}

	.image-container:hover .image-overlay {
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

	.x {
		transform: translate(50%, -50%);
	}
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
