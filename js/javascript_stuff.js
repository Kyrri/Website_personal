var self_collapsed = false;
var self_expanded = false;
var lockedScroll_position = [];

$(document).ready(function() {
	//On Load Prep
	if($("#sidebar").height()<($(window).height()-120)){
		$("#sidebar").show();
		$("#sidebar_collapse").show();
	}
	else{
		$("#topbar").show();
		$("#About_header").css("padding-top", "50px");
	}
	$("#topbar_dropdown_items").hide();
	var html = $('html'),
        H = html.outerHeight(true),
        S = $(window).scrollTop(),
        P = S/H;

	$(".experience_dropdown").hide();
	$(".interest_dropdown").hide();
	$(".project_items").hide();
	$("#topbar_dropdown_items").css('height', $(window).height()-50);
	if($(window).width()<900){
		$(".thirdimg").removeClass("thirdimg").addClass("half_profile");
		$(".third_filter").removeClass("third").addClass("half_fromthird");
		$(".right").css("width","85%");
		$(".half").css("width","100%");
		$(".half").css("text-align","center");
		$('table').find('td').unwrap().wrap($('<tr/>'));
	}
		 
	//On User Changing Things
	$(document).scroll(function(){
		S = $(window).scrollTop();
	    P = S/H;

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
			$('#background').removeClass('fixed').addClass('absolute');
			$('#sidebar').removeClass('fixed').addClass('absolute');
			$('#sidebar_collapse').removeClass('fixed').addClass('absolute');
			if($("#topbar_dropdown_items").is(":hidden")){
				$("#topbar").removeClass('fixed').addClass('absolute');
			}
		}
		else if(current < $(window).scrollTop()){
			$('#background').removeClass('absolute').addClass('fixed');
			$('#sidebar').removeClass('absolute').addClass('fixed');
			$('#sidebar_collapse').removeClass('absolute').addClass('fixed');
			if($("#topbar_dropdown_items").is(":hidden")){
				$("#topbar").removeClass('absolute').addClass('fixed');
			}
		}

	if($("#Contact").offset().top-50<=$(window).scrollTop() || ($(window).scrollTop() + $(window).height() == $(document).height())){
		$('.current').removeClass('current');
		$("#Contact_sidebar").addClass("current");
	}
	else if($("#Interests").offset().top-50<=$(window).scrollTop()){
		$('.current').removeClass('current');
		$("#Interests_sidebar").addClass("current");
	}
	else if($("#Skills").offset().top-50<=$(window).scrollTop()){
		$('.current').removeClass('current');
		$("#Skills_sidebar").addClass("current");
	}
	else if($("#Experiences").offset().top-50<=$(window).scrollTop()){
		$('.current').removeClass('current');
		$("#Experiences_sidebar").addClass("current");
	}
	else if($("#About").offset().top-50>$(window).scrollTop()){
		$('.current').removeClass('current');
	}
	else if($("#About").offset().top-50<=$(window).scrollTop()){
		$('.current').removeClass('current');
		$("#About_sidebar").addClass("current");
	}

	});
	$(window).resize(function(){
		if($("#sidebar").height()>=($(window).height()-120)){
			if($("#sidebar_collapse").is(":visible")){
				$("#sidebar").hide();
				$("#sidebar_collapse").hide();
				$("#About_header").css("padding-top", "50px");
				$("#topbar").show();
				if($("#sidebar_collapse").hasClass('collapse')){
					$("#sidebar_collapse").removeClass('collapse').addClass('expand');
				}
			}
		}
		else if($("#sidebar").height()<$(window).height()){
			if($("#topbar").is(":visible") && $("#topbar_dropdown_items").is(":hidden")){
				$("#topbar").hide();
				$("#About_header").css("padding-top", "0px");
				$("#sidebar").show();
				$("#sidebar_collapse").show();
			}
			if($("#sidebar").offset().top < $(window).scrollTop() && $("#topbar_dropdown_items").is(":hidden")){
				$('#background').removeClass('absolute').addClass('fixed');
				$('#sidebar').removeClass('absolute').addClass('fixed');
				$('#sidebar_collapse').removeClass('absolute').addClass('fixed');
				$("#topbar").removeClass('absolute').addClass('fixed');
			}
			else if(($("#intro_flip").offset().top+70) > $("#sidebar").offset().top && $("#topbar_dropdown_items").is(":hidden")){
				$('#background').removeClass('fixed').addClass('absolute');
				$('#sidebar').removeClass('fixed').addClass('absolute');
				$('#sidebar_collapse').removeClass('fixed').addClass('absolute');
				$("#topbar").removeClass('fixed').addClass('absolute');
			}
			if($(window).width()>700 && !self_collapsed && self_expanded){
				self_expanded = false;
			}
			if($(window).width()<900 && $(".thirdimg")[0]){
				$(".thirdimg").removeClass("thirdimg").addClass("half_profile");
				$(".third_filter").removeClass("third").addClass("half_fromthird");
				$(".right").css("width","85%");
				$(".half").css("width","100%");
				$(".half").css("text-align","center");
				$('table').find('td').unwrap().wrap($('<tr/>'));
			}
			else if($(window).width()>900 && $(".half_profile")[0]){
				$(".half_profile").removeClass("half_profile").addClass("thirdimg");
				$(".third_filter").removeClass("half_fromthird").addClass("third");
				$(".right").css("width","38%");
				$(".half").css("width","55%");
				$(".half").css("text-align","");
			}
			if($(window).width()<700 && $('#sidebar_collapse').hasClass("expand") && !self_expanded){
				$('#sidebar_collapse').trigger("click");
				$(".body_container").css("padding","30px");
			}
			else if($(window).width()>700 && $('#sidebar_collapse').hasClass("collapse") && !self_collapsed){
				$('#sidebar_collapse').trigger("click");
				$(".body_container").css("padding","30px 128px");
			}
		}
		H = html.outerHeight(true);
	    $(window).scrollTop(P*H);
	    $("#topbar_dropdown_items").css('height', $(window).height()-50);
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
	$('.sidebar_item').on("click", function(e){
		if($(this).parent().hasClass('side_bar')){
			var findID = "#"+$(this).attr('id').replace('_sidebar','');
			$(window).scrollTop($(findID).offset().top);
		}
	});
	$('.experience_item').on("click",function(e){
		var newID = '#'+$(this).attr('id')+'_experience';
		if($(newID).is(':visible')){
			$(newID).hide();
		}
		else{
			$(newID).show();
		}
	});
	$('.skill_item').on("click",function(e){
		var newID = '#'+$(this).attr('id')+'_skill';
		if($(newID).is(':visible')){
			$(newID).hide();
		}
		else{
			$(newID).show();
		}
	});
	$('.interest_item').on("click",function(e){
		var newID = '#'+$(this).attr('id')+'_interest';
		if($(newID).is(':visible')){
			$(newID).hide();
		}
		else{
			$(newID).show();
		}
	});
	$('.custom_project').on("click",function(e){
		var newID = '#'+$(this).attr('id')+'_project';
		lockedScroll_position =[
			$(document).scrollLeft(),
	        $(document).scrollTop()
		];
		var html = $('html'); // it would make more sense to apply this to body, but IE7 won't have that
        html.data('previous-overflow', html.css('overflow'));
        html.css('overflow', 'hidden');
        window.scrollTo(lockedScroll_position[0], lockedScroll_position[1]);
        $(newID).show("slide");
  
	    $(".carousel").jCarouselLite({
	        btnNext: ".next",
	        btnPrev: ".prev",
	        visible: ~~(($(window).width()-100)/200)
	    });
	});
	$('.close_window').on("click",function(e){
		var html = $('html');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(lockedScroll_position[0], lockedScroll_position[1])
		$('.this_project').hide("slide");
	});
	$('.back_to_top').on("click",function(e){
        $('.this_project').animate({ scrollTop: 0 }, "slow");;
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
		 	var newText = "Stuff I'm Good At";
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
	$('#topbar_dropdown').on("click", function(e){
		if($("#topbar_dropdown_items").is(":visible")){
			if(($("#intro_flip").position().top+70) > $(window).scrollTop()){
				$("#topbar").removeClass('fixed').addClass('absolute');
			}
			$("#topbar_dropdown_items").hide();
		} 
		else{
			$("#topbar").removeClass('absolute').addClass('fixed');
			$("#topbar_dropdown_items").show();
		}
	});
});
