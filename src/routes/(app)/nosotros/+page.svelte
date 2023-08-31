<script>
	import { Heading, P } from 'flowbite-svelte';
</script>

<div class="relative overflow-hidden">
	<img
		class="h-screen object-cover w-full opacity-70"
		src="https://hidalgotours.com/wp-content/uploads/2020/07/Hidalgo-tours-agencia-viajes-bolivia-nosotros-quienes-somos-cover-.jpg"
		alt=""
	/>
	<div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70px] w-full">
		<Heading class="text-6xl text-center">SOBRE NOSOTROS</Heading>
	</div>
	<!-- <Heading tag="h1" class="text-3xl font-semibold ">Nosotros</Heading>
	<P class="mt-2">Conoce más sobre nosotros y nuestra misión.</P> -->
</div>

<!-- Sección de Valores -->
<section class=" py-12">
	<div class="container mx-auto">
		<Heading tag="h1" class="text-2xl  text-center">Nuestros Valores</Heading>
		<div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<div class="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg">
				<Heading tag="h3" class="text-xl font-semibold mb-2">Compromiso</Heading>
				<P>
					Estamos comprometidos con brindar a nuestros clientes una atención excepcional y servicios
					de alta calidad en cada paso de su viaje.
				</P>
			</div>
			<div class="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg">
				<Heading tag="h3" class="text-xl font-semibold mb-2">Sostenibilidad</Heading>
				<P>
					Valoramos y respetamos el entorno natural y cultural de Bolivia. Promovemos prácticas
					turísticas sostenibles y responsables.
				</P>
			</div>
			<div class="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg">
				<Heading tag="h3" class="text-xl font-semibold mb-2">Innovación</Heading>
				<P>
					Buscamos constantemente nuevas formas de enriquecer las experiencias de nuestros clientes,
					utilizando tecnología y creatividad.
				</P>
			</div>
		</div>
	</div>
</section>

<!-- Sección de Equipo -->
<section class="py-12">
	<div class="container mx-auto">
		<Heading tag="h2" class="text-2xl  text-center">Nuestro Equipo</Heading>
		<div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<!-- Miembro 1 -->
			<div class="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg shadow-lg">
				<img
					src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
					alt="Miembro 1"
					class="min-h-[50px] object-cover w-full rounded-lg"
				/>
				<Heading tag="h3" class="text-lg font-semibold mt-2">Nombre del Miembro 1</Heading>
				<P class="text-gray-700">Cargo y descripción del miembro del equipo.</P>
			</div>
			<!-- Miembro 2 -->
			<div class="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg shadow-lg">
				<img
					src="https://i.pinimg.com/originals/a7/e8/ca/a7e8cafb4f60254d40acd791a3aead7d.jpg"
					alt="Miembro 2"
					class="min-h-[50px] object-cover w-full rounded-lg"
				/>
				<Heading tag="h3" class="text-lg font-semibold mt-2">Nombre del Miembro 2</Heading>
				<P class="text-gray-700">Cargo y descripción del miembro del equipo.</P>
			</div>
			<!-- Miembro 3 -->
			<div class="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg shadow-lg">
				<img
					src="https://images.unsplash.com/photo-1538826042394-3ccb96963576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&w=1000&q=80"
					alt="Miembro 3"
					class="min-h-[50px] object-cover w-full rounded-lg"
				/>
				<Heading tag="h3" class="text-lg font-semibold mt-2">Nombre del Miembro 3</Heading>
				<P class="text-gray-700">Cargo y descripción del miembro del equipo.</P>
			</div>
		</div>
	</div>
</section>

<!-- Sección de Misión y Visión -->
<section class="py-12">
	<div class="container mx-auto">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<div>
				<Heading tag="h2" class="text-2xl">Nuestra Misión</Heading>
				<P class="mt-4 text-gray-700">
					Nuestra misión es fomentar el turismo responsable y brindar a nuestros clientes
					experiencias auténticas y enriquecedoras que resalten la riqueza cultural y natural de
					Bolivia.
				</P>
			</div>
			<div>
				<Heading tag="h3" class="text-2xl">Nuestra Visión</Heading>
				<P class="mt-4 text-gray-700">
					Aspiramos a convertirnos en la agencia de turismo líder en Bolivia, reconocida por su
					compromiso con la sostenibilidad, la calidad y la innovación en cada viaje que ofrecemos.
				</P>
			</div>
		</div>
	</div>
</section>
