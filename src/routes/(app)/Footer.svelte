<script>
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		FooterBrand,
		FooterIcon,
		Heading
	} from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
</script>

<Footer footerType="socialmedia">
	<div class="md:flex md:justify-between p-6">
		<div class="mb-6 md:mb-0">
			<Heading tag="h4" class="mb-5">Ubicacion</Heading>
			<!-- <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" /> -->
			<iframe
				class="w-full"
				title="mapa"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2846182248395!2d-64.7354057433738!3d-21.535164906142075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x940647e1931f610d%3A0x6216e5a810e8dd26!2sFancy%20Tours%20Operadora%20de%20Turismo!5e0!3m2!1ses-419!2sbo!4v1693458475957!5m2!1ses-419!2sbo"
				width="400"
				height="300"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		</div>
		<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
					Destinos Turísticos
				</h2>
				<FooterLinkGroup>
					<FooterLink liClass="mb-4" href="/">Explora Bolivia</FooterLink>
					<FooterLink liClass="mb-4" href="/">Aventuras Andinas</FooterLink>
				</FooterLinkGroup>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Síguenos</h2>
				<FooterLinkGroup>
					<FooterLink liClass="mb-4" href="https://www.instagram.com/fancytoursbolivia/"
						>Instagram</FooterLink
					>
					<FooterLink liClass="mb-4" href="https://www.facebook.com/FancyToursTarija/"
						>Facebook</FooterLink
					>
				</FooterLinkGroup>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
				<FooterLinkGroup>
					<FooterLink liClass="mb-4" href="#">Política de Privacidad</FooterLink>
					<FooterLink liClass="mb-4" href="#">Términos y Condiciones</FooterLink>
				</FooterLinkGroup>
			</div>
		</div>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterCopyright
			href="/"
			by="BoliviaMagica™"
			copyrightMessage="Todos los derechos reservados"
		/>
		<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
			<FooterIcon href="https://www.facebook.com/FancyToursTarija/">
				<Icon
					name="facebook-solid"
					class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon>

			<!-- <FooterIcon href="https://www.facebook.com/FancyToursTarija/">
				<Icon
					name="instagram-solid"
					class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon> -->

			<FooterIcon href="https://twitter.com/ToursBolivia">
				<Icon
					name="twitter-solid"
					class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon href="/" />
		</div>
	</div>
</Footer>
