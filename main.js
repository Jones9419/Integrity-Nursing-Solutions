const toggleButton = document.getElementById('toggle-button');
const naviList = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
})

function sendEmail() {
        Email.send({
            Host : "https://www.godaddy.com",
            Username : "hannahcjonesrn@gmail.com",
            Password : "IVolution!",
            To : "rachel@integritynursingsolutions.com",
            From : document.getElementById("email").value,
            Subject : "New Contact Form Inquiry",
            Body : "Name: " + document.getElementById("name").value 
            + "<br> Facility: " + document.getElementById("facilty").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone: " + document.getElementById("phone").value
            + "<br> Message" + document.getElementById("message").value
        }).then(
          message => alert("Message Sent Successfully")
        );
}