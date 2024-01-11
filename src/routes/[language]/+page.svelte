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

	/** @types import("./$types").PageData */
	export let data;
</script>

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
	<Sponsors sponsors={data.sponsor}/>
</main>
