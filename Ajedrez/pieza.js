function Pieza(blanca, x, y, tipo) {
  this.blanca = blanca;
  this.pos = [x, y];
  this.rawTipo = tipo;
  this.tipo = tipo[0];
  this.taken = false;

  this.pintar = () => {
    textAlign(CENTER, CENTER);
    textSize(50);
    textFont('Liberation Sans')
    fill(200);
    if (!this.taken) {
      // text(this.tipo,
      //   tamCasillas / 2 + this.pos[0] * tamCasillas,
      //   tamCasillas / 2 + this.pos[1] * tamCasillas);
      image(spriteSheet, this.pos[0] * tamCasillas, this.pos[1] * tamCasillas, tamCasillas, tamCasillas, spriteDict[this.rawTipo][0], spriteDict[this.rawTipo][1], 333, 333);
    } else {
      image(spriteSheet, mouseX - tamCasillas / 2, mouseY - tamCasillas / 2, tamCasillas, tamCasillas, spriteDict[this.rawTipo][0], spriteDict[this.rawTipo][1], 333, 333);
    }
  }
}