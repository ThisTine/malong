<script>
	import { t } from '$lib/translation/translations';
</script>

<div id="about" class="wrapper flex w-full justify-center flex-col">
	<h5 class="text-subheader text-green-500 font-bold text-center">{$t('home.aboutusSubheader')}</h5>
	<h2 class="text-h2 font-bold text-center">{$t('home.aboutusHeader')}</h2>
	<div class="layout">
		<p class="text-subheader text-black font-bold club">
			<span class="gdsc">Google Developer Student Clubs Thailand</span> (GDSC - Thailand)
		</p>
		<p class="text-subheader text-black font-normal">{$t('home.aboutusBody')}</p>
	</div>
</div>

<style>
	.layout {
		padding: 1rem 6.5rem;
		text-align: center;
	}

	@media screen and (max-width: 760px) {
		.layout {
			padding: 0rem 0rem;
			margin: 20px;
			text-align: justify;
		}
		.club {
			text-align: center;
		}
		.gdsc::after {
			content: '\a';
			white-space: pre;
		}
	}
</style>
