 /*사이즈감지*/
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
  $(window).resize();
})
/*풀페이지*/
$(document).ready(function() {
    $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', '3rdPage','4thpage'],
      // sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
      css3: true,
      afterLoad: function(anchorLink, index){
        var header  = $(".pc #header");
        if(index > 1){
           header.addClass("on");
        }else{
           header.removeClass("on");
        }
      }
    });
  });
/*막대그래프*/
$( function() {
  $( "#progressbar1" ).progressbar({
    value: 90
  });
  $( "#progressbar2" ).progressbar({
    value: 75
  });
  $( "#progressbar3" ).progressbar({
    value: 30
  });
  $("#progressbar1 .ui-progressbar-value").text("90%")
  $("#progressbar2 .ui-progressbar-value").text("75%")
  $("#progressbar3 .ui-progressbar-value").text("30%")

});