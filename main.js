/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

const contactForm = document.getElementById('contact-form')
        contactMessage=document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_jt0u7qu', 'template_wma6rsh', '#contact-form', 'U9VJRitIez3dlGt4F')
        .then(()=>{
            //show message
            contactMessage.textContent = 'Message sent successfully'
        }, () => {
            //show error message
            contactMessage.textContent = 'Message not sent(service error)'
        })
    
}
contactForm.addEventListener('submit', sendEmail) 