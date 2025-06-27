const form = document.getElementById('form')

const togglePasswordVisibility = (inputElement, toggleElement) => {
    if(inputElement.type === "password") {
        inputElement.type ="text";
        toggleElement.innerHTML = ' <i class="far fa-eye"></i>'
    } else {
        inputElement.type = "password";
        toggleElement.innerHTML =  '<i class="far fa-eye-slash"></i>';
    }
}

const passwordInput = document.getElementById("password")
const togglePassword = document.getElementById("togglePassword")
const passwordConfirm = document.getElementById("passwordConfirm")
const togglePasswordConfirm = document.getElementById("togglePasswordConfirm")

togglePassword.addEventListener("click", () => {
    togglePasswordVisibility(passwordInput, togglePassword)
})

togglePasswordConfirm.addEventListener("click",() =>{
    togglePasswordVisibility(passwordConfirm, togglePasswordConfirm)
})

     function simulateLoading() {
         document.getElementById('form').addEventListener('submit', function(event) {

       
            const button = document.getElementById('loadingButton')
            const buttonText = document.getElementById('buttonText')
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;


          
                event.preventDefault(); // Prevent the default form submission
    
                // Optional: Add form validation here
                
    
                if (name && email) {
                window.location.href = "/Index.html"
                } else {
                    alert('Please fill out all fields');
                }
                
          
            button.disabled = false;

            buttonText.textContent = 'Submitting....'

            setTimeout(() => {
                
            }, 5000);
      
  });
      }    
