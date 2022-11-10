const inputRef = document.querySelector('#validation-input')
console.log(inputRef)

const onInputBlur=()=>{
    if (inputRef.value.length === Number(inputRef.dataset.length)) {inputRef.classList.add('valid') }
    else {
        inputRef.classList.remove('.valid'), inputRef.classList.add('invalid')}
} 
inputRef.addEventListener('blur', onInputBlur)
