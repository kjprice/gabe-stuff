let planets,
    translation;

function setup() {
  createCanvas(800, 800);
  planets = [
    new Planet(10000, 400, 400, 0, 0, "#EC5"),
    new Planet(15, 200, 400, 0, -16, "#5CE"),
    new Planet(50, 400, 700, 15, 0, "#5EA"),
    new Planet(100, 400, 0, 13, 0, "#CCC")
  ]
  translation = createVector(0, 0);
  //frameRate(20);
}

function draw() {
  translate(translation);
  background(22);
  for (let a = 0; a < planets.length; a++) {
    for (let b = 0; b < planets.length; b++) {
      planets[a].calculateForce(planets[b]);
    }
  }
  for (const planet of planets) {
    planet.applyForce();
    planet.show();
  }
  // planet[0].speed = createVector(0, 0);
  if (keyIsPressed) {
    switch (key) {
      case "ArrowLeft":
        translation.x += 1;
        break;
      case "ArrowRight":
        translation.x -= 1;
        break;
      case "ArrowUp":
        translation.y += 1;
        break;
      case "ArrowDown":
        translation.y -= 1;
        break;
    }
  }
}
