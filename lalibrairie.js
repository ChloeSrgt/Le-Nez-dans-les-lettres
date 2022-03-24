const message = "Votre message a bien été envoyé, nous vous répondrons dans les plus brefs délais!"

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
});