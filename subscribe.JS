let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameerr = document.getElementById("nameErrMsg");
let emailerr = document.getElementById("emailErrMsg");
nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameerr.textContent = "Required*";
    } else {
        nameerr.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailerr.textContent = "Required*";

    } else {
        emailerr.textContent = "";
    }
});
