const img = document.querySelector('.icon');
const popup = document.querySelector('.principal-menu');
const conect = document.querySelector('#connect');
const conectArrow = document.querySelector('#connect-arrow')
const conections = document.querySelector('.connect-options');
const menu = document.querySelector('.principal-menu');
const title = document.querySelector('.principal-intro-title');
let num = 0;
let y = 0;

// console.log(img);
// img.src = "./images/icon-hamburger.svg";
// menu.appendChild(img);



img.addEventListener('click', () => {
     num += 1
     if(num % 2 == 1){
        img.style.backgroundImage = 'url(./images/icon-close.svg)'
        popup.classList.remove('desactive')

     } else {
        img.style.backgroundImage = 'url(./images/icon-hamburger.svg)'
        popup.classList.add('desactive')
     }

})

conect.addEventListener('click', () => {
   y += 1
   if(y % 2 == 1){
      conections.classList.remove('desactive')
      conect.style.color = 'hsl(240, 2%, 79%)';
      conectArrow.style.backgroundImage = 'url(./images/icon-arrow-light.svg)'
      menu.style.height = '31.5rem';
   } else {
      conections.classList.add('desactive')
      conectArrow.style.backgroundImage = 'url(./images/icon-arrow-dark.svg)'
      conect.style.color = 'hsl(237, 23%, 32%)';
      menu.style.height = '20rem'
   }

})



console.log(conect)

