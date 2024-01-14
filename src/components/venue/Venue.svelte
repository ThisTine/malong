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
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15480.253381654531!2d100.602876!3d14.0734367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fecb1e8d73f%3A0xe114a07c97a9a674!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LiY4Lij4Lij4Lih4Lio4Liy4Liq4LiV4Lij4LmMIOC4qOC4ueC4meC4ouC5jOC4o-C4seC4h-C4quC4tOC4lQ!5e0!3m2!1sth!2sth!4v1705212686557!5m2!1sth!2sth"
						frameborder="0"
						allowfullscreen
						referrerpolicy="no-referrer-when-downgrade"
						class="w-full h-full rounded-2xl"></iframe>
			</div>
		</div>
	</div>
</div>
