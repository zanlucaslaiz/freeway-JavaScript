// varivel do Ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor,xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i ++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], carroComprimento, carroAltura, xAtor, yAtor, 15);
    if(colisao){
      somColisao.play();
      voltaAtorPosisaoInicial();      
      if(pontoMaiorZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosisaoInicial(){
  yAtor = 366;
}

function incluirPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,240,60);
  text(meusPontos, width / 5, 27)
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    somPontos.play();
    voltaAtorPosisaoInicial();
  }
}

function pontoMaiorZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}


