// importing our shapes classes
const { Circle, Triangle, Square } = require('./shapes');
// testing our square class
describe('Square', () => {
  test('should render a red square', () => {
  const expSVG = '<rect width="300" height="300" fill="red" />';
    const square = new Square();
    square.setColor("red");
    const actSVG = square.render();
    expect(actSVG).toEqual(expSVG);
  });
})
// testing our circle class
describe('Circle', () => {
  test('should render a red circle', () => {
  const expSVG = '<circle cx="150" cy="150" r="140" fill="red" />';
    const circle = new Circle();
    circle.setColor("red");
    const actSVG = circle.render();
    expect(actSVG).toEqual(expSVG);
  });
})
// testing our triangle class
describe('Triangle', () => {
  test('should render a red triangle', () => {
  const expSVG = '<polygon points="170,0 350,250 20,210" fill="red" />';
    const triangle = new Triangle();
    triangle.setColor("red");
    const actSVG = triangle.render();
    expect(actSVG).toEqual(expSVG);
  });
})