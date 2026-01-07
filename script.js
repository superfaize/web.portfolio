	//Save client marquee position
$(function(){
    var timeOnPage = sessionStorage.getItem("timeOnPage");
    if(typeof timeOnPage !== 'undefined' && timeOnPage !== null){
        var timeOnPage =  parseInt(sessionStorage.getItem("timeOnPage"));
    } else{
        sessionStorage.setItem("timeOnPage", 0);
        var timeOnPage =  parseInt(sessionStorage.getItem("timeOnPage"));
    };
	//Counter
    setInterval(function () {
        ++timeOnPage;
        sessionStorage.setItem("timeOnPage", timeOnPage)
    }, 1000);

	//Calculate total time spent
    (function($){
        $.fn.suchSlideStartManyStopSaveWOW = function () {
            $(this).css("animation-delay",-timeOnPage + "s")
        };
        return this;
    })(jQuery);            

    //Add animation-delay time 
    $("#clientMarquee").suchSlideStartManyStopSaveWOW();
    });


    // HOME CAROUSEL ----------------------------------------

    