// start nav

let open = document.getElementById("open-id");

let nav=document.querySelector(".all-link")
let key=document.querySelector(".key")
open.addEventListener("click", function () {
    
    nav.classList.add("active")
  
})

let close = document.querySelector(".close")
console.log(close)
close.addEventListener("click", function () {
    nav.classList.remove("active")

})
// end nav

// for cart
let bigDiv = document.querySelector(".gallery-images img")
console.log(bigDiv)
let shirts=document.querySelectorAll(".small a img")
shirts.forEach(function (shirt) {
console.log(shirt)
    shirt.addEventListener("click", function (e) {
        e.preventDefault()
   bigDiv.src= e.target.dataset.src

    })



})



let page = document.querySelectorAll(".product-boxes .pro-box")
page[0].onclick = function () {
    window.location.href="cart.html"
}



// for cart
