document.getElementById("contact-form").addEventListener("submit", (e) => {
	e.preventDefault();
	let name = document.getElementById("form-input-name").value;
	let email = document.getElementById("form-input-email").value;
	let message = document.getElementById("form-input-message").value;
	let url = `mailto:x25427452@student.ncirl.ie?subject=Message from ${name}&body=${message}&cc=${email}`;
	// Use encodeURI to account for spaces in URL
	let encodedURL = encodeURI(url);
	window.open(encodedURL);
});