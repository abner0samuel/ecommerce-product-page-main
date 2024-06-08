document.addEventListener("DOMContentLoaded", () => {
    console.log("calling startapp");
    startApp()
})
function startApp() {
    cartApp()
    viewApp()
    viewIMG()
    addToCart() 
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
    console.log(app1);
    console.log(image);
    image.addEventListener("click", () => {
        app1.style.display = "flex"
        console.log(`${app1} is display now`);
    })
    let cancl = document.querySelector(".container > .main2 > .main2-root >.svg3 >svg").addEventListener("click",()=>app1.style.display = "none")
}
function viewIMG() {
    let main_img = document.querySelector(".main_img");

    document.querySelectorAll(".imgs").forEach((e) => {
        e.addEventListener("click", () => {
            e.classList.toggle("active")
            let img = document.createElement("img");
            img.src == "./images/image-product-1.jpg"
            main_img.appendChild(img)
            console.log(main_img);
            console.log(e);
        })
    })

}
let main_img = document.querySelector(".main_img");
let img = document.createElement("img");
img.innerHTML == "./mages/image-product-1../ijpg"
main_img.appendChild(img);