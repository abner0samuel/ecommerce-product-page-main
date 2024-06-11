document.addEventListener("DOMContentLoaded", () => {
    startApp()
})
function startApp() {
    cartApp()
    viewApp()
    viewIMG()
    addToCart() 
    addNumber()
    menu()
}
function cartApp() {
    let cart = document.querySelector("#cart ");
    let btn = document.querySelector(".container>.nav>.nav_icon>svg");
    btn.addEventListener("click", () => {
        if (cart.style.display === "none") {
            cart.style.display = "block"
        } else {
            cart.style.display = "none"
        }
    })
}
function addToCart() {
    let btn = document.querySelector(".container > .main> .info>.button>.cart>button")
    let image = document.querySelector("#cart-root");
    let del = document.querySelector(".container > .cart > #cart-root >.img> svg")
    let text = document.querySelector(".container> .cart > p")
    del.addEventListener("click",()=>{
        image.style.display = "none"
        text.style.display ="block"
    })
    btn.addEventListener("click",()=>{
        image.style.display = "flex"
        text.style.display ="none"
    })
}
function viewApp() {
    let app1 = document.querySelector(".container > .main2")
    let image = document.querySelector(".container>.main>.gallery>.img>img")
    image.addEventListener("click", () => {
        app1.style.display = "flex"
    })
    let cancl = document.querySelector(".container > .main2 > .main2-root >.svg3 >svg").addEventListener("click",()=>app1.style.display = "none")
}
function viewIMG() {
    let nextDom =document.querySelector("#next")
    let prevDom = document.querySelector("#prev")
    let mainDom =document.querySelector(".container>.main>.gallery")
    let mainDom2 =document.querySelector(".container>.main2>.main2-root>.img")
    let galleryImgDom= document.querySelector(".container>.main>.gallery>.img")
    let galleryImgDom2 = document.querySelector(".container>.main2>.main2-root>.img")
    let secondgalleryImgDom = document.querySelector(".container>.main>.gallery>.second_gallery")
    let secondgalleryImgDom2 = document.querySelector(".container>.main2>.main2-root >.gallery")
    nextDom.onclick =function(){
        showsilder('next');
    }
    prevDom.onclick = function(){
        showsilder('prev');
    }
    function showsilder (type){
        let itemSilder = document.querySelectorAll(".container>.main>.gallery>.img >img");
        let itemSilder2 = document.querySelectorAll(".container>.main2>.main2-root>.img >img")
        let itemThumbnail =document.querySelectorAll(".container>.main>.gallery>.second_gallery>img");
        let itemThumbnail2 =document.querySelectorAll(".container > .main2 >.main2-root> .gallery> img")
        if(type == "next"){
            galleryImgDom.appendChild(itemSilder[0]);
            galleryImgDom2.appendChild(itemSilder2[0]);
            secondgalleryImgDom.appendChild(itemThumbnail[0]);
            secondgalleryImgDom2.appendChild(itemThumbnail2[0]);
            mainDom.classList.add("next");
            mainDom2.classList.add("next");
        }else{
            positionlastItem = itemSilder.length -1;
            galleryImgDom.prepend(itemSilder[positionlastItem])
            secondgalleryImgDom.prepend(itemThumbnail[positionlastItem])
            positionlastItem2 = itemSilder2.length -1;
            galleryImgDom2.prepend(itemSilder2[positionlastItem2])
            secondgalleryImgDom2.prepend(itemThumbnail2[positionlastItem2])
            mainDom.classList.add("prev")
            mainDom2.classList.add("prev");
        }     
    }
}

function addNumber(){
    let next = document.querySelector(".container>.main>.info>.button>.num>.positive");
    let pre = document.querySelector(".container>.main>.info>.button>.num>.Negitive");
    let num = document.querySelector(".container>.main>.info>.button>.num>.number");
    let cart_num = document.querySelector(".container>.nav>.nav_icon>.num");
    let price=document.querySelector(".container> .cart > #cart-root > .img > p >.number")
    let total_price = document.querySelector(".container> .cart >#cart-root > .img > p >.num")
    let current_price = 125.00
    let number =0
    e=cart_num
   function dels(){
    let del = document.querySelector(".container > .cart > #cart-root >.img> svg")
    del.addEventListener("click",()=>{
        number =0
        console.log(number);
    })
   }
    total_price.innerText = `${current_price * number}`
    if(cart_num => 1){
        cart_num.style.display = "flex"
    }
    next.addEventListener("click",()=>{
        number++
        dels()
        num.innerText =number
        cart_num.innerText = number
         price.innerText =`$ ${current_price}.00 X $ ${number} = ` 
         total_price.innerText=` 
         $ ${current_price * number}.00`
    })
    pre.addEventListener("click",()=>{
        if(num.innerText <= 0){
            number = 0
            dels()
            num.innerText = 0
            cart_num.innerText = 0
            price.innerText =`$ ${current_price}.00 X $ ${number} = `
            total_price.innerText = ` $ ${current_price * number}.00`   
        }else{
            dels()
            number--
            num.innerText =number
            cart_num.innerText = number
            price.innerText =`$ ${current_price}.00 X $ ${number} = `
            total_price.innerText =` $ 
             ${current_price * number}.00`
        }
    })
}
function menu(){
    let menubtn =document.querySelector(".container >.nav>.first_nav >.menu");
    let menuLink = document.querySelector(".container >.nav >.first_nav>.link");
    menubtn.addEventListener("click",()=>{
        console.log(menubtn);
        if(menuLink.style.display === "block"){
            menuLink.style.display = "none"
        }else{
            menuLink.style.display = "block"
        }
    })
}