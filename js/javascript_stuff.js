var self_collapsed = false;
var self_expanded = false;
var content_locations = [];
var content_index = 0;

$(document).ready(function() {
	//On Load Prep
	if($("#sidebar").height()<($(window).height()-50)){
		$("#topbar").hide();
	}
	else{
		$("#sidebar").hide();
		$("#sidebar_collapse").hide();
	}
	
	// var height;
	// $('.content_section').each(function(item){
	// 	content_locations.push($(this).offset().top);
	// });

	//On User Changing Things
	$(document).scroll(function(){
		var current;
		if($("#topbar").is(":visible")){
			current = $("#topbar").offset().top;
		}
		else if($("#sidebar_collapse").hasClass("collapse")){
			current = ($("#sidebar_collapse").offset().top)-180;
		}
		else{
			current = $("#sidebar").offset().top;
		}
		if(($("#intro_flip").position().top+70) > $(window).scrollTop()){
			$('#sidebar').removeClass('fixed').addClass('absolute');
			$('#sidebar_collapse').removeClass('fixed').addClass('absolute');
			$("#topbar").removeClass('fixed').addClass('absolute');
		}
		else if(current < $(window).scrollTop()){
			$('#sidebar').removeClass('absolute').addClass('fixed');;
			$('#sidebar_collapse').removeClass('absolute').addClass('fixed');;
			$("#topbar").removeClass('absolute').addClass('fixed');;
		}

		// if(content_index<0){

		// }
		// else if(content_index<content_locations.length){
		// 	//Going Down the Page
		// 	if(content_locations[content_index] < $(window).scrollTop()){
		// 		tempID = '#'+$('.sidebar_item')[content_index].id;
		// 		$(tempID).css({"background-color": "transparent)"});
		// 		content_index++;
		// 		tempID = '#'+$('.sidebar_item')[content_index].id;
		// 		$(tempID).css({"background-color": "rgb(254,194,2)"});
		// 	}
		// 	//Going Up the Page
		// 	else if(content_locations[content_index] > $(window).scrollTop()){
		// 		tempID = '#'+$('.sidebar_item')[content_index+2].id;
		// 		$(tempID).css({"background-color": "transparent"});
		// 		content_index--;
		// 		tempID = '#'+$('.sidebar_item')[content_index+2].id;
		// 		$(tempID).css({"background-color": "rgb(254,194,2)"});
		// 	}
		// }


	});
	$(window).resize(function(){
		if($("#sidebar").height()>=($(window).height()-50)){
			if($("#sidebar_collapse").is(":visible")){
				$("#sidebar").hide();
				$("#sidebar_collapse").hide();
				$("#topbar").show();
				if($("#sidebar_collapse").hasClass('collapse')){
					$("#sidebar_collapse").removeClass('collapse').addClass('expand');
				}
			}
		}
		else if($("#sidebar").height()<$(window).height()){
			if($("#topbar").is(":visible")){
				$("#topbar").hide();
				$("#sidebar").show();
				$("#sidebar_collapse").show();
			}
			if($("#sidebar").offset().top < $(window).scrollTop()){
				$('#sidebar').removeClass('absolute').addClass('fixed');
				$('#sidebar_collapse').removeClass('absolute').addClass('fixed');
				$("#topbar").removeClass('absolute').addClass('fixed');
			}
			else if(($("#intro_flip").offset().top+70) > $("#sidebar").offset().top){
				$('#sidebar').removeClass('fixed').addClass('absolute');
				$('#sidebar_collapse').removeClass('fixed').addClass('absolute');
				$("#topbar").removeClass('fixed').addClass('absolute');
			}
			if($(window).width()>700 && !self_collapsed && self_expanded){
				self_expanded = false;
			}
			if($(window).width()<700 && $('#sidebar_collapse').hasClass("expand") && !self_expanded){
				$('#sidebar_collapse').trigger("click");
			}
			else if($(window).width()>700 && $('#sidebar_collapse').hasClass("collapse") && !self_collapsed){
				$('#sidebar_collapse').trigger("click");
			}
		}
	});
	//Sidebar Collapsing
	$('#sidebar_collapse').on("click", function(e){
		var current = $('#sidebar_collapse');
		if(current.hasClass("expand")){
			current.removeClass("expand");
			current.addClass("collapse");
			$("#sidebar").hide();
			current.text(">");
			self_expanded = false;
			if(e.originalEvent!==undefined){
				self_collapsed = true;
			}
		}
		else{
			current.removeClass("collapse");
			current.addClass("expand");
			$("#sidebar").show();
			current.text("<");
			self_collapsed = false;
			if(e.originalEvent!==undefined){
				self_expanded = true;
			}
		}
	});
	// Route Section Links
	$('.sidebar_item').on("click", function(e){
		if($(this).parent().hasClass('side_bar')){
			var findID = "#"+$(this).attr('id').replace('_sidebar','');
			$(window).scrollTop($(findID).offset().top);
		}
	});

	//Hover over Section Title, text change
	$(function(){
		var prev;
		$('#About_header').hover(function(){
			if($(this).filter(':animated').length<1){
				prev = $(this).text();
			}
			var newText = "Learn A Little About Me";;

			$(this).fadeOut(function(){
				$(this).text(newText).fadeIn();
			});

	  	}, function(){
	  		$(this).fadeOut(function(){
	     		$(this).text(prev).fadeIn();
	     	});
		});
	})
	$(function(){
		var prev;
		$('#Experiences_header').hover(function(){
			if($(this).filter(':animated').length<1){
				prev = $(this).text();
			}
		 	var newText = "Cool Things I've Done";

			$(this).fadeOut(function(){
				$(this).text(newText).fadeIn();
			});

	  	}, function(){
	  		$(this).fadeOut(function(){
	     		$(this).text(prev).fadeIn();
	     	});
		});
	})
	$(function(){
		var prev;
		$('#Skills_header').hover(function(){
			if($(this).filter(':animated').length<1){
				prev = $(this).text();
			}
		 	var newText = "AKA - Stuff I'm Good At";
			$(this).fadeOut(function(){
				$(this).text(newText).fadeIn();
			});

	  	}, function(){
	  		$(this).fadeOut(function(){
	     		$(this).text(prev).fadeIn();
	     	});
		});
	})
	$(function(){
		var prev;
		$('#Interests_header').hover(function(){
			if($(this).filter(':animated').length<1){
				prev = $(this).text();
			}
		 	var newText = "Things I Like";
			$(this).fadeOut(function(){
				$(this).text(newText).fadeIn();
			});

	  	}, function(){
	  		$(this).fadeOut(function(){
	     		$(this).text(prev).fadeIn();
	     	});
		});
	})
	$(function(){
		var prev;
		$('#Contact_header').hover(function(){
			if($(this).filter(':animated').length<1){
				prev = $(this).text();
			}
		 	var newText = "I Don't Bite";
			$(this).fadeOut(function(){
				$(this).text(newText).fadeIn();
			});

	  	}, function(){
	  		$(this).fadeOut(function(){
	     		$(this).text(prev).fadeIn();
	     	});
		});
	})
});
