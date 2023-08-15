const data = require('./inputCheck');

class circle extends data {
    constructor(text, textColor, logoColor) {
    super(text, textColor, logoColor);
    }
    render() {return `<svg width="200" height="200" 
    fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" 
    r="80" fill="${this.logoColor}"/><text x="150" y="125" dominant-baseline="middle" 
    text-anchor="middle" fill="${this.textColor}" font-size="60">${this.text}</text></svg>`}
}
module.exports = circle;