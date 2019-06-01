$(".nav").children("li").mouseover(function(){
    
    $(this).children("ul").stop().slideDown(500);
})
$(".nav").children("li").mouseout(function(){
    $(this).children("ul").stop().slideUp(500);
})

