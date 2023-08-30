<script lang="ts">
	// Agrega aquí cualquier lógica que necesites
</script>

<div class="p-4 w-full">
	<h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Agregar un nuevo usuario</h2>
	<form action="#">
		<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
			<div class="w-full">
				<label for="nombres" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Nombres</label
				>
				<input
					type="text"
					name="nombres"
					id="nombres"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa los nombres"
					required
				/>
			</div>
			<div class="w-full">
				<label for="apellidos" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Apellidos</label
				>
				<input
					type="text"
					name="apellidos"
					id="apellidos"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa los apellidos"
					required
				/>
			</div>

			<div class="w-full">
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Email</label
				>
				<input
					type="email"
					name="email"
					id="email"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa el correo electrónico"
					required
				/>
			</div>
			<div class="w-full">
				<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Contraseña</label
				>
				<input
					type="password"
					name="password"
					id="password"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="Ingresa la contraseña"
					required
				/>
			</div>

			<div class="w-full">
				<label for="rol" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Rol</label
				>
				<select
					id="rol"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
				>
					<option value="admin" selected>Administrador</option>
					<option value="user">Usuario</option>
				</select>
			</div>
		</div>
		<button
			type="submit"
			class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
		>
			Agregar usuario
		</button>
	</form>
</div>
