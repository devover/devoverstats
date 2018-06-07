$(document).ready(function() {

	$("#dropdown_1").mouseenter(function(){
		$("#dropdown-menu_1").show();
	});

	$("#dropdown-menu_1").mouseleave(function(){
		$("#dropdown-menu_1").hide();
	});

	$("#mainList").mouseleave(function(){
		$("#dropdown-menu_1").hide();
	});

	$("#dropdown_2").mouseenter(function(){
		$("#dropdown-menu_1").hide();
	});

	$("#dropdown_2").mouseenter(function(){
		$("#dropdown-menu_2").show();
	});

	$("#dropdown-menu_2").mouseleave(function(){
		$("#dropdown-menu_2").hide();
	});

	$("#mainList").mouseleave(function(){
		$("#dropdown-menu_2").hide();
	});

	$("#dropdown_1").mouseenter(function(){
		$("#dropdown-menu_2").hide();
	});

	$(".leave").mouseenter(function(){
		$("#dropdown-menu_1").hide();
		$("#dropdown-menu_2").hide();
	});

    $("#anchor").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $("#menu-box").mouseenter(function(){
		$("#menu-box").addClass("menu-box-hov");
	});

	$("#menu-box").mouseleave(function(){
		$("#menu-box").removeClass("menu-box-hov");
	});

	$("body").mouseenter(function(){
		$("#menu-box").addClass("menu-box-hi");
	});
});
