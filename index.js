const phonePicture = document.querySelector('.phone_picture');
const tel = document.querySelector('.telefone')

const toogle = () => {  
  tel.classList.toggle('active')
};

phonePicture.addEventListener('click', toogle );
