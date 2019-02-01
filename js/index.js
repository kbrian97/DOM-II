// Your code goes here
let nav = document.querySelector('.main-navigation')
nav.addEventListener('mouseover', event => {
  nav.style.backgroundColor = 'lightblue'
})
nav.addEventListener('mouseleave', event => {
  nav.style.backgroundColor = 'white'
})

let images = document.querySelectorAll('img')
for(let i = 0; i < images.length; i++){
images[i].addEventListener('click', event => {
  event.target.style.opacity = '0.5'
})
images[i].addEventListener('dblclick', event => {
  event.target.style.opacity = '1'
  event.stopPropagation()
})

}

let buttons = document.querySelectorAll('.btn')
for(let i = 0; i < buttons.length; i++){

  buttons[i].addEventListener('wheel', event => {
    event.target.style.backgroundColor = 'lightblue'
    event.stopPropagation()
  })
  buttons[i].addEventListener('click', event => {
    event.target.style.color = 'magenta'
    event.target.style.backgroundColor = 'black'
  })

}

window.addEventListener('resize', event => {
  let foot = document.querySelector('.footer p')
  foot.style.fontSize = '3rem'
})


