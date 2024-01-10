<script>
	import { t } from '$lib/translation/translations';

</script>

<style>
@media screen and (max-width: 760px) {
 .container{
	display: flex;
	justify-content: center;
}
  }

.layout{
	display: flex;
	flex-direction:row;
	gap: 10px;
}

.box{
	width: 341px;
	height: 200px;
	background: #D9D9D9;
	margin-top: 60px;
}
.link{
		display: flex;
		flex-direction: row;
		margin-top: 20px;
	}
@media screen and (max-width: 760px) {
 .box{
	width: 341px;
	height: 200px;
	background: #D9D9D9;
	margin-top: 20px;
}
 .layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px; 
		margin: 20px;
    }
	.container{
		margin-bottom: 150px;
	}
	.link{
		display: flex;
		flex-direction: column;
		margin-top: 20px;
	}
  }
  
</style>

	<div class="container wrapper flex w-full justify-center flex-col" style="height:100vh">
	<div class="layout" >
	<div  style="display: flex; flex-direction: column;  flex-basis: 33.33%; ">
	<body class="font-bold text-green-500">{$t('home.introsdg')}</body>

	<h1 class="text-h2 font-bold text-black ">{$t('home.titlesdg')}</h1>
	</div>
	<div class="mt-10" style="display: flex; flex-direction: column; flex-basis: 66.66%; max-width: 600px;">
	<body class="text-black font-normal">{$t('home.bodysdg')}</body>
	<div class="link">
	<body class="text-black font-normal" style="margin-right: 10px;" >{$t('home.notesdg')}</body>
	<a href="https://sdgs.un.org/goals" target="_blank" class="text-black font-normal" style="text-decoration: underline;">United Nations SDGs</a>
</div>
</div>
	</div>
	<div class="layout">
	<img class="box" src="sdg.png" alt="sdg"/>
	<div class="box"></div>
	<div class="box"></div>
	</div>
	</div>

