$(document).ready(function(){
	
	$('#Home').click(function(){
		 $('#tampilan').hide();
		 var nav ='';
		 $('#tampilan').fadeIn('slow').html(nav);
	});
		
	$('#Input').click(function(){
		$('#tampilan').hide();
		var form_input='input.html';
		$('#tampilan').load(form_input).fadeIn('slow');
	});
		
	$('#Member').click(function(){
		$('#tampilan').hide();
		var about='<h5> Ini Halaman Member;</h5>';
		$('#tampilan').fadeIn('slow').html(about);
	});

});
