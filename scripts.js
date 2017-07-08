$(document).ready(function(){
    $(".container").load("testing.html");
});

$("ul.navbar-nav li").each(function() {
    $(this).on("click", function(){
        $(".container").load(($this).attr("data-page")+".html");
    });
});
