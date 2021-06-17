const header =document.getElementById('header')
const title =document.getElementById('title')
const excerpt =document.getElementById('excerpt')
const profile_img =document.getElementById('profile_img')
const name =document.getElementById('name')
const date =document.getElementById('date')

const animated_bgs = document.querySelectorAll('animated-bg')
const animated_bg_text = document.querySelectorAll('animated-bg-text')

setTimeout(getData , 2500)

function getData() {

    header.innerHTML= '<img src="assets/com.jpg" alt="">'
    title.innerHTML= 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, vel.'
    profile_img.innerHTML= '<img src="assets/bablo.jpg" alt="">'
    name.innerHTML= 'John Doe'
    date.innerHTML= "12 June, 2021 "

    animated_bgs.forEach(bg=>bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg=>bg.classList.remove('animated-bg-text'))
}