$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 650);
        return false;
      }
    }
  });

    $(".card").on("click", function(event){
      if($(".expanded").length > 0) return;
      $(".card").removeClass("expanded");
      const card = $(event.target).closest(".card");
      const pos = card.offset();
      pos.top -= $(window).scrollTop();
      card.css(pos);
      card.find(".preview").addClass("hidden");
      card.find(".lnr").removeClass("hidden");
      card.find(".icon").addClass("hidden")
      card.find(".img").addClass("hidden")
      $(".bg-cover").removeClass("hidden");
      setTimeout(function (){
        card.addClass("expanded");
        setTimeout(function (){card.find(".info").removeClass("hidden")}, 250);
      }, 50);
    })

    $(".bg-cover").on("click", function(event){
      $(".bg-cover").addClass("hidden");
      $(".info").addClass("hidden")
      const card = $(".expanded");
      card.removeClass("expanded");
      card.find(".preview").removeClass("hidden");
      card.find(".icon").removeClass("hidden");
      card.find(".img").removeClass("hidden");
      card.find(".lnr").addClass("hidden");
    })

    $(".lnr-cross").on("click", function(event){
      $(event.target).addClass("hidden");
      $(".bg-cover").click();
      event.stopPropagation();
    })
});

$(document).ready(function () {
    $("#home .title > *").removeAttr("class");

    $(document).on("scroll", function (event){
        let scrollPos = $(document).scrollTop();
        let refElement;

        scrollPos += $(window).height()*.4;
        $('li>a').each(function () {
            var currLink = $(this);
            refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('li>a.active').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
        scrollPos += $(window).height()*.2;
        refElement = $("#about");
        if (refElement.position().top <= scrollPos) {
           $("#about .animated").addClass("slide-in");
        }
        scrollPos -= $(window).height()*.3;
        refElement = $("#contact");
        if (refElement.position().top <= scrollPos) {
           $("#contact .animated").addClass("slide-up");
        }


    });
});
