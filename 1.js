import "./1.css"
import img from './assets/img.png'
console.log('Hello World')

const imgG = document.createElement('img')
imgG.className = 'js-image'
imgG.src = img
document.body.append(imgG)