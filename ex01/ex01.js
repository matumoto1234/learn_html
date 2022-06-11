const onClick = () => {
  const inputElement = document.getElementsByClassName("ex01Item-input")[0]
  alert(inputElement.value)
  inputElement.value = ""
}

const buttonElement = document.getElementsByClassName("ex01Item-button")[0]
buttonElement.addEventListener('click', onClick)
