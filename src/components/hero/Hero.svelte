<script>
	import { t } from '$lib/translation/translations';

</script>

<style>
.layoutbody{
@media only screen and (max-width: 680px) {
		margin: 20px;
		padding-top: 20px;
		
	}
	margin-left: 200px;
	padding-top:150px ;

}

.styleButton{
border-radius: 16px;
background: linear-gradient(90deg, #4285F4 29.69%, #8AB4F8 100%);width: 200px;
padding: 15px;
margin-top: 16px;
text-decoration: none;
display: inline-block; 
text-align: center;
}
</style>
<div >
	<div style="background-image: url('/background.png'); height:100vh; background-size: cover;">
	<div class="layoutbody"style="display: flex; flex-direction: column; max-width:420px;">
	<body class="font-bold text-yellow-500">{$t('home.intro')}</body>
	<h1 class="text-header font-bold text-black ">{$t('home.title')}</h1>
	<body class="text-black font-normal">{$t('home.body')}</body>
	<a href="" target="_blank" class="styleButton text-white font-normal">
                {$t('home.regis')}
            </a>
	</div>
	</div>
</div>
