$(function(){
    
var titleClicked = false;
var holding = false;
var OPACITY_INTERVAL = 0.1

$("div#header").mouseenter(function() {
        var $mbody = $("#main-body");
        $mbody.css("background-image", "url(images/crouching-waluigi.png)");
        $mbody.css("text-align", "right");
        $mbody.css("font-size", "26pt");
        $mbody.text("A WILD WALUIGI LURKS");
    })
    .mouseleave(function() {
        var $mbody = $("#main-body");
        if (!titleClicked)
        {
            $mbody.css("background-image", "none");
            $mbody.text("");
            $mbody.css("text-align", "left"); 
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
            console.log(cOpacity);
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
        $element.find("h1").css("color", "black");
        $element.find("h1").css("text-decoration", "underline");
    }

    function goWhite($element) {
        $element.find("h1").css("color", "white");
        $element.find("h1").css("text-decoration", "none");
    }

    function waluigiActivated($element) {
        $element.text("HE WILL EAT YOUR FAMILY");
    }

    function waluigiDeactivated($element) {
        $element.text("A WILD WALUIGI LURKS");
    }
});