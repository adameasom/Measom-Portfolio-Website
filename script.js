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

// Transition for Left Sidebar
document.addEventListener("DOMContentLoaded", function() {
    const loadingSidebar = document.getElementById("loadingSidebar");
  
    // Set the time (in milliseconds) you want the fade-in transition to take
    const transitionDuration = 1500;
  
    setTimeout(function() {
      loadingSidebar.style.transition = `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`;
      loadingSidebar.style.opacity = 1;
      loadingSidebar.style.transform = "translateY(0)"; // Sliding up to its original position
    }, 200); // Adding a 200ms delay just for better visual effect, you can adjust this value as desired
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
      }, 0); // No delay
    }
  });
}

// Create an IntersectionObserver to detect when the section comes into view
const observer = new IntersectionObserver(fadeInDiv, {
  root: null,
  rootMargin: '0px',
  threshold: 0.8 // Adjust this threshold value to control when the animation starts
});

// Start observing the section
observer.observe(section);