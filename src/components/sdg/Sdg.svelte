<script>
	import { t } from '$lib/translation/translations';
</script>

<div class="container wrapper flex w-full justify-center flex-col min-h-screen">
	<div class="layout">
		<div style="display: flex; flex-direction: column;  flex-basis: 33.33%; ">
			<p class="font-bold text-green-500 text-body1">{$t('home.introsdg')}</p>

			<h1 class="text-h2 font-bold text-black">{$t('home.titlesdg')}</h1>
		</div>
		<div
			class="mt-10"
			style="display: flex; flex-direction: column; flex-basis: 66.66%; max-width: 600px;"
		>
			<p class="text-black font-normal">{$t('home.bodysdg')}</p>
			<div class="link">
				<p class="text-black font-normal" style="margin-right: 10px;">{$t('home.notesdg')}</p>
				<a
					href="https://sdgs.un.org/goals"
					target="_blank"
					class="text-black font-normal"
					style="text-decoration: underline;">United Nations SDGs</a
				>
			</div>
		</div>
	</div>
	<div class="layout">
		<img class="box" src="sdg.png" alt="sdg" />
		<div class="box"></div>
		<div class="box"></div>
	</div>
</div>

<style>
	@media screen and (max-width: 760px) {
		.container {
			display: flex;
			justify-content: center;
		}
	}

	.layout {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}

	.box {
		width: 341px;
		height: 200px;
		background: #d9d9d9;
		margin-top: 60px;
	}
	.link {
		display: flex;
		flex-direction: row;
		margin-top: 20px;
	}
	@media screen and (max-width: 760px) {
		.box {
			width: 341px;
			height: 200px;
			background: #d9d9d9;
			margin-top: 20px;
		}
		.layout {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
			margin: 20px;
		}
		.container {
			margin-bottom: 150px;
		}
		.link {
			display: flex;
			flex-direction: column;
			margin-top: 20px;
		}
	}
</style>
