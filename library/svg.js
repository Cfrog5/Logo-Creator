
// our class to render the final svg string with the text and shape input.
class SVG {
    constructor() {
      this.logoText = "";
      this.logoShape = "";
    
    }
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="300">${this.logoShape}${this.logoText}</svg>` 
  }
  setText(message, color) {
    if (message.length > 3){
      throw new Error('Logo cannot have more than 3 characters')
    }
    this.logoText = `<text x="150" y="160" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`
  }
  setShape(shape){
    this.logoShape = shape.render()
  }
  }
  // exporting the function
  module.exports = SVG;