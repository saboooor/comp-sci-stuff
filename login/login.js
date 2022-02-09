// Login function
function login() {
    // Get username and password
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    // Check if username and password are valid
    if (user != "admin") return alert('Invalid username');
    if (pass != "1234") return alert('Invalid password');

    // approve login
    alert('Login Successful..idk what else you expected from this page');
}