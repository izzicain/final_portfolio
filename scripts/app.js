<script src="https://code.jquery.com/jquery.min.js"></script>
    <script>
      $.get("navbar/navbar.html", function(data){
        $(".menu").replaceWith(data);
      });
    </script>