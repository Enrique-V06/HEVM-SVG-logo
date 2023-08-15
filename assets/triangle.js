const data = require('./inputCheck')

class triangle extends data {
    constructor(text, textColor, logoColor) {
    super(text, textColor, logoColor)
    }
        render() {return `<svg width="200" height="200" 
        fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 0 200, 200 0, 200" 
        fill="${this.logoColor}"/><text x="100" y="100" dominant-baseline="middle" text-anchor="middle" 
        fill="${this.textColor}" font-size="60">${this.text}</text></svg>`}
    }
    module.exports = triangle