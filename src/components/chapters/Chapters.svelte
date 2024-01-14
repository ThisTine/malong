<script lang="ts">
	import { t } from '$lib/translation/translations';
	import type { Chapter } from '../../types/chapter';
	import ChapterCard from './ChapterCard.svelte';

	let chapters: Chapter[] = [
		{
			name: 'GDSC CU',
			logo: '/GDSC CU.png'
		},
		{
			name: 'GDSC TU',
			logo: '/GDSC TU.png'
		},
		{
			name: 'GDSC KU',
			logo: '/GDSC KU.png'
		},
		{
			name: 'GDSC KKU',
			logo: '/GDSC KKU.png'
		},
		{
			name: 'GDSC KMUTT',
			logo: '/GDSC KMUTT.png'
		},
		{
			name: 'GDSC KMITL',
			logo: '/GDSC KMITL.png'
		},
		{
			name: 'GDSC MU',
			logo: '/GDSC MU.png'
		}
	];
</script>

<div class="wrapper flex w-full justify-center flex-col my-10">
	<h5 class="text-subheader text-red-500 font-bold text-center">{$t('home.chapterSubheader')}</h5>
	<h2 class="text-h2 font-bold text-center">{$t('home.chapterHeader')}</h2>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 pb-10 justify-center">
    {#each chapters as chapter}
		{#if chapter.name != "GDSC MU"}
			<ChapterCard chapter={chapter} />
		{:else}
			<div class="md:grid md:grid-cols-subgrid md:gap-5 md:col-span-3">
    			<div class="md:col-start-2">
					<ChapterCard chapter={chapter} />
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
</style>
