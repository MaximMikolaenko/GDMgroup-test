$(function(){

	$('button').click(function(e){

		var pass = $('input[name="password"]').val();
		var login = $('input[name="login"]').val();
		if(pass.length != '' || login.length != '' ){
			if(login.length > 20){
				alert('Логин не может быть больше 20 символов');
			} else if(login.length < 3) {
				alert('Логин не может быть меньше 3 символов');
			} else if(login.match('[-!"#$%&\'()*+,./:;<=>?@[\\\]_`{|}~]')) {
				alert('Логин не может содержать спец символы');
			}

			if(pass.length > 20){
				alert('Пароль не может быть больше 20 символов');
			} else if(pass.length < 5) {
				alert('Пароль не может быть меньше 5 символов');
			}

			var isAllowed = true;
			if(pass.length >= 5 && pass.length < 20){
				if(!pass.match('[0-9]')){
					isAllowed = false;
				}
				if(!pass.match('[a-z]')){
					isAllowed = false;
				}
				if(!pass.match('[A-Z]')){
					isAllowed = false;
				}
				if(!pass.match('[-!"#$%&\'()*+,./:;<=>?@[\\\]_`{|}~]')){
					isAllowed = false;
				}
				if(isAllowed){
					$(this).closest('form').hide();
					$('.form-block').append("<p class='welcome'>YOU'RE WELCOME!</p>");
					$('.form-block').css('width:279px; height:260px;');
				} else {
					alert('Поле должно обязательно содержать как минимум 1 большую букву, 1 маленькую, 1 цифру, 1 спец символ')
				}
			}
		} else {
			alert('Поля должны быть заполнены');
		}
		return false;
	});
});