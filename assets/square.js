const data = require('./inputCheck')

class square extends data {
    constructor(text, textColor, logoColor) {
    super(text, textColor, logoColor)
    }
    render() {return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${this.logoColor}"/>
    <text x="100" y="100" dominant-baseline="middle" text-anchor="middle"
    fill="${this.textColor}" font-size="60">${this.text}</text>
    </svg>`}
    }
    module.exports = square

