function validateForm(){
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

	// VERIFICACIÓN DE CAMPOS VACÍOS	
	var rellenarText = document.createTextNode("Por favor, rellene este campo.");
	if (name === "") {
		var spanError = document.createElement('span');
		spanError.appendChild(rellenarText);
		document.getElementsByClassName('name-container')[0].appendChild(spanError);
		console.log("Nombre:" + name);

	} else if (lastName === "") {
		var spanError = document.createElement('span');
		spanError.appendChild(rellenarText);
		document.getElementsByClassName('lastname-container')[0].appendChild(spanError);
		console.log("Apellido: " + lastName);

	} else if (email === "") {
		var spanError = document.createElement('span');
		spanError.appendChild(rellenarText);
		document.getElementsByClassName('email-container')[0].appendChild(spanError);
		console.log("Correo: " + email);

	} else if (password === ""){
		var spanError = document.createElement('span');
		spanError.appendChild(rellenarText);
		document.getElementsByClassName('password-container')[0].appendChild(spanError);
		console.log("Contraseña: " + password);

	} else if (selectorIndex === 0) {
		var spanError = document.createElement('span');
		spanError.appendChild(rellenarText);
		document.getElementsByClassName('selector-container')[0].appendChild(spanError);
		console.log("Tipo de bici: " + bycicleType);

	} else {
		// VERIFICACIÓN DE CARACTERES REQUERIDOS
		var caracteresText = document.createTextNode("Utilice sólo letras mayúsculas o minúsculas de la A a la Z.");
		var correoText = document.createTextNode("Este correo no es válido.");
		if (!nombreValido.test(name)) {
			var spanError = document.createElement('span');
			spanError.appendChild(caracteresText);
			document.getElementsByClassName('lastname-container')[0].appendChild(spanError);
			console.log("Nombre: " + name + ". Tiene caracteres no permitidos.");
		} else if(!nombreValido.test(lastName)) {
			var spanError = document.createElement('span');
			spanError.appendChild(caracteresText);
			document.getElementsByClassName('lastname-container')[0].appendChild(spanError);
			console.log("Apellido: " + lastName + ". No tiene mayúscula inicial");
		} else if(!correoValido.test(email)) {
			var spanError = document.createElement('span');
			spanError.appendChild(correoText);
			document.getElementsByClassName('lastname-container')[0].appendChild(spanError);
			console.log("Apellido: " + lastName + ". No tiene mayúscula inicial");
		} else {
			// VERIFICACIÓN DE MAYÚSCULAS
			var mayusText = document.createTextNode("Le hace falta la mayúscula inicial");
			if (!nombreValido.test(name)) {
				var spanError = document.createElement('span');
				spanError.appendChild(mayusText);
				document.getElementsByClassName('lastname-container')[0].appendChild(spanError);
				console.log("Nombre: " + name + ". No tiene mayúscula inicial");
			} else if (!nombreValido.test(lastName)) {
				var spanError = document.createElement('span');
				spanError.appendChild(mayusText);
				document.getElementsByClassName('lastname-container')[0].appendChild(spanError);
				console.log("Apellido: " + lastName + ". No tiene mayúscula inicial");
			} else {
				// IMPRIMIR Y VACIAR	
				console.log("Nombre:" + name);
				console.log("Apellido: " + lastName);
				console.log("Correo: " + email);
				console.log("Contraseña: " + password);
				console.log("Tipo de bici: " + bycicleType);
				console.log("Twitter: " + social);
				console.log("Info por email: " + check);
				document.getElementById('name').value = "";
				document.getElementById('lastname').value = "";
				document.getElementById('input-email').value = "";
				document.getElementById('input-password').value = "";
				document.getElementsByTagName('select')[0].selectedIndex = 0;
				document.getElementById('input-social').value = "";
				document.getElementById('check').checked = false;
				return false;
			}
		}
	}
};