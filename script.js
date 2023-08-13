// Transition for the Hero Section
document.addEventListener("DOMContentLoaded", function() {
    const loadingHero = document.getElementById("loadingHero");
  
    // Set the time (in milliseconds) you want the fade-in transition to take
    const transitionDuration = 1500;
  
    setTimeout(function() {
      loadingHero.style.transition = `opacity ${transitionDuration}ms, filter ${transitionDuration}ms, transform ${transitionDuration}ms`;
      loadingHero.style.opacity = 1;
      loadingHero.style.filter = "blur(0)";
      loadingHero.style.transform = "translateY(0)"; // Sliding down to its original position
    }, 200); // Adding a 200ms delay just for better visual effect, you can adjust this value as desired
});


// Transition for Down Arrow, after About text
document.addEventListener("DOMContentLoaded", function() {
  const loadingArrow = document.getElementById("loadingArrow");

  // Set the time (in milliseconds) you want the fade-in transition to take
  const transitionDuration = 1500;

  setTimeout(function() {
    loadingArrow.style.transition = `opacity ${transitionDuration}ms, filter ${transitionDuration}ms, transform ${transitionDuration}ms`;
    loadingArrow.style.opacity = 1;
    loadingArrow.style.filter = "blur(0)";
    loadingArrow.style.transform = "translateY(0)"; // Sliding down to its original position
  }, 1000); // Adding a 800ms delay just for better visual effect, you can adjust this value as desired
});


// Transition for Left Sidebar
document.addEventListener("DOMContentLoaded", function() {
    const loadingSidebar = document.getElementById("loadingSidebar");
  
    // Set the time (in milliseconds) you want the fade-in transition to take
    const transitionDuration = 1500;
  
    setTimeout(function() {
      loadingSidebar.style.transition = `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`;
      loadingSidebar.style.opacity = 1;
      loadingSidebar.style.transform = "translateY(0)"; // Sliding up to its original position
    }, 2000); // Adding a 2000ms delay just for better visual effect, you can adjust this value as desired
});


// Transition for About Section
const divElement = document.getElementById('loadingAbout');
const section = document.getElementById('About');

function fadeInDiv(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        divElement.style.opacity = '1';
        divElement.style.filter = 'blur(0)';
        divElement.style.transform = 'translateX(0)'; // Reset the transform to initial state
        observer.unobserve(section);
      }, 500); // 500ms delay
    }
  });
}

// Create an IntersectionObserver to detect when the section comes into view
const observer = new IntersectionObserver(fadeInDiv, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Adjust this threshold value to control when the animation starts
});

// Start observing the section
observer.observe(section);


// Transition for each skill
document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box');
  const transitionDuration = 1000; // 1000ms

  function animateBoxes(index) {
    if (index >= boxes.length) return;
    const box = boxes[index];
    box.style.transition = `transform ${transitionDuration}ms, opacity ${transitionDuration / 2}ms`;
    box.style.transform = 'translateY(0)';
    box.style.opacity = '1';
    setTimeout(() => {
      animateBoxes(index + 1);
    }, transitionDuration / 2); // Delay for the next animation
  }

  // Use Intersection Observer to trigger the animation when the section is in the viewport
  const skillsSection = document.getElementById('skillsBox');
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5, // Trigger when at least 50% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start the animation only when the section enters the viewport
        animateBoxes(0);
        observer.unobserve(entry.target); // Stop observing once triggered
      }
    });
  }, options);

  observer.observe(skillsSection);
});
