<script>
	import { t } from '$lib/translation/translations';
</script>

<div class="p-6 lg:p-0 wrapper">
	<div class="flex justify-center layout">
		<div class="text-center" style="display: flex; flex-direction: column; max-width: 520px;">
			<p class="font-bold text-[#F9AB00] text-body2">{$t('home.compet')}</p>
			<h2 class="text-h2 font-bold">{$t('home.cite')}</h2>
		</div>
	</div>

	<div class="flex md:flex-row flex-col gap-4 md:gap-0 my-8 justify-evenly items-center">
		<div class="flex flex-row gap-4 justify-center items-center">
			<div
				class="border rounded-full bg-blue-500 w-10 h-10 flex justify-center items-center text-white"
			>
				1
			</div>
			<div class="flex-col">
				<div class="font-bold">{$t('home.round')} 1</div>
				<p class="text-body">{$t('home.timeline0Date')}</p>
			</div>
		</div>

		<img class=" hidden md:flex" src="arrow.svg" alt="" />

		<div class="flex flex-row gap-4 justify-center items-center">
			<div
				class="border rounded-full bg-[#5F6368] w-10 h-10 flex justify-center items-center text-white"
			>
				2
			</div>
			<div class="flex-col">
				<div class="font-bold">{$t('home.round')} 2</div>
				<p class="text-body">{$t('home.timeline3Date')}</p>
			</div>
		</div>
	</div>

	<div class="flex flex-col md:flex-row gap-8 items-center justify-evenly">
		<div class="flex-col">
			<div
				class=" md:w-96 p-6 rounded-2xl box border border-gray-100 flex-col justify-start items-start gap-4 inline-flex"
			>
				<div class="font-bold">
					{$t('home.round1')}
				</div>
				<div class="text-black text-body md:w-64 prose">
					<ul class="list-disc space-y-2 px-5">
						<li class="bullet">{$t('home.citeriaFirstRound1')}</li>
						<li class="bullet">{$t('home.citeriaFirstRound2')}</li>
						<li class="bullet">{$t('home.citeriaFirstRound1')}</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="flex-col">
			<div
				class="w-full md:w-96 p-6 rounded-2xl box border border-gray-100 flex-col justify-start items-start gap-4 inline-flex"
			>
				<div class="self-stretch text-black text-subheader font-bold">
					{$t('home.round2')}
				</div>
				<div class="text-black text-body md:w-64 prose">
					<ul class="list-disc space-y-2 px-5">
						<li class="bullet">{$t('home.citeriaSecondRound1')}</li>
						<li class="bullet">{$t('home.citeriaSecondRound2')}</li>
						<li class="bullet">{$t('home.citeriaSecondRound3')}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.layout {
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.bullet {
		padding-left: 10px;
		padding-right: 10px;
	}

	.box {
		box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
	}
</style>
