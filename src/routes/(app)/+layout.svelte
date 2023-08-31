<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Avatar,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		DropdownDivider,
		Button
	} from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	import Footer from './Footer.svelte';

	export let data;

	const { user } = data;

	let breakPoint: number = 1024;
	let width: number;
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

	let divClass = 'w-full ml-auto lg:block lg:w-auto order-1 lg:order-none';
	let ulClass =
		'flex flex-col py-3 my-4 lg:flex-row lg:my-0 text-sm font-medium gap-4 dark:lg:bg-transparent lg:bg-white lg:border-0';
</script>

<svelte:window bind:innerWidth={width} />

<header
	class="flex-none w-full mx-auto sticky top-0 backdrop-blur-xl bg-white/40 shadow-xl z-[9999]"
>
	<Navbar let:hidden let:toggle>
		<!-- <NavHamburger
			on:click={toggleDrawer}
			btnClass="focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 m-0 mr-3 lg:hidden"
		/> -->
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-4">
				BoliviaMágica
			</span>
		</NavBrand>
		<!-- <div class="flex items-center md:order-2">
			<Avatar id="avatar-menu" src="/images/profile-picture-3.webp" />
			<NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1" />
		</div> -->
		<NavUl
			{hidden}
			{divClass}
			{ulClass}
			nonActiveClass=" text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-white lg:dark:hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
			activeClass=" lg:text-primary-700 text-white dark:text-white dark:lg:text-primary-500 bg-primary-700 lg:bg-transparent dark:bg-primary-600 lg:dark:bg-transparent cursor-default"
		>
			<NavLi class="lg:px-2 lg:mb-0" href="/">Inicio</NavLi>
			<NavLi class="lg:px-2 lg:mb-0" href="/ciudades">Ciudades</NavLi>
			<NavLi class="lg:px-2 lg:mb-0" href="/destinos">Destinos</NavLi>
			<NavLi class="lg:px-2 lg:mb-0" href="/nosotros">Nosotros</NavLi>
			<NavLi class="lg:px-2 lg:mb-0" href="/contacto">Contacto</NavLi>

			{#if width <= breakPoint}
				<NavLi class="lg:px-2 lg:mb-0">
					<Button color="alternative" href="/login">Iniciar Sesion</Button>
				</NavLi>
			{/if}
		</NavUl>

		<div class="flex items-center ml-auto gap-5">
			<DarkMode class="inline-block dark:hover:text-white hover:text-gray-900" />

			{#if !user}
				{#if width >= breakPoint}
					<Button color="alternative" href="/login">Iniciar Sesion</Button>
				{/if}
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
					<DropdownItem href="/admin/dashboard">Dashboard</DropdownItem>
					<DropdownDivider />
					<form action="/logout" method="post">
						<button type="submit" class="w-full">
							<DropdownItem>Cerrar Sesión</DropdownItem>
						</button>
					</form>
				</Dropdown>
			{/if}
		</div>
		<NavHamburger on:click={toggle} btnClass="lg:hidden" />
	</Navbar>
</header>

<!-- <Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span
		>
	</NavBrand>
	<div class="flex items-center md:order-2">
		<Avatar id="avatar-menu" src="/images/profile-picture-3.webp" />
		<NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1" />
	</div>
	<Dropdown placement="bottom" triggeredBy="#avatar-menu">
		<DropdownHeader>
			<span class="block text-sm">Bonnie Green</span>
			<span class="block truncate text-sm font-medium">name@flowbite.com</span>
		</DropdownHeader>
		<DropdownItem>Dashboard</DropdownItem>
		<DropdownItem>Settings</DropdownItem>
		<DropdownItem>Earnings</DropdownItem>
		<DropdownDivider />
		<DropdownItem>Cerrar Sesión</DropdownItem>
	</Dropdown>
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/docs/components/navbar">Navbar</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>

	<div class="flex items-center ml-auto">
		<DarkMode class="inline-block dark:hover:text-white hover:text-gray-900" />
	</div>
</Navbar> -->

<!-- <Drawer
	transitionType="fly"
	{backdrop}
	{transitionParams}
	bind:hidden={drawerHidden}
	bind:activateClickOutside
	width="w-64"
	class="overflow-scroll pb-32"
	id="sidebar">
	<div class="flex items-center">
		<CloseButton on:click={() => (drawerHidden = true)} class="mb-4 dark:text-white lg:hidden" />
	</div>
	<Sidebar asideClass="w-54">
		<SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
			<SidebarGroup>
				<SidebarItem label="Home" href="/" on:click={toggleSide} active={activeUrl === `/`} />
				{#each data.pages as { meta, path }}
					<SidebarItem
						label={meta.title}
						href={`/pages/${path}`}
						{spanClass}
						activeClass="flex items-center p-2 text-base font-normal text-gray-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-primary-700"
						on:click={toggleSide}
						active={activeUrl === `/pages/${path}`}
					/>
				{/each}
				<SidebarDropdownWrapper label="Articles">
					{#each data.articles as { meta, path }}
						<SidebarItem
							label={meta.title}
							href={`/blog/${path}`}
							{spanClass}
							activeClass="flex items-center p-2 text-base font-normal text-gray-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-primary-700"
							on:click={toggleSide}
							active={activeUrl === `/blog/${path}`}
						/>
					{/each}
				</SidebarDropdownWrapper>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</Drawer>
 -->
<div class="flex mx-auto w-full">
	<main class=" w-full mx-auto">
		<slot />
	</main>
</div>

<div class="mt-32">
	<Footer />
</div>
