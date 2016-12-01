$(document).ready(function(){
    $("form").submit(function(event) {
        var formData = $(this).serialize();
        $.ajax({
            type     : 'post',
            url      : 'https://web2-product-page.herokuapp.com/subscribers',
            data     : formData,
            dataType : 'json'
        }).done(function(data) {
            console.log(data);
            $("#ty").fadeIn();
            $("input[type=text]").val("");
            $("#ty").delay(5000).fadeOut("slow");
        }).fail(function(data) {
            console.log(data);
            var errorMessage = JSON.parse(data.responseText).email[0];
            $("#fail").text(errorMessage);
            $("#fail").fadeIn()
            $("input[type=text]").val("");
            $("#fail").delay(1000).fadeOut("slow");
        });
        event.preventDefault();    
    });
    
   

    $("#button1").click(function(){
        $('main').scrollTo("#cta", 700, {easing: swing});
    })


//     $("#button1").click(function() {                 i tried using this jquery method that doesnt use a plugin... didnt get it to work either.
//     $('html, body').animate({
//         scrollTop: $("#cta").offset().top
//     }, 1000);
//     return false;
// });
   
});