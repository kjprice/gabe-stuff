// const FORCE = 6.674;
const FORCE = 0.25;

class Planet {
  constructor(mass, x, y, xSpeed, ySpeed, color) {
    this.mass = mass;
    this.position = createVector(x, y);
    this.speed = createVector(xSpeed, ySpeed);
    this.color = color;
  }
  calculateForce(planet) {
    const distance = dist(this.position.x, this.position.y, planet.position.x, planet.position.y);
    const force = FORCE * this.mass * planet.mass / distance ** 2;
    this.speed.add(force * (planet.position.x - this.position.x) / distance / this.mass, force * (planet.position.y - this.position.y) / distance / this.mass);
  }
  applyForce() {
    this.position.add(this.speed);
  }
  show() {
    fill(this.color);
    noStroke();
    circle(this.position.x, this.position.y, sqrt(this.mass / PI));
  }
}