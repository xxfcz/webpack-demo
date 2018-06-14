import _ from 'lodash'
import './style.css'
import sunnyPng from './sunny.png'

function component() {
  let element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  let myIcon = new Image()
  myIcon.src = sunnyPng
  element.appendChild(myIcon)
  
  return element
}

document.body.appendChild(component())
