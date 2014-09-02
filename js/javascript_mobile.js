$(document).ready(function() {
	// Start Actions //
	$("#topbar_dropdown_items").css('height', $(window).height()-50);
	$("#topbar_dropdown_items").hide();
	// $(".topbar").show();

	// TopBar Actions //
	$('#topbar_dropdown').on("click", function(e){
		if($("#topbar_dropdown_items").is(":visible")){
			$("#topbar_dropdown_items").hide();
		} 
		else{
			$("#topbar").removeClass('absolute').addClass('fixed');
			$("#topbar_dropdown_items").show();
		}
	});
	$('.topbar_item').on("click", function(e){
		var findID = "#"+$(this).attr('id').replace('_topbar','');
		$("#topbar_dropdown_items").hide();
		if(findID==="#About"){
			$(window).scrollTop($(findID).offset().top);
		}
		else{
			$(window).scrollTop($(findID).offset().top-50);
		}
	});

});