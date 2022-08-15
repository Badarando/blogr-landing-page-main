const img = document.querySelector('.icon');
const popup = document.querySelector('.principal-menu');
const conect = document.querySelector('#connect');
const conections = document.querySelector('.connect-options');
let num = 0;

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
   conections.classList.remove('desactive')
   
})



console.log(conect)

