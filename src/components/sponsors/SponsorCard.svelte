<script>
	import { t } from '$lib/translation/translations';

/** @type {Sponsor}*/
	export let sponsor;
</script>

<div class="sponsor-card flex flex-col justify-center items-center">
	<img src={sponsor.image} alt={sponsor.name}/>
    <h2 class="text-subheader font-bold mt-4">{sponsor.name}</h2>
</div>

<style>
	.sponsor-card{
		/* max-width: 380px;
		max-height: 250px; */
		padding: 1.5rem;
		border-radius: 16px;
border: 1px solid #F1F3F4;
background: #ffffff;
box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
    }
</style>