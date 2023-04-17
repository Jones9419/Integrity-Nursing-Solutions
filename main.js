const toggleButton = document.getElementById('toggle-button');
const naviList = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
})

function sendEmail() {
        Email.send({
            Host : "smtp.gmail.com",
            Username : "michaeljones081615@gmail.com",
            Password : "Kentucky22@",
            To : 'michaeljones081615@gmail.com',
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