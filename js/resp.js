burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.navlist');
rightNav = document.querySelector('.rightNav');


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp')
    navList.classList.toggle('v-class-resp')
    navbar.classList.toggle('hNav-resp')
})
function sendEmail(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mayurshiwal2000@gmail.com",
        Password : "AEB8C1B657323069C4B0B9AFA4BA6D590923",
        To : '18be0268@sipnaengg.ac.in',
        From : "mayurshiwal2000@gmail.com",
        Subject : "Mail received from contact-form",
        Body : "Name: " + name + "<br/> User Email: " + email + "<br/> User Message: " + message
    }).then(
    message => alert("Success!")
    );
}
