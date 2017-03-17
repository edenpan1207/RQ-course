$(document).ready(function() {
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    var the_terms = $("#checkbox-submit");
    the_terms.click(function() {
        if ($(this).is(":checked")) {
            $("#submit").removeAttr("disabled").css('opacity','1');
        } else {
            $("#submit").attr("disabled", "disabled").css('opacity','0.5');
        }
    });
});
