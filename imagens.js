// imagens do jogo
let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

// sons do jogo
let somPontos;
let somTrilha;
let somColisao;

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarro4 = loadImage("imagens/carro-1.png");
  imagemCarro5 = loadImage("imagens/carro-2.png");
  imagemCarro6 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6];
  somTrilha = loadSound("sons/trilha.mp3");
  somPontos = loadSound("sons/pontos.wav");
  somColisao = loadSound("sons/colidiu.mp3");
}
