$(document).ready(function () {
  
    $(window).scroll(function() { 
        
        var Top = $(window).scrollTop();

        var middle = $(window).scrollTop() + ($(window).height())/2;

        SectionOneOffset = $('#about').offset().top, 
        SectionTwoOffset = $('#technology').offset().top, 
        SectionThreeOffset = $('#game').offset().top;
        SectionFourOffset = $('#team').offset().top;


        if (middle >= SectionOneOffset) { 
            $(".menu-item-1").addClass("current-menu-item"); 
        } 

        if (middle >= SectionTwoOffset) { 
            $(".menu-item-2").addClass("current-menu-item"); 
            $(".menu-item-1").removeClass("current-menu-item"); 
        } else { 
            $(".menu-item-2").removeClass("current-menu-item"); 
        }
        if (middle >= SectionThreeOffset) { 
            $(".menu-item-3").addClass("current-menu-item"); 
                    $(".menu-item-2").removeClass("current-menu-item"); 
        } else { 
            $(".menu-item-3").removeClass("current-menu-item"); 
        }

        if (middle >=  SectionFourOffset) { 
            $(".menu-item-4").addClass("current-menu-item"); 
                    $(".menu-item-3").removeClass("current-menu-item"); 
        } else { 
            $(".menu-item-4").removeClass("current-menu-item"); 
        }

        if ($(window).scrollTop() + $(window).height() == $(document).height() ){ 
            $(".menu-item-4").addClass("current-menu-item");
                    $(".menu-item-3").removeClass("current-menu-item");
         }
         }) 
})
        
