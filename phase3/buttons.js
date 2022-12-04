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
    if (user === "lockncode01" && pass === "user1234") {
        window.open("dashboard.html", "_self");
    } else 
        alert("Please enter valid information");
        return;
}
