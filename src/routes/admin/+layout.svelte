<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import {
		DarkMode,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Drawer,
		CloseButton,
		SidebarDropdownWrapper,
		Dropdown,
		DropdownHeader,
		DropdownDivider,
		DropdownItem,
		Avatar,
		Button,
		Breadcrumb,
		BreadcrumbItem,
		Input
	} from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import { Icon } from 'flowbite-svelte-icons';
	import { browser } from '$app/environment';

	export let data;

	const { user } = data;

	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};

	let breakPoint: number = 1024;
	let width: number;
	let backdrop: boolean = false;
	let activateClickOutside = true;
	let drawerHidden: boolean = false;
	$: if (width >= breakPoint) {
		drawerHidden = false;
		activateClickOutside = false;
	} else {
		drawerHidden = true;
		activateClickOutside = true;
	}
	onMount(() => {
		if (width >= breakPoint) {
			drawerHidden = false;
			activateClickOutside = false;
		} else {
			drawerHidden = true;
			activateClickOutside = true;
		}
	});
	const toggleSide = () => {
		if (width < breakPoint) {
			drawerHidden = !drawerHidden;
		}
	};
	const toggleDrawer = () => {
		drawerHidden = false;
	};
	$: activeUrl = $page.url.pathname;
	let spanClass = 'pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white';

	export const capitalize = (oracion: string) => {
		const palabras = oracion.split(' ');
		const palabrasCapitalizadas = palabras.map((palabra) => {
			return palabra.charAt(0).toUpperCase() + palabra.slice(1);
		});
		return palabrasCapitalizadas.join(' ');
	};

	$: urls = $page.url.pathname.split('/');

	$: urlsParsed = urls.filter((url) => url !== '');

	$: items = urlsParsed.map((url, i) => {
		return {
			href: url,
			label: capitalize(url.replaceAll('/', '').replaceAll('-', ' '))
		};
	});
</script>

<svelte:window bind:innerWidth={width} />

<Navbar let:hidden let:toggle>
	<NavHamburger
		on:click={toggleDrawer}
		btnClass="focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 m-0 mr-3 lg:hidden"
	/>

	<NavBrand href="/admin/dashboard" class="lg:ml-60">
		<!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">TOUR</span>
	</NavBrand>
	<div class="flex md:order-2">
		<Button
			color="none"
			data-collapse-toggle="mobile-menu-3"
			aria-controls="mobile-menu-3"
			aria-expanded="false"
			class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
		>
			<Icon name="search-outline" class="w-5 h-5" />
		</Button>
		<div class="hidden relative md:block">
			<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
				<Icon name="search-outline" class="w-4 h-4" />
			</div>
			<Input id="search-navbar" class="pl-10" placeholder="Search..." />
		</div>
		{#if !user}
			<Button color="alternative" href="/login">Iniciar Sesion</Button>
		{:else}
			<Avatar
				id="avatar-menu"
				src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
			/>

			<Dropdown placement="bottom" triggeredBy="#avatar-menu">
				<DropdownHeader>
					<span class="block text-sm" />
					<span class="block truncate text-sm font-medium">{user.email}</span>
				</DropdownHeader>
				<DropdownItem href="/">Sitio Web</DropdownItem>
				<DropdownDivider />
				<form action="/logout" method="post">
					<button type="submit" class="w-full">
						<DropdownItem>Cerrar Sesión</DropdownItem>
					</button>
				</form>
			</Dropdown>
		{/if}
	</div>
</Navbar>

<Drawer
	transitionType="fly"
	{backdrop}
	{transitionParams}
	bind:hidden={drawerHidden}
	bind:activateClickOutside
	width="w-64"
	id="sidebar"
>
	<div class="flex items-center">
		<CloseButton on:click={() => (drawerHidden = true)} class="mb-4 dark:text-white lg:hidden" />
	</div>
	<Sidebar asideClass="w-54">
		<SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
			<SidebarGroup>
				<SidebarItem
					label="Home"
					href="/admin/dashboard"
					on:click={toggleSide}
					active={activeUrl === `/admin/dashboard`}
				/>

				<!-- <SidebarItem
					label="Ciudad"
					href="/admin/ciudad"
					on:click={toggleSide}
					active={activeUrl === `/admin/ciudad`}
				/>
 -->
				<SidebarDropdownWrapper label="Turismo">
					<SidebarItem
						label={'Ciudades'}
						href="/admin/ciudad"
						{spanClass}
						on:click={toggleSide}
						active={activeUrl === `/admin/ciudad`}
					/>
					<SidebarItem
						label={'Nueva Ciudad'}
						href="/admin/ciudad/crear"
						{spanClass}
						on:click={toggleSide}
						active={activeUrl === `/admin/ciudad/crear`}
					/>

					<SidebarItem
						label={'Lugares Turisticos'}
						{spanClass}
						href="/admin/lugares"
						on:click={toggleSide}
						active={activeUrl === `/admin/lugares`}
					/>

					<SidebarItem
						label={'Nuevo Lugar Turistico'}
						{spanClass}
						href="/admin/lugares/crear"
						on:click={toggleSide}
						active={activeUrl === `/admin/lugares/crear`}
					/>
				</SidebarDropdownWrapper>

				<SidebarDropdownWrapper label="Usuarios">
					<SidebarItem
						label={'Nuevo Usuario'}
						href="/admin/usuario/crear"
						{spanClass}
						on:click={toggleSide}
						active={activeUrl === `/admin/usuario/crear`}
					/>

					<SidebarItem
						label={'Ver Usuarios'}
						{spanClass}
						href="/admin/usuario"
						on:click={toggleSide}
						active={activeUrl === `/admin/usuario`}
					/>
				</SidebarDropdownWrapper>

				<SidebarDropdownWrapper label="Blog" ulClass="ml-5">
					<SidebarItem
						label={'Nueva Publicacion'}
						{spanClass}
						href="/admin/blog/crear"
						on:click={toggleSide}
						active={activeUrl === `/admin/blog/crear`}
					/>

					<SidebarItem
						label={'Ver Publicaciones'}
						{spanClass}
						href="/admin/blog"
						on:click={toggleSide}
						active={activeUrl === `/admin/blog`}
					/>
				</SidebarDropdownWrapper>
			</SidebarGroup>
		</SidebarWrapper>

		<DarkMode class="inline-block dark:hover:text-white hover:text-gray-900" />
	</Sidebar>
</Drawer>

<div class="flex px-4 mx-auto w-full">
	<main class="lg:ml-64 w-full mx-auto">
		<Breadcrumb aria-label="Solid background breadcrumb example" solid>
			<BreadcrumbItem href="/admin/dashboard" home>Inicio</BreadcrumbItem>
			{#each items as url}
				<BreadcrumbItem href={url.href}>{url.label}</BreadcrumbItem>
			{/each}
		</Breadcrumb>

		<div class="mt-5 w-full">
			<slot />
		</div>
	</main>
</div>
