<script>
	import { t } from '$lib/translation/translations';
</script>

<div class=" flex w-full justify-center flex-col">
	<!-- First Info -->
	<div class="wrapper md:flex max-md:items-center w-full">
		<img alt="info-vector" src="info-vector.png" class="md:hidden w-max h-auto mx-auto" />
		<div class="p-4">
			<div class="flex text-h2 whitespace-nowrap max-lg:text-pretty font-bold">
				{#each [$t('home.info1Title'), $t('home.info1TitleMA'), $t('home.info1TitleL'), $t('home.info1TitleO'), $t('home.info1TitleNG')] as title}
					<p
						class={title === $t('home.info1Title')
							? 'text-black'
							: title === $t('home.info1TitleMA')
								? 'text-blue500 max-lg:hidden max-lg:overflow-hidden ml-2'
								: title === $t('home.info1TitleL')
									? 'text-green500 max-lg:hidden max-lg:overflow-hidden'
									: title === $t('home.info1TitleO')
										? 'text-yellow600 max-lg:hidden max-lg:overflow-hidden'
										: 'text-red500 max-lg:hidden max-lg:overflow-hidden'}
					>
						{title}
					</p>
				{/each}
			</div>
			<div class="lg:hidden text-h2 flex font-bold">
				{#each [$t('home.info1TitleMA'), $t('home.info1TitleL'), $t('home.info1TitleO'), $t('home.info1TitleNG')] as title}
					<p
						class={title === $t('home.info1TitleMA')
							? 'text-blue500'
							: title === $t('home.info1TitleL')
								? 'text-green500'
								: title === $t('home.info1TitleO')
									? 'text-yellow600'
									: 'text-red500'}
					>
						{title}
					</p>
				{/each}
			</div>
			<div class="flex w-[80%] ml-0 justify-start text-start flex-row">
				<p class="text-body1 font-normal inline-block">
					<span class="text-body1 font-bold inline-block">
						{$t('home.info1describeHeader')}
					</span>
					{$t('home.info1describe')}
				</p>
			</div>
		</div>
		<img
			alt="info-vector"
			src="info-vector.png"
			class="max-md:hidden w-max h-max mx-auto my-auto"
		/>
	</div>

	<!-- Another components -->
	<div class="wrapper flex-col justify-items-center pt-5">
		<h2 class="text-h2 font-bold text-center">{$t('home.info2Title')}</h2>
		<div class="wrapper flex flex-col justify-center items-center p-4">
			<div class="md:grid md:grid-cols-2 md:grid-rows-2">
				{#each ["infoSec1.png", "infoSec2.png", "infoSec3.png", "infoSec4.png"] as image, index}
					<div class="flex flex-col max-md:items-center">
						<div
							class={`text-white text-body1 rounded-full h-12 w-12 flex justify-center items-center mb-1 ${
								index === 0
									? 'bg-blue500'
									: index === 1
										? 'bg-green500'
										: index === 2
											? 'bg-yellow600'
											: 'bg-red500'
							}`}
						>
							{index + 1}
						</div>
						<div class="flex items-end h-64">
							<img alt={`infoSec${index + 1}`} src={image} class="w-max h-max mx-auto my-max" />
						</div>
						{#if index === 3}
							<h3
								class="flex text-center text-body1 items-center justify-center p-5 whitespace-nowrap"
							>
								{@html $t(`home.infoSection${index + 1}`)}
							</h3>
						{:else}
							<h3 class="flex text-center text-body1 items-center justify-center p-5">
								{@html $t(`home.infoSection${index + 1}`)}
							</h3>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- footer link -->
	<section class="w-full h-auto p-10 bg-gradient-to-r from-blue-500 to-blue-300 flex">
		<div class="wrapper flex flex-row max-md:flex-col items-center text-white font-bold">
			<div class="flex-1 pr-2 max-lg:text-center md:w-[40%] text-pretty">
				{$t('home.infoFooter1')}
			</div>
			<div class="flex px-auto py-5 mx-auto justify-center items-center">
				<button
					class="text-xl bg-transparent hover:bg-slate-50 text-slate-50 font-bold hover:text-blue-500 border-2 border-slate-50 hover:border-blue-500
					w-[193px] h-[49px] px-8 py-3 rounded-2xl justify-center items-center gap-2.5 inline-flex"
					on:click={() =>
						// Register Link
						window.open('', '_blank')}
				>
					Register Now
				</button>
			</div>
			<div class="flex-1 pl-3 text-center text-pretty">
				<a href="/" class="underline" on:click={() => window.open('/th', '_blank')}
					>{$t('home.infoFooter2')}</a
				>
			</div>
		</div>
	</section>
</div>
