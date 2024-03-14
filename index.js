const phonePicture = document.querySelector('.phone_picture');
const tel = document.querySelector('.telefone')
const cards = document.querySelectorAll('.card')

const toogle = () => {  
  tel.classList.toggle('active')
};

phonePicture.addEventListener('click', toogle );
