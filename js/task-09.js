function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonRef = document.querySelector('.change-color')
const textSpanRef = document.querySelector('.color')
const bodyRef = document.querySelector('body')


const onChangeBg = (event) => {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  textSpanRef.textContent = randomColor;
}
buttonRef.addEventListener("click", onChangeBg);
