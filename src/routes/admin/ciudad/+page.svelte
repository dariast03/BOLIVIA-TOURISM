<script lang="ts">
	import { jsPDF } from 'jspdf';

	import {
		Button,
		Heading,
		P,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		TableSearch
	} from 'flowbite-svelte';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { onMount } from 'svelte';

	let textoBuscar = '';

	let departamentosBolivia = [];

	const getData = async () => {
		const response = await fetch(PUBLIC_BASE_URL + `/ciudades`, {
			method: 'GET',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
		});
		const dataJson = await response.json();
		departamentosBolivia = dataJson;
	};

	onMount(async () => {
		await getData();
	});

	$: filtroCiudades = departamentosBolivia.filter(
		(item) =>
			item.nombre.toLocaleLowerCase().includes(textoBuscar.toLocaleLowerCase()) ||
			item.descripcion.toLocaleLowerCase().includes(textoBuscar.toLocaleLowerCase()) ||
			item.pais.toLocaleLowerCase().includes(textoBuscar.toLocaleLowerCase())
	);

	const generatePdf = () => {
		const doc = new jsPDF();

		doc.setFontSize(18);
		doc.text('CIUDADES', 10, 10);

		let posY = 30;

		departamentosBolivia.forEach((departamento) => {
			doc.setFontSize(14);
			doc.text(departamento.nombre, 10, posY);
			posY += 10;
			doc.setFontSize(10);
			doc.text(departamento.descripcion, 10, posY);
			posY += 15;
			doc.text(`País: ${departamento.pais}`, 10, posY);
			posY += 10;
			doc.addImage(departamento.imagen, 'JPEG', 10, posY, 50, 50);
			posY += 70;
			doc.line(10, posY, 200, posY);
			posY += 10;
		});

		// Guardar el PDF
		doc.save('reporte_ciudades.pdf');
	};
</script>

<div class="flex justify-between">
	<Heading>CIUDADES</Heading>
	<Button color="red" on:click={generatePdf}>
		<svg
			class="w-6 h-6text-white"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path
				d="M4.5 11H4v1h.5a.5.5 0 0 0 0-1ZM7 5V.13a2.96 2.96 0 0 0-1.293.749L2.879 3.707A2.96 2.96 0 0 0 2.13 5H7Zm3.375 6H10v3h.375a.624.624 0 0 0 .625-.625v-1.75a.624.624 0 0 0-.625-.625Z"
			/>
			<path
				d="M19 7h-1V2a1.97 1.97 0 0 0-1.933-2H9v5a2 2 0 0 1-2 2H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1a1.969 1.969 0 0 0 1.933 2h12.134c1.1 0 1.7-1.236 1.856-1.614a.988.988 0 0 0 .07-.386H19a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1ZM4.5 14H4v1a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h1.5a2.5 2.5 0 1 1 0 5Zm8.5-.625A2.63 2.63 0 0 1 10.375 16H9a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h1.375A2.63 2.63 0 0 1 13 11.625v1.75ZM17 12a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-1v1h1Z"
			/>
		</svg>
	</Button>
</div>

<TableSearch placeholder="Busca algo...." hoverable={true} bind:inputValue={textoBuscar}>
	<TableHead>
		<TableHeadCell>ID</TableHeadCell>
		<TableHeadCell>Nombre</TableHeadCell>
		<TableHeadCell>Pais</TableHeadCell>
		<TableHeadCell>Descripcion</TableHeadCell>
		<TableHeadCell>Acciones</TableHeadCell>
	</TableHead>

	<TableBody>
		{#each filtroCiudades as item}
			<TableBodyRow>
				<TableBodyCell>{item.id}</TableBodyCell>
				<TableBodyCell>{item.nombre}</TableBodyCell>
				<TableBodyCell>{item.pais}</TableBodyCell>
				<TableBodyCell tdClass="w-50 ">
					{item.descripcion}
				</TableBodyCell>
				<TableBodyCell>
					<Button color="yellow">
						<svg
							class="w-6 h-6 text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 14"
						>
							<path
								d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
							/>
						</svg>
					</Button>
					<Button color="green">
						<svg
							class="w-6 h-6 text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 18"
						>
							<path
								d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"
							/>
							<path
								d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"
							/>
						</svg>
					</Button>

					<Button color="red">
						<svg
							class="w-6 h-6 text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 18 20"
						>
							<path
								d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"
							/>
						</svg>
					</Button>
				</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</TableSearch>
