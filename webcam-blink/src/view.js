// VIEW

// Iteração com o DOM (com o HTML, com a página).

export default class View {
  #btnInit = document.querySelector('#init')
  #statusElement = document.querySelector('#status')

  enableButton() {
    this.#btnInit.disabled = false
  }

  // Controller enviar uma função toda vez que
  // ocorrer um click no botão init.
  configureOnBtnClick(fn) {
    this.#btnInit.addEventListener('click', fn)
  }

  log(text) {
    this.#statusElement.innerHTML = text
  }
}