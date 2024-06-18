const form = document.querySelector("form");
const fullName = document.getElementById("name");
const phoneNumber = document.getElementById("phone");
const email = document.getElementById("mail");
const textArea = document.getElementById("text-area");

function sendEmail() {
    const bodyMessage = `
    <b>Nombre Completo:</b>  ${fullName.value}
    <br><br>
    <b>Email:</b> ${email.value}
    <br><br>
    <b>Telefono:</b> ${phone.value}
    <br><br>
    <b>Mensaje:</b> <br> ${textArea.value}
    `
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "edwardquijada2287@gmail.com",
        Password : "C14B93225033055CC76EDC3FFBA8BCA148BD",
        To : 'edwardquijada2287@gmail.com',
        From : "edwardquijada2287@gmail.com",
        Subject : "Información EnergiVen.com",
        Body : bodyMessage
    }).then(
        message => {
            if(message == "OK") {
                Swal.fire({
                    title: "Muchas Gracias!",
                    text: "Mensaje enviado!",
                    icon: "success"
                });
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});