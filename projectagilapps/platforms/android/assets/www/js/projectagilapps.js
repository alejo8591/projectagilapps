$(document).ready(function(){
	$('#submit').bind('click', function(){
		var username = $('#username').val();
		var email = $('#email').val();
		var confirmemail = $('#confirmemail').val();
		var password = $('#password').val();
		var confirmpassword = $('#confirmpassword').val();


		window.localStorage.setItem("username", username);
		window.localStorage.setItem("email", email);
		window.localStorage.setItem("confirmemail", confirmemail);
		window.localStorage.setItem("password", password);
		window.localStorage.setItem("confirmpassword", confirmpassword);
	});

	$('#submit1').bind('click', function(){
		
		var email1 = $('#email1').val();
		var pass = $('#pass').val();
		
		window.sessionStorage.setItem("email1", email1);
		window.sessionStorage.setItem("pass", pass);
	});
});