function validateForm(){
	// ELIMINAR SPANS DE VALIDACIONES ANTERIORES
	document.querySelectorAll(".form-signup span").forEach(function(span) {span.remove()});
	// VALORES
	var name = document.getElementById('name').value;
	var lastName = document.getElementById('lastname').value;
	var email = document.getElementById('input-email').value;
	var password = document.getElementById('input-password').value;
	var selectorIndex = document.getElementsByTagName('select')[0].selectedIndex;
	var selectorOpts = document.getElementsByTagName('select')[0].options;
	var bycicleType = selectorOpts[selectorIndex].value;
	var social = document.getElementById('input-social').value;
	var check = document.getElementById('check').checked;
	// CARACTERES VÁLIDOS // REGULAR EXPRESSIONS
	var nombreValido = /^[A-Za-z]*/;
	var correoValido = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
////// NOMBRE
	// VERIFICACIÓN DE CAMPO OBLIGATORIO	
	if (name === "") {
		var rellenarText = document.createTextNode("Por favor, rellene este campo.");
		var spanError = document.createElement('span');
		spanError.appendChild(rellenarText);
		document.getElementsByClassName('name-container')[0].appendChild(spanError);
		console.log("Nombre:" + name);
	}
	// VERIFICACIÓN DE CARACTERES REQUERIDOS
	else if (!nombreValido.test(name)) {
		var caracteresText = document.createTextNode("Utilice sólo letras mayúsculas o minúsculas de la A a la Z.");
		var spanError = document.createElement('span');
		spanError.appendChild(caracteresText);
		document.getElementsByClassName('lastname-container')[0].appendChild(spanError);
		console.log("Nombre: " + name + ". Tiene caracteres no permitidos.");
	}
	// VERIFICACIÓN DE MAYÚSCULAS
	else if (name.charAt(0) != name.charAt(0).toUpperCase()) {
		var mayusText = document.createTextNode("Le hace falta la mayúscula inicial");
		var spanError = document.createElement('span');
		spanError.appendChild(mayusText);
		document.getElementsByClassName('lastname-container')[0].appendChild(spanError);
		console.log("Nombre: " + name + ". No tiene mayúscula inicial");
	} else {
	// IMPRIMIR Y VACIAR CAMPO
		console.log("Nombre:" + name);
		document.getElementById('name').value = "";
	}
////// APELLIDO
	// VERIFICACIÓN DE CAMPOS VACÍOS	
	if (lastName === "") {
		var rellenarText = document.createTextNode("Por favor, rellene este campo.");
		var spanError = document.createElement('span');
		spanError.appendChild(rellenarText);
		document.getElementsByClassName('lastname-container')[0].appendChild(spanError);
		console.log("Apellido: " + lastName);
	}
	// VERIFICACIÓN DE CARACTERES REQUERIDOS
	else if(!nombreValido.test(lastName)) {
		var caracteresText = document.createTextNode("Utilice sólo letras mayúsculas o minúsculas de la A a la Z.");
		var spanError = document.createElement('span');
		spanError.appendChild(caracteresText);
		document.getElementsByClassName('lastname-container')[0].appendChild(spanError);
		console.log("Apellido: " + lastName + ". Tiene caracteres no permitidos.");
	}
	// VERIFICACIÓN DE MAYÚSCULAS
	else if (lastName.charAt(0) != lastName.charAt(0).toUpperCase()) {
		var mayusText = document.createTextNode("Le hace falta la mayúscula inicial");
		var spanError = document.createElement('span');
		spanError.appendChild(mayusText);
		document.getElementsByClassName('lastname-container')[0].appendChild(spanError);
		console.log("Apellido: " + lastName + ". No tiene mayúscula inicial");
	} 
	// IMPRIMIR Y VACIAR CAMPO
	else {
		console.log("Apellido: " + lastName);
		document.getElementById('lastname').value = "";
	}
////// EMAIL
	// VERIFICACIÓN DE CAMPOS VACÍOS	
	if (email === "") {
		var rellenarText = document.createTextNode("Por favor, rellene este campo.");
		var spanError = document.createElement('span');
		spanError.appendChild(rellenarText);
		document.getElementsByClassName('email-container')[0].appendChild(spanError);
		console.log("Correo: " + email);
	}
	// VERIFICACIÓN DE CARACTERES REQUERIDOS
	else if(!correoValido.test(email)) {
		var correoText = document.createTextNode("Este correo no es válido.");
		var spanError = document.createElement('span');
		spanError.appendChild(correoText);
		document.getElementsByClassName('email-container')[0].appendChild(spanError);
		console.log("Apellido: " + lastName + ". Tiene caracteres no permitidos.");
	}
	// IMPRIMIR Y VACIAR CAMPO
	else {
		console.log("Correo: " + email);
		document.getElementById('input-email').value = "";
	}
////// CONTRASEÑA
	// VERIFICACIÓN DE CAMPOS VACÍOS
	if (password === ""){
		var rellenarText = document.createTextNode("Por favor, rellene este campo.");
		var spanError = document.createElement('span');
		spanError.appendChild(rellenarText);
		document.getElementsByClassName('password-container')[0].appendChild(spanError);
		console.log("Contraseña: " + password);
	}
	// VERIFICACIÓN DE CARACTERES REQUERIDOS
	else if (password.length < 6) {
		var passPeqText = document.createTextNode("Su contraseña es muy corta.");
		var spanError = document.createElement('span');
		spanError.appendChild(passPeqText);
		document.getElementsByClassName('password-container')[0].appendChild(spanError);
		console.log("Contraseña: " + password + ". Tiene menos de 6 caracteres.");
	}
	// VERIFICACIÓN DE CONTRASEÑAS NO PERMITIDAS
	else if (password.toString() == "password" || password.toString() == "123456" || password.toString() == "098754") {
		var passNoText = document.createTextNode("Esta contraseña es insegura.");
		var spanError = document.createElement('span');
		spanError.appendChild(passNoText);
		document.getElementsByClassName('password-container')[0].appendChild(spanError);
		console.log("Contraseña: " + password + ". Tiene caracteres no permitidos.");
	}
	// IMPRIMIR Y VACIAR CAMPO
	else {
		console.log("Contraseña: " + password);
		document.getElementById('input-password').value = "";
	}
////// SELECTOR DE BICIS
	// VERIFICACIÓN DE CAMPOS VACÍOS
	if (selectorIndex === 0) {
		var rellenarText = document.createTextNode("Por favor, rellene este campo.");
		var spanError = document.createElement('span');
		spanError.appendChild(rellenarText);
		document.getElementsByClassName('selector-container')[0].appendChild(spanError);
		console.log("Tipo de bici: " + bycicleType);}
 	else {
	console.log("Tipo de bici: " + bycicleType);
	document.getElementsByTagName('select')[0].selectedIndex = 0;
	}
////// USUARIO DE TWITTER
	// IMPRIMIR Y VACIAR CAMPO
	console.log("Twitter: " + social);
	document.getElementById('input-social').value = "";
////// RECIBIR NEWSLETTER
	// IMPRIMIR Y VACIAR CAMPO
	console.log("Info por email: " + check);
	document.getElementById('check').checked = false;
////// FIN
	return false;
};