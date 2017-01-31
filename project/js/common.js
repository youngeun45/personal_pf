 $(window).on("resize",function(){
      var b = $("body") 
      var w = $(window).width();
      if(w >= 1024){
        b.attr("class","");
        b.addClass("pc");
        }else if(w>=640 && w < 1024){
        b.attr("class","");
        b.addClass("tablet");
      }else{
        b.attr("class","");
        b.addClass("mobile");
     }
   })
$(function(){
      $(window).on("scroll",function(){
        var scT = $(this).scrollTop();
        console.log(scT);
        var header  = $(".pc #header");
        if($(window).scrollTop() >= 50 ){
          header.addClass("on");
        } else{
          header.removeClass();
          header.css({marginTop: + 0 + "px"});
        }
      });
$(window).resize();

})
