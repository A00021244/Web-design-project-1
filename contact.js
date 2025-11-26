document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    
    document.querySelectorAll(".error").forEach(e => e.style.display = "none");
    document.getElementById("successMsg").style.display = "none";

    const first = document.getElementById("firstName").value.trim();
    const last = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const reason = document.getElementById("reason").value.trim();
    const message = document.getElementById("message").value.trim();

    
    if (first === "") {
        document.getElementById("firstNameError").textContent = "First name is required.";
        document.getElementById("firstNameError").style.display = "block";
        valid = false;
    }

    if (last === "") {
        document.getElementById("lastNameError").textContent = "Last name is required.";
        document.getElementById("lastNameError").style.display = "block";
        valid = false;
    }

    if (email === "" || !email.includes("@")) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        document.getElementById("emailError").style.display = "block";
        valid = false;
    }

    if (reason === "") {
        document.getElementById("reasonError").textContent = "Please select a reason for inquiry.";
        document.getElementById("reasonError").style.display = "block";
        valid = false;
    }

    if (message.length < 5) {
        document.getElementById("messageError").textContent = "Message must be at least 5 characters.";
        document.getElementById("messageError").style.display = "block";
        valid = false;
    }

    if (valid) {
        document.getElementById("successMsg").textContent =
            "✔️ Your message has been sent successfully.";
        document.getElementById("successMsg").style.display = "block";
    }
});
