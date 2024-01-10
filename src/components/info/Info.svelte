<script>
	import { t } from '$lib/translation/translations';
	import infoVector1 from '$lib/image/info-vector.png';
</script>

<div class="wrapper flex w-full justify-center flex-col">
	<div class="md:flex max-md:items-center w-full">
		<img alt="info-vector" src={infoVector1} class="md:hidden w-max h-auto mx-auto" />
		<div class="p-4">
			<div
				class="flex text-h2 whitespace-nowrap max-lg:whitespace-normal max-lg:text-pretty font-bold"
			>
				{#each [$t('home.info1Title'), $t('home.info1TitleMA'), $t('home.info1TitleL'), $t('home.info1TitleO'), $t('home.info1TitleNG')] as title, index}
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
		<img alt="info-vector" src={infoVector1} class="max-md:hidden w-max h-max mx-auto my-auto" />
	</div>

	<!-- Another components -->
	<div class="wrapper flex-col justify-items-center pt-5">
		<h2 class="text-h2 font-bold text-center">{$t('home.info2Title')}</h2>
	
	</div>
</div>
