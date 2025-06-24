
function funs() {
    document.getElementById('form').addEventListener('submit', function(event) {

  
       const button = document.getElementById('toggleButton')
       const buttonText = document.getElementById('loadingButton')
       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;


     
           event.preventDefault(); // Prevent the default form submission

           // Optional: Add form validation here
           

           if (name && email) {
           
           } else {
               alert('Please fill out all fields.');
           }
           
     
       button.disabled = false;

       buttonText.textContent = 'Making appiontment....'

       setTimeout(() => {
           window.location.href="#form.html"
       }, 3000);
 
});
 }    



 const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
    
    // Switch between Hamburger and Close (X) icon
    const icon = hamburger.querySelector("i");
    if (hamburger.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-times"); // Font Awesome X icon
    } else {
        icon.classList.replace("fa-times", "fa-bars"); // Back to Hamburger
    }
});



















 const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
        
        // Check for saved theme preference or use system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            body.classList.add('dark-mode');
        }
        
        // Toggle dark mode
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            // Save user preference
            const isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });