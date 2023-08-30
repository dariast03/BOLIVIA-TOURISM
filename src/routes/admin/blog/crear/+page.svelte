<script lang="ts">
	// Agrega aquí cualquier lógica que necesites
</script>

<div class="p-4 w-full">
	<h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Agregar un nuevo blog</h2>
	<form action="#">
		<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
			<div class="sm:col-span-2">
				<label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Título del Blog</label
				>
				<input
					type="text"
					name="title"
					id="title"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa el título del blog"
					required
				/>
			</div>
			<div class="w-full">
				<label for="author" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Autor</label
				>
				<input
					type="text"
					name="author"
					id="author"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Autor del blog"
					required
				/>
			</div>
			<div class="w-full">
				<label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Fecha</label
				>
				<input
					type="date"
					name="date"
					id="date"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					required
				/>
			</div>
			<div class="w-full">
				<label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Categoría</label
				>
				<input
					type="text"
					name="category"
					id="category"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Categoría del blog"
					required
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="description"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción</label
				>
				<textarea
					id="description"
					rows="8"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Tu descripción del blog aquí"
					required
				/>
			</div>
		</div>
		<button
			type="submit"
			class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
		>
			Agregar blog
		</button>
	</form>
</div>
