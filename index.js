// requiring our shapes and SVG to render the shapes, inquirer for the prompts, fs promises to write the file and inquirer max length to constrict the input to 3 characters.
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const { Square, Circle, Triangle} = require('./library/shapes');
const SVG = require('./library/svg');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
const { writeFile } = require('fs/promises');

//inquirer prompt to gather user's input

function init(){
return inquirer
    .prompt([
        {
            type: 'maxlength-input',
            message: 'What three characters would you like your logo to have?',
            name: 'text',
            maxLength: 3
        },
        {
            type: 'input',
            message: 'What color would you like the text to be?',
            name: 'textColor',
        },
        {
            type: 'input',
            message: 'Which shape would you like your logo to be?',
            name: 'shapeType',
            choices: ["circle", "square", "triangle"]
        },
        {
            type: 'input',
            messasge: 'What color would you like the shape to be?',
            name: 'shapeColor',
        },
    ])

    //function to rengder the shape, text, color, and console.log whether it was successful or not
    .then(({text, textColor, shapeType, shapeColor}) => {
        let shape;
        switch (shapeType) {
            case "circle":
                shape = new Circle();
                break;
            case "square":
                shape = new Square();
                break;
                default:
                    shape = new Triangle();
                    break;
        }
        shape.setColor(shapeColor);
        const svg = new SVG();
        svg.setShape(shape);
        svg.setText(text, textColor);
            return writeFile("logo.svg", svg.render());  
})
.then(() => {
    console.log("Generated logo.svg");

})
.catch ((error) => {
    console.log(error);
    console.log("Error!");
});
}
// calling the funciton
init();