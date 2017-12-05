$(document).ready(function(){
    var randomQuote,randomAuthor;
    $("#btn").on('click',function(){
       $.ajaxSetup({cache:false});
      $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=",function(data){
 
  $(".text").html(data[0].content);
 randomQuote=  $(".text").text();
 $(".author").html("-"+data[0].title);
randomAuthor= $(".author").text(); 
  $("#tweet").on("click", function () {
                    window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " " + "--" + randomAuthor);
                });
  });
  });
});