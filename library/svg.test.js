// requiring our SVG class
const SVG = require("./svg");
// testing our SVG render
describe('SVG', () => {
  test('should render the svg logo', () => {
  const expSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="300"></svg>';
    const svg = new SVG();
    expect(svg.render()).toEqual(expSVG);
  });
});

// testing our text render
test('should render the svg text', () => {
  const expSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width=\"300\" height=\"300\"><text x=\"150\" y=\"160\" font-size=\"60\" text-anchor=\"middle\" fill=\"#333\">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG","#333");
    expect(svg.render()).toEqual(expSVG);
  });