// CONTROLLER

// -> Intermediaria entre (services e/ou works) e views.

export default class Controller {
  constructor({ }) {

  }

  static async initialize(deps) {
    const controller = new Controller(deps)
    return controller.init() 
  }

  async init() {
    console.log('init')
  }
}