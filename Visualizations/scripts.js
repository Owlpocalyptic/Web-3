var titleClicked = false;

$("div#header").mouseenter(function() {
        $("#main-body").css("background-image", "url(images/crouching-waluigi.png)");
        $("#main-body").css("text-align", "right");
        $("#main-body").css("font-size", "26pt");
        $("#main-body").text("A WILD WALUIGI LURKS");
    })
    .mouseleave(function() {
        if (!titleClicked)
        {
            $("#main-body").css("background-image", "none");
            $("#main-body").text("");
            $("#main-body").css("text-align", "left"); 
        }
    });


    $("div#header h1").mouseover(function() {
        if (!titleClicked) {
            $(this).css("color", "black");
            $(this).css("text-decoration", "underline");
        }
        else {
            $(this).css("color", "white");
            $(this).css("text-decoration", "none");
        }
    })
    .mouseout(function() {
        if (!titleClicked) {
            $(this).css("color", "white");
            $(this).css("text-decoration", "none");
        }
        else {
            $(this).css("color", "black");
            $(this).css("text-decoration", "underline");
        }
    })
    .mousedown(function() {
        titleClicked = !titleClicked;
        console.log(titleClicked);
    })