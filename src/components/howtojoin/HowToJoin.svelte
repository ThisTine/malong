<script>
	import { t } from '$lib/translation/translations';
</script>

<div class="container wrapper">
	<div class="flex justify-center layout">
		<div class="text-center" style="display: flex; flex-direction: column; max-width: 520px;">
			<p class="font-bold text-green-500 text-body2">{$t('home.introHowToJoin')}</p>
			<h2 class="text-h2 font-bold">{$t('home.titleHowToJoin')}</h2>
			<p class="text-body2 inline-block">{$t('home.descriptionHowToJoin')}</p>
		</div>
	</div>
	<div class="grid md:grid-cols-2 items-center justify-center">
		<div class="flex-col gap-8 inline-flex ">
			<div
				class="max-w-504 p-6 rounded-2xl box border border-gray-100 flex-col justify-start items-start gap-4 inline-flex"
			>
				<div class="self-stretch text-black text-subheader font-bold">
					{$t('home.featureHowToJoin')}
				</div>
				<div class="self-stretch text-black text-body">
					<span class="bullet">•</span>{$t('home.featureHowToJoin1')}<br />
					<span class="bullet">•</span>{$t('home.featureHowToJoin2')}<br />
					<span class="bullet">•</span>{$t('home.featureHowToJoin3')}
				</div>
			</div>

			<div
				class="max-w-504 p-6 rounded-2xl box border border-gray-100 flex-col justify-start items-start gap-4 inline-flex"
			>
				<div class="self-stretch text-black text-subheader font-bold">
					{$t('home.matchingHowToJoin')}
				</div>
				<div class="self-stretch text-black text-body">
					<span class="bullet">•</span>{$t('home.matchingHowToJoin1')}<br />
					<span class="bullet">•</span>{$t('home.matchingHowToJoin2')}<br />
				</div>
			</div>
		</div>
		<img alt="" src="howToJoin.png" />
	</div>
</div>

<style>
	.layout {
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.bullet {
		margin-left: 10px;
		margin-right: 10px;
	}

	.container {
		@media only screen and (max-width: 1024px) {
			padding: 20px;
			/* padding-top: 100px; */
		}
	}

	.box {
		box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
	}
</style>
