<script>
	import { Card, Heading } from 'flowbite-svelte';
	import Chart from '../../../components/Chart.svelte';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { onMount } from 'svelte';

	let cantidadUusarios = 0;
	let cantidadLugares = 0;
	let lugaresTuristicos = [];

	const getUsuarios = async () => {
		const response = await fetch(PUBLIC_BASE_URL + `/users`, {
			method: 'GET',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
		});
		const dataJson = await response.json();
		cantidadUusarios = dataJson.length;
		return dataJson;
	};

	const getLugares = async () => {
		const response = await fetch(PUBLIC_BASE_URL + `/lugares?_sort=votos&_order=desc`, {
			method: 'GET',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
		});
		const dataJson = await response.json();
		cantidadLugares = dataJson.length;
		lugaresTuristicos = dataJson.slice(0, 10);
		return dataJson;
	};

	onMount(async () => {
		await getLugares();
		await getUsuarios();
	});

	var options = {
		chart: {
			type: 'line'
		},
		series: [
			{
				name: 'sales',
				data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
			}
		],
		xaxis: {
			categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
		}
	};

	var options2 = {
		series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
		chart: {
			type: 'polarArea'
		},
		stroke: {
			colors: ['#fff']
		},
		fill: {
			opacity: 0.8
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}
		]
	};
</script>

<Heading>DASHOBARD</Heading>

<div class="px-4 pt-6">
	<div class="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
		<div
			class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800"
		>
			<div class="w-full">
				<h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Usuarios</h3>
				<span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white"
					>{cantidadUusarios}</span
				>
				<p class="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
					<span class="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
						<svg
							class="w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								clip-rule="evenodd"
								fill-rule="evenodd"
								d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
							/>
						</svg>
						12.5%
					</span>
					que la ultima vez
				</p>
			</div>
			<div class="w-full" id="new-products-chart" />
		</div>
		<div
			class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800"
		>
			<div class="w-full">
				<h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Lugares Turisticos</h3>
				<span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white"
					>{cantidadLugares}</span
				>
				<p class="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
					<span class="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
						<svg
							class="w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								clip-rule="evenodd"
								fill-rule="evenodd"
								d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
							/>
						</svg>
						3,4%
					</span>
					que la ultima vez
				</p>
			</div>
			<div class="w-full" id="week-signups-chart" />
		</div>
		<div
			class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"
		>
			<div class="w-full">
				<h3 class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
					Lugares Mas Votados
				</h3>
				{#each lugaresTuristicos as lugar}
					<div class="flex items-center mb-2">
						<div class="w-full text-sm font-medium dark:text-white">{lugar.nombre}</div>
						<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
							<div
								class="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500"
								style={`width: ${(lugar.votos * (Math.random() * 100)) / 100}%`}
							/>
						</div>
					</div>
				{/each}
			</div>
			<div id="traffic-channels-chart" class="w-full" />
		</div>
	</div>

	<div class="flex flex-wrap mt-5 gap-5">
		<Card class="w-full">
			<Chart {options} />
		</Card>
		<Card>
			<Chart options={options2} />
		</Card>
	</div>
</div>
