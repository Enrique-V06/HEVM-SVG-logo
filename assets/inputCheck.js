import { colorsArray } from './colorsArray';

class inputcheck {
    constructor(text, textColor, logoColor) {
    if (text.length > 3 || text.length === 0 || text === ""){
        throw new Error("Input 'text' must contain maximum 3 characters.");
    }
    if (!(this.colorValid(textColor))){
        throw new Error("The color selected is not valid, please enter a valid one");
    }
    if (!(this.colorValid(logoColor))){
        throw new Error("The color selected is not valid, please enter a valid one");
    }
    this.text = text;
    this.textColor = textColor;
    this.logoColor = logoColor;
}

colorValid(color) {
    const validColors= colorsArray.includes(color.toLowerCase());
    const colorHex = /^#([0-9A-Fa-f]{6}){1,2}$/i.test(color); 
    return validColors || colorHex;
}
setColor(color){
    this.logoColor = color;
}
setText(text, textColor){
    this.text = text;
    this.textColor = textColor;
}
render() {
    return "";
}
}

module.exports = inputcheck;
