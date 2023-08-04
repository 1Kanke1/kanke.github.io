
$(document).ready(function() {
	$("a.scrollTop").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + -85 + "px"
		}, {
			duration: 1500,
			easing: "swing"
		});
		return false;
	});
});