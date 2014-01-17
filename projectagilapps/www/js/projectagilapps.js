$(document).ready(function(){
	$('#submit').bind('click', function(){
		var username = $('#username').val();
		var email = $('#email').val();
		var confirmemail = $('#confirmemail').val();
		var password = $('#password').val();
		var confirmpassword = $('#confirmpassword').val();


		window.sessionStorage.setItem("username", username);
		window.sessionStorage.setItem("email", email);
		window.sessionStorage.setItem("confirmemail", confirmemail);
		window.sessionStorage.setItem("password", password);
		window.sessionStorage.setItem("confirmpassword", confirmpassword);
	});

	$("#form").validate({
		        rules: {
		                username: {
		                        required: true,
		                        maxlength: 28,
		                        minlength: 10
		                },
		                email: {
			                required: true,
			                email: true
		                },
		                confirmemail: {
			                required: true,
			                email:true
			               
		                },
		                password: {
		                        required: true,
		                        number: true,
		                        maxlength: 30,
		                        minlength: 8
		                },
		                confirmpassword:{
		                	  required:true,
		                	  number: true,
		                        maxlength: 30,
		                        minlength: 8
		                }
		        }
		});

});

function alertDismissed() {
            // do something
        }
        
    function showAlert() {
        navigator.notification.alert(
            'Por favor Verifique los datos!',  // message
            alertDismissed,         // callback
            'Error de Autenticación',            // title
            'Aceptar'                  // buttonName
        );
    }
