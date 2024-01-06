<script>
    import Hero from "../../components/hero/Hero.svelte";
    import CountDown from "../../components/countdown/CountDown.svelte";
    import Info from "../../components/info/Info.svelte";
    import Timeline from "../../components/timeline/Timeline.svelte";
    import Criteria from "../../components/criteria/Criteria.svelte";
    import HowToJoin from "../../components/howtojoin/HowToJoin.svelte";
    import Venue from "../../components/venue/Venue.svelte";
    import Agenda from "../../components/agenda/Agenda.svelte";
    import FAQ from "../../components/faq/FAQ.svelte";
    import AboutGdsc from "../../components/aboutgdsc/AboutGdsc.svelte";
    import Chapters from "../../components/chapters/Chapters.svelte";
    import Sponsors from "../../components/sponsors/Sponsors.svelte";
    import SDG from "../../components/sdg/Sdg.svelte";
    import Nav from "../../components/nav/Nav.svelte";

</script>

<header>
    <Nav/>
</header>
<main>
<Hero/>
<CountDown/>
<Info/>
<SDG/>
<Timeline/>
<Criteria/>
<HowToJoin/>
<Venue/>
<Agenda/>
<FAQ/>
<AboutGdsc/>
<Chapters/>
<Sponsors/>
</main>