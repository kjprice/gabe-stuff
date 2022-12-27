let planets,
    translation;

const WIDTH = 400;
const HEIGHT = 400;
function setup() {
  createCanvas(WIDTH, HEIGHT);
  // frameRate(4);
  planets = [
    new Planet(10000, 400, 100, 0, 0, "#EC5"),
    new Planet(10000, 200, 300, 0, -5, "#5CE"),
    // new Planet(50, 400, 700, 15, 0, "#5EA"),
    // new Planet(100, 400, 0, 13, 0, "#CCC")
  ]
  translation = createVector(0, 0, 1);
  //frameRate(20);
}

class Positions {
  constructor(planets) {
    this.planets = planets;

    this.calculate();
  }
  
  calculate() {
    let x1 = Infinity;
    let x2 = -Infinity;
    let y1 = Infinity;
    let y2 = -Infinity;
    // console.log('this.planets', this.planets);
    this.planets.forEach(planet => {
    // for (planet in this.planets) {
      const {x, y} = planet.position;
      
      if (x < x1) {
        x1 = x;
      }
      if (x > x2) {
        x2 = x;
      }
      if (y < y1) {
        y1 = y;
      }
      if (y > y2) {
        y2 = y;
      }
    // }
    });

    this.width = x2 - x1;
    this.height = y2 - y1;
    // print(x1, x2, y1, y2);
    const xCenter = x1 + (this.width)/2;
    const yCenter = y1 + (this.height)/2;

    this.center = createVector(xCenter, yCenter);
  }
}

function setScale(distanceX, distanceY) {
  const distanceToUse = Math.max(distanceX, distanceY);
  const distanceWithBuffer = distanceToUse * 1.2;
  return distanceWithBuffer / WIDTH;
  print({newScale})
  // scale(newScale);
}

function setBounds() {
  const positions = new Positions(planets);
  const {width, height, center} = positions;

  // setScale(width, height);
  translation.x = -center.x + (WIDTH / 2);
  translation.y = -center.y + (HEIGHT / 2);
  translation.z = setScale(width, height);
  // scale(1 - (1.2 / frameCount));
  print({width, height});
  
  // console.log('translation.x, translation.y, center', translation.x, translation.y, center)

  // console.log('', translation.y)
  // console.log({width, height})

  // scale(1 - (0.04 * frameCount));


}

function draw() {
  // scale(1/ (frameCount));
  translate(translation);
  background(22);
  for (let a = 0; a < planets.length; a++) {
    for (let b = 0; b < planets.length; b++) {
      planets[a].calculateForce(planets[b]);
    }
  }
  for (const planet of planets) {
    planet.applyForce();
    // planet.show();
  }
  // Take leftX
  // Take rightX
  // Take topY
  // Take bottomY
  // Center of x -> compare against
  // let newTranslationX = 0;
  // let newTranslationY = 0;
  // let newScale = 1;
  // scale(newScale);
  setBounds();
  for (const planet of planets) {
    // planet.applyForce();
    planet.show();
  }
  // planet[0].speed = createVector(0, 0);
  // if (keyIsPressed) {
  //   switch (key) {
  //     case "ArrowLeft":
  //       translation.x += 10;
  //       break;
  //     case "ArrowRight":
  //       translation.x -= 10;
  //       break;
  //     case "ArrowUp":
  //       translation.y += 10;
  //       break;
  //     case "ArrowDown":
  //       translation.y -= 10;
  //       break;
  //   }
  // }
  p1 = planets[0];
  p2 = planets[1];
  // print(p1.position, p2.position, translation)
}
