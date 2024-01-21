<script>
	import { t } from '$lib/translation/translations';
	import { slide, fade } from 'svelte/transition';

	/** @type {string}*/
	export let lang;

	let showMobileMenu = false;
</script>

<nav>
	<div class="navbg">
		<div class="wrapper flex w-full mt-5 mb-5">
			<div class="nav-container flex">
				<button class="hamburger" on:click={() => (showMobileMenu = !showMobileMenu)}>
					<img src="burger.svg" alt="Menu" />
				</button>
				<div class="logo">
					<img alt="Logo" src="logo.png" style="width:100px;" />
				</div>
			</div>

			{#if showMobileMenu}
				<div transition:slide={{ axis: 'x' }} class="mobile-menu z-20">
					<a
						on:click={() => (showMobileMenu = false)}
						class="text-black font-normal"
						href="#overview"><p>{$t('home.overview')}</p></a
					>
					<a on:click={() => (showMobileMenu = false)} class="text-black font-normal" href="#faq"
						>{$t('home.faqs')}</a
					>
					<a
						on:click={() => (showMobileMenu = false)}
						class="text-black font-normal"
						href="#timeline">{$t('home.timeline')}</a
					>
					<a on:click={() => (showMobileMenu = false)} class="text-black font-normal" href="#about"
						>{$t('home.about')}</a
					>
					<div>
						<div class="dropdown onlyMobile text-black font-normal">
							<div>
								<a
									on:click={() => (showMobileMenu = false)}
									href={lang === 'th' ? 'en' : 'th'}
									class="text-black font-normal">{lang === 'th' ? '🇺🇸 EN' : '🇹🇭 TH'}</a
								>
							</div>
							<button class="close" on:click={() => (showMobileMenu = !showMobileMenu)}>
								<img src="close.svg" alt="close" />
							</button>
						</div>
					</div>
				</div>
				<div
					role="button"
					tabindex={0}
					transition:fade
					class="bg-black opacity-35 w-screen h-screen fixed z-0 top-0"
					on:click={() => (showMobileMenu = false)}
				></div>
			{/if}

			<div class="nav-links wrapper flex w-full justify-center">
				<div style="display: flex; justify-content: center; gap:30px;">
					<a class="text-black font-normal" href="#overview"><p>{$t('home.overview')}</p></a>
					<a class="text-black font-normal" href="#faq">{$t('home.faqs')}</a>
					<a class="text-black font-normal" href="#timeline">{$t('home.timeline')}</a>
					<a class="text-black font-normal" href="#about">{$t('home.about')}</a>
					<div>
						<a href={lang === 'th' ? 'en' : 'th'} class="text-black font-normal"
							>{lang === 'th' ? '🇺🇸 EN' : '🇹🇭 TH'}</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>

<style>
	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content a {
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	.dropdown-content a:hover {
		background-color: #f1f1f1;
	}

	button {
		cursor: pointer;
		background: none;
		border: none;
		display: flex;
		align-items: center;
	}

	img.icon {
		margin-left: 5px;
	}

	.hamburger {
		width: 24px;
		height: 24px;
		display: none;
		background: none;
		border: none;
		cursor: pointer;
	}
	.logo {
		margin: 0 auto;
	}

	.nav-links {
		column-gap: 50px;
	}

	@media (max-width: 768px) {
		/* navbar side*/
		.mobile-menu {
			position: fixed;
			top: 0;
			left: 0%;
			width: 60%;
			height: 100%;
			background: radial-gradient(circle, rgb(165, 194, 240) 0%, rgba(254, 255, 254, 0.962) 100%);
			box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
			transition: 0.5s;
			z-index: 2;
			display: flex;
			flex-direction: column;
			text-align: center;
			justify-content: center;
			gap: 30px;
		}

		/* Hide the regular nav-links in mobile view */
		.nav-links {
			display: none;
		}
		/* Show the hamburger menu */
		.hamburger {
			display: flex;
			justify-content: flex-start;
		}
		.close {
			display: flex;
			justify-self: center;
			margin-top: 120px;
			width: 30px;
		}
		.nav-container {
			padding: 0 15px;
		}

		.logo {
			display: flex;
			justify-content: center;
		}

		.hamburger {
			margin-right: 15px;
		}
	}

	@media (min-width: 1080px) {
		.mobile-menu {
			display: none;
		}

		.nav-container {
			padding: 0;
			margin: 0;
			display: flex;
			justify-content: flex-start;
		}

		.logo {
			display: flex;
			justify-content: flex-start;
		}
	}

	.navbg {
		background-color: #fbfcff;
		/* padding: 2px 0; */
		position: fixed;
		width: 100%;
		z-index: 1;
	}
</style>
