function aboutButton() {
    window.open("./about.html");
}
function logIn() {
    window.open("./index.html");
}
function github() {
    window.open("https://github.com/prach19/lock_n_code");
}

function toDashboard() {


    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "lockncode" && pass === "user1234") {
        window.open("./dashboard.html", "_self");
    } else {
        alert("Please enter valid information");
        return;
    }
}
