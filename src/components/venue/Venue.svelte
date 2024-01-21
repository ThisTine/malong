<script>
	import { t } from '$lib/translation/translations';
</script>

<div>
	<div class="flex flex-col items-center justify-center mt-14 wrapper">
		<div class="text-center">
			<p class="font-bold text-[#EA4335] text-body2">{$t('home.whereHost')}</p>
			<h2 class="text-h2 font-bold">{$t('home.venue')}</h2>
			<p class="font-bold">{$t('home.thammasat')}</p>
		</div>

		<div class="flex justify-center h-full w-4/5 min-h-[400px] mt-5">
			<div class="flex w-full">
				<iframe
					title="map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.092429012124!2d100.6046122553505!3d14.07171902119926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f69d73d56e7%3A0x5a1cc2df12294899!2sFaculty%20of%20Learning%20Sciences%20and%20Education%2C%20Thammasat%20University!5e0!3m2!1sen!2sth!4v1705834792481!5m2!1sen!2sth"
					allowfullscreen
					referrerpolicy="no-referrer-when-downgrade"
					class="w-full h-full rounded-2xl"
				></iframe>
			</div>
		</div>
	</div>
</div>
