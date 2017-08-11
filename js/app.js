 $(document).ready(function(){
      $('.carousel').carousel({
            dist:0,
            shift:0,
            padding:20,
            indicators:true,
            dist:0,
      });

    });

$.get("navbar.html", function(data){
    $("#sidebar").replaceWith(data);
});