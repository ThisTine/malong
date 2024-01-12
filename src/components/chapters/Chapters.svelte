<script lang="ts">
	import { t } from '$lib/translation/translations';
	import ChapterCard from './ChapterCard.svelte';

	let chapters:Chapter[] = [{
		name:"GDSC CU",
	},{
		name:"GDSC TU",
	},{
		name:"GDSC KU",
	},{
		name:"GDSC KKU",
	},{
		name:"GDSC KMUTT",
	},{
		name:"GDSC KMITL",
	},{
		name:"GDSC MU",
	}]
</script>

<div class="wrapper flex w-full justify-center flex-col my-10">
	<h5 class="text-subheader text-red-500 font-bold text-center">{$t('home.chapterSubheader')}</h5>
	<h2 class="text-h2 font-bold text-center">{$t('home.chapterHeader')}</h2>

		
	<div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 pb-10 justify-center">
    {#each chapters as chapter}
		{#if chapter.name != "GDSC MU"}
			<ChapterCard chapter={chapter} />
		{:else}
			<div class="grid grid-cols-subgrid gap-5 col-span-3">
    			<div class="col-start-2">
					<ChapterCard chapter={chapter} />
				</div>
  			</div>
		{/if}
	{/each} 
</div>

</div>

<style>
</style>