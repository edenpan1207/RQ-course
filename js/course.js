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

    $('#course').on('change', function(){
    var val = $(this).val(); // 將下拉式的值，存起來
    $('[data-coach]').show(); // 先將列表全部顯示
    $.each($('[data-coach]'), function(){  // 處理全部有 data-course 的物件
      console.log($(this));  // 列出來有哪些
      if ($(this).data('coach') !== val) {  // 如果和下拉式的選單不同
          $(this).parents().parents().parents().hide();  // 就隱藏
      } else {
         $(this).parents().show();
      }
    });
  });
  
  
  $('#coach').on('change', function(){
    var val = $(this).val(); // 將下拉式的值，存起來
    $('[data-coach]').show(); // 先將列表全部顯示
    $.each($('[data-coach]'), function(){  // 處理全部有 data-course 的物件
      console.log($(this));  // 列出來有哪些
      if ($(this).data('coach') !== val) {  // 如果和下拉式的選單不同
          $(this).parent().parent().hide();  // 就隱藏
      } else {
         $(this).parents().show();
      }
    });
  });
  
  
  $('#time').on('change', function(){
    var val = $(this).val(); // 將下拉式的值，存起來
    $('[data-time]').show(); // 先將列表全部顯示
    $.each($('[data-time]'), function(){  // 處理全部有 data-course 的物件
      console.log($(this));  // 列出來有哪些
      if ($(this).data('time') !== val) {  // 如果和下拉式的選單不同
          $(this).parent().hide();  // 就隱藏
      } else {
         $(this).parents().show();
      }
    });
  });
  
});
