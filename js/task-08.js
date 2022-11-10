const form = document.querySelector('.login-form')
form.addEventListener('submit', onFormSubmit)
function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password } } = event.currentTarget;
    const formElements = { email: email.value, password: password.value }
    
 if(email.value ===""|| password.value ===""){ return alert( "все поля дожны быть заполнены")}
    const formData = new FormData(event.currentTarget);
    
     event.currentTarget.reset()
    
}


