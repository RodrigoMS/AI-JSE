// UTIL
// Vai ser utilizado para trabalhar com WebWorker.

// Verificar se o navegador suporta type:module
function supportWorkerType() {
  let supports = false

  const tester = {
    // Se conseguir ler "type" de "blob://"
    // significa que suporta a propriedade experimental
    // type:module.
    get type() { supports = true }
  }

  try {
    // Tenta ler um arquivo inexistente para validar
    // a possibilidade de ler as informações .
    // terminate -> Finaliza o processo em segundo plano de blob://.
    new Worker('blob://', tester).terminate()
  
  // Se der erro ignora.
  } finally{
    return supports
  }
}

export {
  supportWorkerType
}

// Usado pela factory do projeto webcam-blink.