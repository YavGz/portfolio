const phonePicture = document.querySelector('.phone_picture');
const tel = document.querySelector('.telefone')
const cards = document.querySelectorAll('.card')
const close = document.querySelector('.close_modal')
const modal = document.querySelector('.modal')


const toogle = () => {  
  tel.classList.toggle('active')
};

const closeModal = () => {
  modal.style.display = 'none'
  // console.log('click en ' + closeModal);
}

close.addEventListener('click', closeModal);
phonePicture.addEventListener('click', toogle );

console.log(close);