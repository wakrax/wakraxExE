let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

// -------------------------------------
// cursor

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "white";
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.top = x;
  cursor.style.left = y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

// ----------------------------
// loading bruh

// function startLoader() {
//     let counterElement = document.querySelector(".counter");
//     let currentValue = 0;

//     function updateCounter() {
//         if (currentValue === 100) {
//           return;
//         }

//         currentValue += Math.floor(Math.random() * 10) + 1;

//         if (currentValue > 100) {
//           currentValue = 100;
//         }

//         counterElement.textContent = currentValue;

//         let delay = Math.floor(Math.random() * 200) + 50;
//         setTimeout(updateCounter, delay);
//     }

//     updateCounter();
// }

// startLoader();

// gsap.to(".counter", 0.25, {
//     delay: 3.5,
//     opacity: 0,
// });

// gsap.to(".bar", 1.5, {
//     delay: 3.5,
//     height: 0,
//     stagger: {
//         amount: 0.5,
//     },
//     ease: "power4.inOut",
// });

