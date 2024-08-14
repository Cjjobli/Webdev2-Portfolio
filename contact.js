function validate(e) {
	// Hides all error elements on the page
	hideErrors();

	// Determine if the form has errors
	if (formHasErrors()) {
		// Prevents the form from submitting
		e.preventDefault();

		// When using onSubmit="validate()" in markup, returning false would prevent
		// the form from submitting
		return false;
	}

	// When using onSubmit="validate()" in markup, returning true would allow
	// the form to submit
	return true;
}

function hideErrors(){
	let fullnameError = document.getElementById("fullname_error").style.display = "none";
	let phoneError = document.getElementById("phone_error").style.display = "none";
	let emailFormatError = document.getElementById("emailformat_error").style.display = "none";
    let commentError = document.getElementById("comments_error").style.display = "none";
}

function formHasErrors(){
    let errorFlag = false;
    document.getElementById("fullname").focus()

    // Full Name validation
    let name = document.getElementById("fullname")

    if(name.value === '' || name.value == null){
        document.getElementById("fullname_error").style.display = "block"
        errorFlag = true
    }

	// Phone number validate 10 numbers 
	let phoneNumRegEx = new RegExp(/^\d{10}$/)
	let phoneNum = document.getElementById("phone").value

	if(!phoneNumRegEx.test(phoneNum)){
		document.getElementById("phone_error").style.display = "block"

		if(!errorFlag){
			document.getElementById("phone").focus()
			document.getElementById("phone").select()
		}

		errorFlag = true
	}

	// Email Address Validation
	let regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
	let checkEmail = document.getElementById("email").value

	if(!regexEmail.test(checkEmail)){
		document.getElementById("emailformat_error").style.display = "block"

		if(!errorFlag){
			document.getElementById("email").focus()
			document.getElementById("email").select()
		}
		errorFlag = true
	}

        // Comments validation
        let comments = document.getElementById("commentsArea")

        if(comments.value === '' || comments.value == null){
            document.getElementById("comments_error").style.display = "block"
            errorFlag = true
        }
	
    return errorFlag;
}

function resetForm(e) {
	hideErrors();
}


function load(){
    hideErrors();

    document.getElementById("contactme").addEventListener("submit", validate);
    document.getElementById("contactme").addEventListener("reset", resetForm);

}

document.addEventListener("DOMContentLoaded", load)
