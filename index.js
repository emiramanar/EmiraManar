const emailjs = require('emailjs-com')

const submitform = (e) => {
    e.preventdefult();

    emailjs.sendForm('Manar_Emira', ' template_qv3t6ur', 'contactForm', 'sabK40gPH44pGwBxHRZNl')
    .then(result => alert('Your Message Has Been Sent!'))
    .catch(err => alert('Oops! Please Try Again.'))
}

document.querySelector('.submitbutton').addEventListener('click', submitform)