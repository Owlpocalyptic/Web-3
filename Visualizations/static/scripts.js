$(function(){
    
var titleClicked = false;
var holding = false;
var OPACITY_INTERVAL = 0.1
var className = "waluigi";

$("div#header").mouseenter(function() {
        var $mbody = $("#main-body");
        console.log(className);
        $mbody.text("A WILD WALUIGI LURKS");
        $mbody.addClass(className);
    })
    .mouseleave(function() {
        var $mbody = $("#main-body");
        if (!titleClicked)
        {
            $mbody.text("");
            $mbody.removeClass(className);
        }
    });


    $("div#header").mouseover(function() {
        var $el = $(this);
        (!titleClicked) ? goBlack($el) : goWhite($el);
    })
    .mouseout(function() {
        var $el = $(this);
        (!titleClicked) ? goWhite($el) : goBlack($el);
    })
    .mousedown(function() {
        titleClicked = !titleClicked;
    })

    $("div#main-body").mouseover(function() {
        var $el = $(this);
        (titleClicked) ? waluigiActivated($el) : "";
    })
    .mouseout(function() {
        var $el = $(this);
        (titleClicked) ? waluigiDeactivated($el) : "";
    })
    .mousedown(function() {
        var $waluigis = $(".advancing-waluigi");
        holding = true;
        var cOpacity = parseInt($waluigis.css("opacity"));
        do
        {
            if (holding)
            {
            cOpacity += OPACITY_INTERVAL
            $waluigis.fadeTo((100 * OPACITY_INTERVAL), cOpacity);
            }
        } while (holding && cOpacity < 1)
    })
    .mouseup(function() {
        var $waluigis = $(".advancing-waluigi");
        holding = false;
        var cOpacity = parseInt($waluigis.css("opacity"));
        do
        {
            if (!holding)
            {
                cOpacity -= OPACITY_INTERVAL
                $waluigis.fadeTo((100 * OPACITY_INTERVAL), cOpacity);
            }
        } while (!holding && cOpacity > 0)
    })

    function goBlack($element) {
        $element.find("h1").addClass("hover-title");
    }

    function goWhite($element) {
        $element.find("h1").removeClass("hover-title");
    }

    function waluigiActivated($element) {
        $element.text("HE WILL EAT YOUR FAMILY");
    }

    function waluigiDeactivated($element) {
        $element.text("A WILD WALUIGI LURKS");
    }
});