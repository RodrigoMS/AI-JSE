// FACTORIES

// -> A factory é quem importa as dependências.
// -> Cria o objeto final para fazer as chamadas.
// -> Retorna a função que inicializa o fluxo daquele componente (init)

import Controller from "./controller.js"
import Service from "./service.js"
import View from "./view.js"

const [rootPath] = window. location.href.split('/pages/')

const factory = {
    async initialize() {
        return Controller.initialize({
            view: new View({}),
            service: new Service({

            })
        })
    }
}

export default factory