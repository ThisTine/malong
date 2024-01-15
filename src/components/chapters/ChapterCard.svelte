<script>
	import { t } from '$lib/translation/translations';

	/** @type {import('../../types/chapter').Chapter}*/
	export let chapter;
</script>

<div class="chapter-card flex flex-col justify-between items-center">
	<img src={chapter.logo} alt={chapter.name} />
	<h2 class="text-subheader font-bold">{chapter.name}</h2>
</div>

<style>
	.chapter-card {
		/* max-width: 380px; */
		height: 252px;
		padding: 1.5rem;
		padding-top: 3rem;
		border-radius: 16px;
		border: 1px solid #f1f3f4;
		background: #ffffff;
		box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
	}
</style>
