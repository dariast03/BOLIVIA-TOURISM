<script>
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { Heading, P } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	let blogs = [];

	const getData = async () => {
		const response = await fetch(PUBLIC_BASE_URL + `/blogs`, {
			method: 'GET',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
		});
		const dataJson = await response.json();
		blogs = dataJson;
		console.log(dataJson);
	};

	onMount(async () => {
		await getData();
	});
</script>

<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<Heading class="text-3xl tracking-tight text-gray-900 sm:text-4xl">BLOG</Heading>
			<p class="mt-2 text-lg leading-8 text-gray-600">
				Explora Bolivia a través de Nuestro Blog: Historias, Consejos y Aventuras de Viaje
			</p>
		</div>
		<div
			class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2"
		>
			<!-- 
	{
    "vistas": 1,
    "titulo": "MI BLOG",
    "autor": "Yo",
    "fecha": "2023-08-31",
    "categoria": "Turismo",
    "descripcion": "HELLLO WORLSD",
    "id": 1
}
 -->
			{#each blogs as blog}
				<div class="bg-white dark:bg-slate-800 shadow-xl p-5 mt-10">
					<article class=" flex max-w-xl flex-col items-start justify-between">
						<div class="flex items-center gap-x-4 text-xs">
							<P>{blog.fecha}</P>
							<a
								href="#"
								class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
								>{blog.categoria}</a
							>
						</div>
						<div class="group relative">
							<h3
								class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
							>
								<P>
									<span class="absolute inset-0" />
									{blog.titulo}
								</P>
							</h3>
							<P class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
								{blog.descripcion}
							</P>
						</div>
						<div class="relative mt-8 flex items-center gap-x-4">
							<img
								src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
								class="h-10 w-10 rounded-full bg-gray-50"
							/>
							<div class="text-sm leading-6">
								<p class="font-semibold text-gray-900">
									<P>
										<span class="absolute inset-0" />
										{blog.autor}
									</P>
								</p>
								<P color="gray" class="text-gray-600">Jefe / CEO</P>
							</div>
						</div>
					</article>
				</div>
			{/each}
		</div>
	</div>
</div>
