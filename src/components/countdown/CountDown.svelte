<script lang="ts">
	import { onMount } from "svelte";
	import { t, locale } from '$lib/translation/translations';

	let endDate = new Date("2024-02-10T00:00:00");
	let days = 0,
	  hours = 0,
	  minutes = 0,
	  seconds = 0;
  
	function updateCountdown() {
	  let now = new Date();
	  let timeDifference = endDate.getTime() - now.getTime();
  
	  if (timeDifference > 0) {
		days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
		hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
	  } else {
		days = hours = minutes = seconds = 0;
	  }
	}

	function formatTime(value: number, unit: string) {
    if ($locale === 'en') {
      return `${unit}${value === 1 || value === 0 ? '' : 's'}`;
    } else {
      return `${unit}`;
    }
  }
  
	onMount(() => {
	  updateCountdown();
	  const countdownInterval = setInterval(updateCountdown, 1000);
  
	  return () => {
		clearInterval(countdownInterval);
	  };
	});
</script>

<div>
	<div class="flex flex-col items-center justify-center my-10 text-black">
		<h1 class="text-[#EA4335] text-[1rem]">{$t('home.deadline')}</h1>
		<div class="relative">
			<h1 class="font-bold max-sm:w-[20rem] text-[2.5rem] text-black text-pretty text-center">{$t('home.seeu')}</h1>
			<img class="absolute top-[80%] left-[90%] sm:top-[60%] sm:left-[105%] " src="soft.svg" alt="star" />
			<img class="absolute top-[70%] left-[98%] sm:top-[40%] sm:left-[113%] " src="yellow.svg" alt="star" />
		</div>
		<div class="flex flex-row max-md:gap-6 gap-12 pt-10">
			<div class="flex flex-col justify-center items-center">
				<h1 class="text-[2.5rem]">{days}</h1>
				<div class="text-[1rem]">{formatTime(seconds, $t('home.day'))}</div>
			</div>
			<div class="border-2 border-[#4285F4]"></div>
			<div class="flex flex-col justify-center items-center">
				<h1 class="text-[2.5rem]">{hours}</h1>
				<div class="text-[1rem]">{formatTime(seconds, $t('home.hour'))}</div>
			</div>
			<div class="border-2 border-[#34A853]"></div>
			<div class="flex flex-col justify-center items-center">
				<h1 class="text-[2.5rem]">{minutes}</h1>
				<div class="text-[1rem]">{formatTime(seconds, $t('home.minute'))}</div>
			</div>
			<div class="border-2 border-[#F9AB00]"></div>
			<div class="flex flex-col justify-center items-center">
				<h1 class="text-[2.5rem]">{seconds}</h1>
				<div class="text-[1rem]">{formatTime(seconds, $t('home.second'))}</div>
			</div>
		</div>
	</div>
</div>
