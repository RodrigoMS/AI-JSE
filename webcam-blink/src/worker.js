// WORKER

// -> Processo em segundo plano.
// -> Logica PESADA (que envolva CPU).
// -> Tudo que pode travar a tela (for loop, machine learning, AI, processamento de Web CAM).
// -> Chama as regras de negócio da service.

onmessage = ({data}) => {
  console.log('worker', data)
  postMessage({
    'ok': 'ok'
  })
}