 function showDescription(element) {
  const description = element.getAttribute("data-description");
  const descriptionBox = document.getElementById("description-box");
  descriptionBox.textContent = description;
  descriptionBox.classList.add("show");

  // Add animation effect
  setTimeout(() => {
  descriptionBox.classList.remove("show");
  }, 300);
  }

// JavaScript for Infinite Loop Carousel Navigation

// JavaScript for Carousel Navigation
let currentIndex = 0;
const cards = document.querySelectorAll('.partners-card');
const grid = document.querySelector('.partners-grid');
const visibleCards = 4; // Number of cards visible at one time
const cardWidth = 240; // 220px + 20px gap

function slideLeft() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = cards.length - visibleCards;
  }
  updateGridPosition();
}

function slideRight() {
  if (currentIndex < cards.length - visibleCards) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateGridPosition();
}

function updateGridPosition() {
  const offset = currentIndex * -cardWidth;
  grid.style.transform = `translateX(${offset}px)`;
}


const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'Hello from Node.js!',
    text: 'This is a test email sent from Node.js'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
