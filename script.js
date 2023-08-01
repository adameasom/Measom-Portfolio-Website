// Transition for the Hero Section
document.addEventListener("DOMContentLoaded", function() {
    const loadingHero = document.getElementById("loadingHero");
  
    // Set the time (in milliseconds) you want the fade-in transition to take
    const transitionDuration = 1500;
  
    setTimeout(function() {
      loadingHero.style.transition = `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`;
      loadingHero.style.opacity = 1;
      loadingHero.style.transform = "translateY(0)"; // Sliding down to its original position
    }, 200); // Adding a 200ms delay just for better visual effect, you can adjust this value as desired
});

// Tansition for Left Sidebar
document.addEventListener("DOMContentLoaded", function() {
    const loadingSidebar = document.getElementById("loadingSidebar");
  
    // Set the time (in milliseconds) you want the fade-in transition to take
    const transitionDuration = 1500;
  
    setTimeout(function() {
      loadingSidebar.style.transition = `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`;
      loadingSidebar.style.opacity = 1;
      loadingSidebar.style.transform = "translateY(0)"; // Sliding down to its original position
    }, 200); // Adding a 200ms delay just for better visual effect, you can adjust this value as desired
});
  