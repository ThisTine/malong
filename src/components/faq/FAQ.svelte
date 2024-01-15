<script>
	import { t } from '$lib/translation/translations';
	import FAQ from './FAQCard.svelte';
</script>

<div id="faq" class="container wrapper flex flex-col items-center mb-10 max-w-818">
	<div class="text-subheader font-bold text-yellow-500">{$t('home.faq')}</div>
	<h1 class="text-h2 font-bold">{$t('home.titleFaq')}</h1>
	<div class="faq-container">
		<FAQ faq={{ question: $t('home.q1Faq'), answer: $t('home.a1Faq') }} />
		<FAQ faq={{ question: $t('home.q2Faq'), answer: $t('home.a2Faq') }} />
		<FAQ faq={{ question: $t('home.q3Faq'), answer: $t('home.a3Faq') }} />
		<FAQ faq={{ question: $t('home.othersFaq'), answer: $t('') }} />
	</div>
	<br />
</div>

<style>
	.container {
		@media only screen and (max-width: 1024px) {
			padding: 20px;
		}
	}

	.faq-container {
		width: 100%;
		max-width: 818px;
		margin: 0 auto;
	}
</style>
