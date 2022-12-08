var error = document.getElementById("error");


function checkEmail() {
    var email = document.getElementById('email');
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
        //alert('Please provide a valid email address');
        document.addEventListener("click", function(event){
            event.preventDefault()
        });
        error.textContent = "Please enter a valid email";
        error.style.color = "black";
        email.focus;
        return false;
    }
};

