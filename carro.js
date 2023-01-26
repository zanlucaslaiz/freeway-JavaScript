let xCarros = [600,600,600,600,600,600]
let yCarros = [40, 96, 150, 210, 265, 315]
let velocidadeCarros = [2, 2.5, 3.2, 3, 2.2, 2]
let carroComprimento = 50;
let carroAltura = 40;

// codigo do carro
function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i ++){
    image(imagemCarros[i], xCarros[i], yCarros[i], carroComprimento, carroAltura);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}