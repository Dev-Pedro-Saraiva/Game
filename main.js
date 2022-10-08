const randomNumber = Math.round(math.ranadom() * 1)
let xAttempts = 1


function handleClick(event) {
  event.preventDefault()
  const inputNumber = document.querySelector('#inputNumber')


  if(Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")
    document
      .querySelector (".sreen2 h2")
      .inneText = `Acertou em ${xAttempts} tentativas`
  }
  xAttempts++ 
}
