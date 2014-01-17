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

});
