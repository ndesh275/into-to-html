function switchform(className, e) {

	e.preventDefault();
	
	const all Form = document.querySelectorAll("form");
	
	const Form = document.querySelectorAll("form.${className}");

	allForm.forEach(item=>{
		item.classList.remove("active");

	})
	
	form.classList.add("active");

}

const registerPassword = document.querySelectorAll('form.register #password');

const registerConfirmPassword = document.querySelectorAll('form.register #confirm-password');

registerPassword.addEventListener("input",function(){
	registerConfirmPassword.pattern = "$(this.value)";


})