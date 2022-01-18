const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
function messageSaved(){
  let name=document.getElementById('fname').value;
  let email = document.getElementById('email').value;
  let number = document.getElementById('number').value;
  let message = document.getElementById('text-area').value;
  if(name.trim() === '')
  {
    alert('Enter your Fullname');
  }
  if(email.trim() === '')
  {
    alert('Enter your Email');
  }
  if(number.trim() === '')
  {
    alert('Enter your Number');
  }
  if(message.trim() === '')
  {
    alert('Enter your message');
  }
   if(email.trim() != '' && number.trim() != '' && name.trim() != '' && message.trim() != '' ){
   alert("Message has been saved with \n Name : "+name.trim()+ " \n Email : "+email.trim()+ "\n number : "+ number.trim() + "\n And Content : " + message.trim());
  //   console.log('hi');
  // name ='';
  // email= '';
  // number ='';
  // message='';
  location.reload();
  }
}