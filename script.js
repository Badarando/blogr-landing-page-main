const img = document.querySelector('.icon');

console.log(img)

// console.log(img);
// img.src = "./images/icon-hamburger.svg";
// menu.appendChild(img);

img.addEventListener('click', () => {
    let x = 1;
    x = 1 + 1;
    if(x % 2 == 0){
        img.style.backgroundImage = 'url(./images/icon-close.svg)'
    } else {
        img.style.backgroundImage = 'url(./images/icon-hamburger.svg)'
    }
    console.log("clicando")
    console.log(x)
})