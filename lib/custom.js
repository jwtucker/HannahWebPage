var currentPage = 'home';

$(function(){
	$(".bioPage").hide();
	$(".contactPage").hide();
	tabEvents();
	$('input, textarea').placeholder();
});

function tabEvents(){
	$(".homeTab").click(function(){
		if(currentPage !== 'home'){
			hideAll();
			$(".homePage").show();
			currentPage = 'home';
		}
	});

	$(".bioTab").click(function(){
		if(currentPage !== 'bio'){
			hideAll();
			$(".bioPage").show();
			currentPage = 'bio';
		}
	});

	$(".contactTab").click(function(){
		if(currentPage !== 'contact'){
			hideAll();
			$(".contactPage").show();
			currentPage = 'contact';
		}
	});
}

function hideAll(){
	$(".homePage").hide();
	$(".bioPage").hide();
	$(".contactPage").hide();
}