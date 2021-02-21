const btn = document.getElementById("button");
const email = document.getElementById("email");
const alertMsg = document.getElementById("alert-msg");

btn.addEventListener("click", (e) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        alertMsg.style.visibility = "hidden";

    } else {
        alertMsg.style.visibility = "visible";
    }
    e.preventDefault();
});