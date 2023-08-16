const inquirer = require('inquirer');
const fs = require('fs');

const figures = [
    {name:"circle", value:"circle"},
    {name:"square", value:"square"},
    {name:"triangle", value:"triangle"},
]

const questions = () => {
    return inquirer.prompt([
        {   
            type:"input", 
            name:"text", 
            message:"Enter text for logo (must not be over 3 characters long)."
        },
        {   
            type:"input", 
            name:"textColor", 
            message:"Select the color for the text in your logo"
        },
        { 
            type:"list", 
            name:"shape", 
            message:"Select from the options the shape for your logo", 
            choices: figures
        },
        { 
            type:"input", 
            name:"logoColor", 
            message:"Select the color for your logo"
        },
])}

const logoMake = ({ text, textColor, shape, logoColor }) =>{
    const selectedShape = require("./assets/"+shape);
    const logo = new selectedShape(text, textColor, logoColor)
    const svgElements = logo.render();
    writeToFile(text, svgElements);
}

function writeToFile(text, svgContent) {
    fs.writeFile(text+"Logo.svg",svgContent,(err) =>
    err ? console.log(err): console.log("Logo created")  
)}

function startGenerator(){
    questions()
    .then((data) => { logoMake(data); })
}

startGenerator();