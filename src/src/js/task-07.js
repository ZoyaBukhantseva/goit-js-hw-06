const inputRef = document.querySelector('#font-size-control')
console.log(inputRef)
const styleRef = document.querySelector('#text')
console.log(styleRef)

inputRef.addEventListener('input', event => styleRef.style.fontSize = event.target.value +"px")