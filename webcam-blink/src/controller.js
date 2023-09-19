// CONTROLLER

// -> Intermediaria entre (services e/ou works) e views.

export default class Controller {
  #view
  #service

  constructor({ view, service }) {
    this.#view = view
    this.#service = service

    // bind(this) - indica que toda vez que estiver acessando
    // this, está referenciando a controller e não a view.
    this.#view.configureOnBtnClick(this.onBtnStart.bind(this))
  }

  static async initialize(deps) {
    const controller = new Controller(deps)
    controller.log('not yet detecting eye blink! click in the button to start')
    return controller.init() 
  }

  async init() {
    console.log('init!!')
  }

  log(text) {
    this.#view.log(`logger: ${text}`)
  }

  onBtnStart() {
    this.log('initializing detection...')
  }
}