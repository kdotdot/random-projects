function Tablero() {
  const colorBlanco = [243, 242, 243];
  const colorNegro = [41, 43, 43];
  this.Initialpos = [
    ["Tb", "Cb", "Ab", "Qb", "Kb", "Ab", "Cb", "Tb"],
    ["Pb", "Pb", "Pb", "Pb", "Pb", "Pb", "Pb", "Pb"],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    ["Pw", "Pw", "Pw", "Pw", "Pw", "Pw", "Pw", "Pw"],
    ["Tw", "Cw", "Aw", "Qw", "Kw", "Aw", "Cw", "Tw"]
  ];

  this.pintarTablero = () => {
    noStroke();
    var blanca = true;
    for (j = 0; j < tamY; j++) {
      for (i = 0; i < tamX; i++) {
        if (blanca) {
          fill(colorBlanco[0], colorBlanco[1], colorBlanco[2]);
          blanca = false;
        } else {
          fill(colorNegro[0], colorNegro[1], colorNegro[2]);
          blanca = true;
        }
        rect(i * tamCasillas, j * tamCasillas, tamCasillas, tamCasillas);
      }
      blanca = !blanca;
    }
    noFill();
    stroke(0);
    rect(0, 0, tamCasillas * 8 - 1, tamCasillas * 8 - 1);
  };

  this.iniciarPiezas = () => {
    piezas = [];
    for (i = 0; i < tamY; i++) {
      for (j = 0; j < tamX; j++) {
        curr = this.Initialpos[j][i]
        if (curr != 0) {
          piezas.push(new Pieza(curr[1] == 'w', i, j, curr));
        }
      }
    }
    return piezas;
  };
}