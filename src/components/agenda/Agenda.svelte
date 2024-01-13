<script>
	import { t } from '$lib/translation/translations';
</script>

<div class="container wrapper flex flex-col justify-center items-center mt-10 mb-10">
	<div class="text-subheader font-bold text-blue-500">{$t('home.scheduleAgenda')}</div>
	<h1 class="text-h2 font-bold mb-8">{$t('home.titleAgenda')}</h1>
	<div class="max-w-350 flex-col justify-center items-start gap-8 inline-flex position-relative">
		<div class="vertical-line"></div>

		<div class=" gap-16 inline-flex">
			<div class="justify-center items-center gap-8 flex">
				<div class="dot-container">
					<div class="w-4 h-4 bg-blue-500 rounded-full"></div>
				</div>
				<div class="text-black text-body">{$t('home.agendaListTime1')}</div>
			</div>
			<div class="text-black text-body">{$t('home.scheduleAgenda1')}</div>
		</div>

		<div class=" gap-16 inline-flex">
			<div class="justify-center items-center gap-8 flex position-relative">
				<div class="w-4 h-4 bg-blue-500 rounded-full"></div>
				<div class="text-black text-body">{$t('home.agendaListTime2')}</div>
			</div>
			<div class="text-black text-body">{$t('home.scheduleAgenda2')}</div>
		</div>
		<div class=" gap-16 inline-flex">
			<div class="justify-center items-center gap-8 flex">
				<div class="w-4 h-4 bg-blue-500 rounded-full"></div>
				<div class="text-black text-body">{$t('home.agendaListTime3')}</div>
			</div>
			<div class="text-black text-body">{$t('home.scheduleAgenda3')}</div>
		</div>
		<div class="gap-16 inline-flex">
			<div class="justify-center items-center gap-8 flex">
				<div class="w-4 h-4 bg-blue-500 rounded-full"></div>
				<div class="text-black text-body">{$t('home.agendaListTime4')}</div>
			</div>
			<div class="text-black text-body">{$t('home.scheduleAgenda4')}</div>
		</div>
	</div>
</div>

<style>
	.position-relative {
		position: relative;
	}

	.vertical-line {
		position: absolute;
		height: 90%;
		width: 3px;
		background-color: #4285f4;
		left: 2.6%;
		transform: translateX(-50%);
	}
</style>
