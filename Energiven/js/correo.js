const form = document.querySelector("form");
const fullName = document.getElementById("name");
const phoneNumber = document.getElementById("phone");
const email = document.getElementById("mail");
const textArea = document.getElementById("text-area");

function sendEmail() {
    const bodyMessage = `
    <b>Full Name:</b>  ${fullName.value}
    <br><br>
    <b>Email:</b> ${email.value}
    <br><br>
    <b>Phone:</b> ${phone.value}
    <br><br>
    <b>Message:</b> <br> ${textArea.value}
    `
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "edwardquijada2287@gmail.com",
        Password : "C14B93225033055CC76EDC3FFBA8BCA148BD",
        To : 'edwardquijada2287@gmail.com',
        From : "edwardquijada2287@gmail.com",
        Subject : "Information EnergiVen.com",
        Body : bodyMessage
    }).then(
        message => {
            if(message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
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