<script lang="ts">
	import { t } from '$lib/translation/translations';
	import SponsorCard from './SponsorCard.svelte';
	import type { Sponsor } from '../../types/sponsor';

	/** @type {Sponsor[]}*/
	export let sponsors: Sponsor[] = [];
</script>

<div class="wrapper flex w-full justify-center flex-col items-center">
	<h5 class="text-subheader text-yellow-600 font-bold text-center">
		{$t('home.sponsorSubheader')}
	</h5>
	<h2 class="text-h2 font-bold text-center mb-5">{$t('home.sponsorHeader')}</h2>
	{#if sponsors.length > 2}
		<div class="grid grid-cols-2 md:grid-cols-3 gap-5 p-5 pb-10">
			{#each sponsors as sponsor}
				<SponsorCard {sponsor} />
			{/each}
		</div>
	{:else}
		<div class="flex flex-col md:flex-row justify-center gap-5 p-5 pb-10">
			{#each sponsors as sponsor}
				<SponsorCard {sponsor} />
			{/each}
		</div>
	{/if}
</div>
