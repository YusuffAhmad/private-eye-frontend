var aRegisterForm = document.querySelector('#registerForm');
var registerButton = document.querySelector('#submit');
const host = "https://localhost:5001"

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    registerButton.textContent = `Loading...`
    registerButton.classList.add("loader");
    registerButton.style.display = "block";
    var formData = new FormData(aRegisterForm);

    console.log('Processing...');
    console.log('fd', formData)
    fetch(`${host}/Administrators/Create`, {
            method: "POST",
            body: formData
        })
        .then(function(response) {
            return response.json();
        }).then(function(result) {
            if (result.success == true) {
                alert(result.message)
                location.href = "login.html";
            }
            else if (esult.success == false){
                alert(result.message)
            }
        })
        .catch(function(err) {
            console.log(err.message);
        })
})