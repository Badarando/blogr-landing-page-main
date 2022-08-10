const img = document.querySelector('.icon');
let num = 0;

console.log(img)

// console.log(img);
// img.src = "./images/icon-hamburger.svg";
// menu.appendChild(img);

img.addEventListener('click', () => {
     num += 1
     if(num % 2 == 1){
        img.style.backgroundImage = 'url(./images/icon-close.svg)'
     } else {
        img.style.backgroundImage = 'url(./images/icon-hamburger.svg)'
     }

})

