$(document).on('ready'function(){

	$("#sign-up-form").on('submit',function() {
		console.log('hola');
		$.post($("#sign-up-form").attr('action'),{name:$("#name").val()},
		 	function(respuesta){
				$("#dataImput").html(respuesta);
		});
		return false;
	});
});