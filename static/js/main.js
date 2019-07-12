$(document).ready(function() {
	
	$('.x').on('click', function() {
		
    $('#form').slideUp(300);
    $('body').on('keydown', function(e) {  
			
      if (e.which == 13 || e.keyCode == 13) { 
        $('#form').slideDown(300);
      }   
			
    });
  });
	
  $('[type = "submit"]').on('click', function() {
		
    $('.top').css('height', '100%').css('background', '#F58').css('border-radius', '10px').html('please fill out all fields... <br/> press enter to reset...');
		
    $('label').hide(1000);
    $('input').hide(1000);
		$('[type = "submit"]').hide(1000);
            
    $('body').on('keydown', function(e) {
			
      if (e.which == 13 || e.keyCode == 13) {
        $('.top').css('height', '30px').css('background', '#10DAF6').css('border-radius', '0').css('border-top-left-radius', '10px').css('border-top-right-radius', '10px').html('User Login');
            
        $('#right').show();
        $('label').css('display', 'block');
        $('input').css('display', 'block');
        $('[type = "submit"]').css('display', 'block');
      }
			
    });
  });
});