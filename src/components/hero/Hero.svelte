<script>
	import { t } from '$lib/translation/translations';
</script>

<div>
	<div style="background-image: url('/background.png'); height:100vh; background-size: cover;">
		<div class="layoutbody" style="display: flex; flex-direction: column; max-width:420px;">
			<p class="font-bold text-yellow-500">{$t('home.intro')}</p>
			<h1 class="text-header font-bold text-black">{$t('home.title')}</h1>
			<p class="text-black font-normal">{$t('home.body')}</p>
			<a
				href="https://gdsc.community.dev/events/details/developer-student-clubs-thammasat-university-presents-malong-thailand-demo-day/cohost-king-mongkuts-university-of-technology-thonburi"
				target="_blank"
				class="styleButton text-white font-normal"
			>
				{$t('home.regis')}
			</a>
		</div>
	</div>
</div>

<style>
	.layoutbody {
		@media only screen and (max-width: 680px) {
			margin: 20px;
			padding-top: 100px;
		}
		margin-left: 200px;
		padding-top: 150px;
	}

	.styleButton {
		border-radius: 16px;
		background: linear-gradient(90deg, #4285f4 29.69%, #8ab4f8 100%);
		width: 200px;
		padding: 15px;
		margin-top: 16px;
		text-decoration: none;
		display: inline-block;
		text-align: center;
	}
</style>
