// Your code goes here
let nav = document.querySelector('.main-navigation')
nav.addEventListener('mouseover', event => {
  nav.style.backgroundColor = 'lightblue'
})
nav.addEventListener('mouseleave', event => {
  nav.style.backgroundColor = 'white'
})

let navItems = document.querySelectorAll('a')
for(let i = 0; i < navItems.length; i++){
  navItems[i].addEventListener('click', event => {
    event.preventDefault()
  })
}

let images = document.querySelectorAll('img')
for(let i = 0; i < images.length; i++){
images[i].addEventListener('mousedown', event => {
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

let x = window.matchMedia("(max-width: 600px)")

window.addEventListener('resize', event => {

  let foot = document.querySelector('.footer p')

  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "pink";
    foot.style.fontSize = '2rem'

  } else {
    document.body.style.backgroundColor = "white";
    foot.style.fontSize = '1.6rem'
  }
})


let content = document.querySelectorAll('.content-section')

for(let i = 0; i < content.length; i++){
  content[i].addEventListener('mouseenter', event => {
    event.target.style.color = 'purple'
  })
  content[i].addEventListener('mouseleave', event => {
    event.target.style.color = 'black'
  })
}
