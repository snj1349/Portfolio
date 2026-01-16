// Mobile Nav Toggle Script
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    // Toggle aria-expanded attribute for accessibility
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
});

// Keyboard accessible toggle (Enter or Space)
navToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navToggle.click();
    }
});



//==========================


// ===== EmailJS Integration =====
// Load EmailJS (CDN script)
// (function() {
//     const script = document.createElement("script");
//     script.src = "https://cdn.emailjs.com/dist/email.min.js";
//     script.onload = () => emailjs.init("0NAZDSEf4c8Z-Lqlq"); // Replace with your EmailJS Public Key
//     document.head.appendChild(script);
// })();

// // Handle form submit
// document.getElementById("contact-form").addEventListener("submit", function(e) {
//     e.preventDefault();

//     emailjs.sendForm("service_e2eiozi", "template_qwgcg4l", this)
//         .then(() => {
//             alert("✅ Message sent successfully!");
//             this.reset();
//         })
//         .catch(err => {
//             alert("❌ Failed to send message. Error: " + JSON.stringify(err));
//         });
// });
