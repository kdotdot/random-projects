const tamX = 8;
const tamY = 8;

const tamCasillas = 80;

piezaCogida = undefined;

var spriteSheet;

var spriteDict = {
  "Kw": [0, 0],
  "Qw": [333, 0],
  "Aw": [666, 0],
  "Cw": [1000, 0],
  "Tw": [1333, 0],
  "Pw": [1666, 0],
  "Kb": [0, 333],
  "Qb": [333, 333],
  "Ab": [666, 333],
  "Cb": [1000, 333],
  "Tb": [1333, 333],
  "Pb": [1666, 333]
};

function setup() {

  createCanvas(tamCasillas * 8, tamCasillas * 8);
  tablero = new Tablero();

  piezas = tablero.iniciarPiezas();
  console.log("laskdsakdasl");
  spriteSheet = loadImage('pieces.png');
}

function draw() {
  background(255);
  tablero.pintarTablero();
  pintarPiezas();
}

function pintarPiezas() {
  piezas.forEach(function(pieza) {
    pieza.pintar();
  });
}

function mousePressed() {
  mousePos = translateMousePos();
  for (i = 0; i < piezas.length; i++) {
    if (piezas[i].pos[0] == mousePos[0] && piezas[i].pos[1] == mousePos[1]) {
      piezas[i].taken = true;
      piezaCogida = piezas[i];
    }
  }
}

function mouseReleased() {
  mousePos = translateMousePos();
  if (mousePos[0] >= 0 && mousePos[0] < tamX &&
    mousePos[1] >= 0 && mousePos[1] < tamY) {
    piezaCogida.pos = mousePos;
    piezaCogida.taken = false;
    piezaCogida = undefined;
  } else {
    piezaCogida.taken = false;
    piezaCogida = undefined;
  }
}

function translateMousePos() {
  return [floor(mouseX / tamCasillas), floor(mouseY / tamCasillas)];
}