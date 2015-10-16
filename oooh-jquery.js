$(document).ready(function(){

	$('#avatar').hover(function(){
		$('#dropdown-menu').slideDown();
		$('#dropdown-menu').addClass("active-menu")
	})

	$('#dropdown-menu').mouseleave(function(){
		$('#dropdown-menu').slideUp();
		$('#dropdown-menu').removeClass("active-menu")
	})

	$('#media-list').click(function(){
		alert("Sorry, these are fake!");
	})

	$('#patreonize-me').click(function(){
		window.open("mailto:harveydngo@gmail.com")
	})

	$('#toggle-milestones-btn').click(function(){
		if($('#past-milestones').css('display') == 'block'){
			$('#past-milestones').slideUp();
			return
		}
		$('#past-milestones').slideDown();
	})

	$('#curious-george-you-is').submit(function(){
		alert("You should just call or email me!");
		$(this).children()[0].value = '';
	})

})
