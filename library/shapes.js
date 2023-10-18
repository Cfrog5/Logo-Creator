// our parent shape class with the set color property

class Shapes {
    constructor() {
      this.color = "";
    }
    setColor(color) {
      this.color = color;
    }
  };
  // our class adding the circle SVG
  class Circle extends Shapes {
    render() {
    return `<circle cx="150" cy="150" r="140" fill="${this.color}" />`
    }
  };
  // our class adding the square SVG
  class Square extends Shapes {
    render() {
    return `<rect width="300" height="300" fill="${this.color}" />`
    }
  };
  // our class adding the triangle SVG
  class Triangle extends Shapes {
    render() {
    return `<polygon points="170,0 350,250 20,210" fill="${this.color}" />`
    }
  };
  
  // exporting the shapes classes
  module.exports = { Circle, Square, Triangle };