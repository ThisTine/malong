<script>
	import Hero from '../../components/hero/Hero.svelte';
	import CountDown from '../../components/countdown/CountDown.svelte';
	import Info from '../../components/info/Info.svelte';
	import Timeline from '../../components/timeline/Timeline.svelte';
	import Criteria from '../../components/criteria/Criteria.svelte';
	import HowToJoin from '../../components/howtojoin/HowToJoin.svelte';
	import Venue from '../../components/venue/Venue.svelte';
	import Agenda from '../../components/agenda/Agenda.svelte';
	import FAQ from '../../components/faq/FAQ.svelte';
	import AboutGdsc from '../../components/aboutgdsc/AboutGdsc.svelte';
	import Chapters from '../../components/chapters/Chapters.svelte';
	import Sponsors from '../../components/sponsors/Sponsors.svelte';
	import SDG from '../../components/sdg/Sdg.svelte';
	import Nav from '../../components/nav/Nav.svelte';
	import { t } from '$lib/translation/translations';

	/** @types import("./$types").PageData */
	export let data;
</script>

<svelte:head>
	<title>{$t('home.linkTitle')}</title>
	<meta property="og:title" content={$t('home.linkTitle')} />
	<meta property="og:description" content={$t('home.body')} />
	<meta property="og:image" content="cdn.malonghack.com/og-image.jpg" />
</svelte:head>

<header>
	<!--Fxh-->
	<Nav lang={data.lang} />
</header>
<main>
	<!--Fxh-->
	<Hero />
	<!--Ice-->
	<CountDown />
	<!--Boom-->
	<Info />
	<!--Fxh-->
	<SDG />
	<!--Tine-->
	<Timeline />
	<!--Ice-->
	<Criteria />
	<!--Night-->
	<HowToJoin />
	<!--Ice-->
	<Venue />
	<!--Night -->
	<Agenda />
	<!--Night -->
	<FAQ />
	<!--Eve-->
	<AboutGdsc />
	<!--Eve-->
	<Chapters />
	<!--Eve-->
	<Sponsors sponsors={data.sponsor ?? []} />
	<div class="flex flex-col justify-center p-5 gap-3 items-center">
		<p class="text-center">© 2023. Google Developer Student Clubs Thailand.All rights reserved.</p>
		<div class="flex gap-5">
			<a href="https://www.facebook.com/malong.th" target="_blank">
				<img alt="facebook" src="https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico" />
			</a>
			<a href="https://www.instagram.com/malong.gdsc/" target="_blank">
				<img
					alt="Instagram"
					src="https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png"
				/>
			</a>
		</div>
	</div>
</main>
