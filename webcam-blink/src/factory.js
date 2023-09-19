// FACTORIES

// -> A factory é quem importa as dependências.
// -> Cria o objeto final para fazer as chamadas.
// -> Retorna a função que inicializa o fluxo daquele componente (init)

import Camera from "../../lib/shared/camera.js"
import { supportWorkerType } from "../../lib/shared/util.js"
import Controller from "./controller.js"
import Service from "./service.js"
import View from "./view.js"

async function getWorker() {
    // Verifica se o navegador suporta type:module.
    if(supportWorkerType()) {
        console.log('suporta')

        const worker = new Worker('./src/worker.js', {type: 'module'})
        return worker
    }

    const workerMock = {
        async postMessage() {},
        onmessage(msg) {}
    }
    console.log('não suporta')
    return workerMock
}

const worker = await getWorker()
worker.postMessage('he from factory')

// await -> retorno de uma promise.
const camera = await Camera.init()

const [rootPath] = window. location.href.split('/pages/')

const factory = {
    async initialize() {
        return Controller.initialize({
            view: new View(),
            service: new Service({

            })
        })
    }
}

export default factory