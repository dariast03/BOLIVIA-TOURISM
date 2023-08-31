<script>
	import { Heading, P } from 'flowbite-svelte';
</script>

<section class="container">
	<div
		class="px-4 py-8 md:py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:py-12 bg-slate-100 dark:bg-slate-800"
	>
		<div class="flex flex-wrap items-center mx-auto max-w-7xl">
			<div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
				<div>
					<div class="relative w-full max-w-lg">
						<div
							class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"
						/>

						<div class="relative">
							<img
								class="object-cover object-center mx-auto rounded-lg shadow-2xl"
								alt="hero"
								src="https://4.bp.blogspot.com/-66GvtQoIqNw/Wfid-MhaEnI/AAAAAAAAC3w/vhVnP1PLuLwauYIcCYUpLqJlIjKkaSOLwCLcBGAs/s1600/Pocona-iglesia-sitio-turistico-de-cochabamba.jpg"
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0"
			>
				<Heading
					tag="h1"
					class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl"
				>
					¿Estás buscando tu próximo destino?
				</Heading>
				<P class="mb-8 text-base leading-relaxed text-left text-gray-500">
					Nuestros recorridos empiezan en el momento en el que sueñas con viajar. Únete a nuestra
					comunidad y empieza a recibir las mejores opciones para hacerlo realidad.
				</P>
				<div class="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex w-full">
					<div
						class="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-xl sm:max-w-lg sm:flex"
					>
						<div class="flex-1 min-w-0 revue-form-group">
							<label for="member_email" class="sr-only">Email address</label>
							<input
								type="email"
								class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
								placeholder="tuEmail@gmail.com  "
							/>
						</div>
						<div class="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
							<button
								type="submit"
								class="block w-full px-5 py-3 text-base font-medium text-white bg-pink border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
								>Enviar</button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: -250px;
	}
	.shadow-2xl {
		/* --shadow-offset-x: 0;
		--shadow-offset-y: 4px;
		--shadow-blur: 8px;
		--shadow-color: rgba(0, 0, 0, 0.4);
		box-shadow: var(--shadow-offset-x) var(--shadow-offset-y) var(--shadow-blur) var(--shadow-color); */
	}

	.bg-pink {
		background-color: rgb(0, 0, 0);
	}

	.bg-pink:hover {
		background-color: rgb(0, 0, 0);
	}
	.bg-rosado {
		background-color: rgb(0, 0, 0);
	}
</style>
