// CAMERA
// Configuração para solicitação e uso da Webcam no navegador.

// Faz a conexão da câmera com todas as aplicações que a solicitarem.
// OBS: Todos os arquivos contidos dentro da pasta "lib" são de uso
// comum na aplicação.

// Aqui está compartilhado entre os projetos.

// static -> inicializa a classe sem a necessidade de usar "new".
// new    -> Utilizado quando se deseja guardar o estado de um objeto.

export default class Camera {

  constructor() {
    this.video = document.createElement('video')
  }

  static async init() {
    // Se o mediaDevice ou o getUserMedia não estiver disponível 
    // a API do navegador não funciona.
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error (
        `Browser API navigator.mediaDevices.getUserMedia not available`
        // Verificar navegadores que suportam a API para câmera.
        // https://caniuse.com/?search=getUsermedia
      )
    }

    const videoConfig = {
      audio: false, // Não vai capturar audio.
      video: {
        width:     globalThis.screen.availWidth,
        height:    globalThis.screen.availHeight,
        flameRate: {
          ideal: 60
        }
      }
    }

    // Utilizada para armazenar o fluxo de dados proveniente da câmera (video e/ou audio).
    // Solicitando permissão ao usuário para usar a câmera.
    const stream = await navigator.mediaDevices.getUserMedia(videoConfig)

    const camera = new Camera()

    // srcObject -> Propriedade do elemento <video>, que define o 
    // objeto de origem do vídeo. Neste caso stream é o objeto. 
    camera.video.srcObject = stream

  // ----------------------------------------------
    // Estas configurações podem ser desabilitados
    // caso não queira exibir a imagem da Webcam
    // no navegador.
  
    camera.video.width = 320
    camera.video.height = 240

    // Adiciona a câmera na página.
    document.body.append(camera.video)
  // ----------------------------------------------

    // Aguarda o retorno da camera.
    await new Promise((resolve) => {
      camera.video.onloadedmetadata = () => {
        resolve(camera.video)
      }
    })

    camera.video.play()

    return camera
  }
}