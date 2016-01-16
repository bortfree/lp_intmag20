$(document).ready(function() {







        $('.countdown').downCount({
        	date: '01/25/2016 09:00:00',
        	offset: +4
        }, function () {
        	$('#timer, #timer1').css('display', 'none');
        });


        $(".popup").magnificPopup();

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// Set options
	 var options = {
	 	offset: '#showHere',
	 	offsetSide: 'top',
	 	classes: {
	 		clone:   'banner--clone',
	 		stick:   'banner--stick',
	 		unstick: 'banner--unstick'
	 	}
	 };

        // Initialise with options
        var banner = new Headhesive('.banner', options);

        // Headhesive destroy
        // banner.destroy();
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
