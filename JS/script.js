const popup = document.getElementById("pop-up");
const popup1 = document.querySelector("#pop-up-1"); 
const popup2 = document.getElementById("popup2");
const open = document.getElementById("open-popup-btn");
const close = document.getElementById("close")

open.addEventListener("click",()=>{
    popup1.classList.remove("none");
    popup1.classList.add("pop-up-1");
    open.classList.add("none");
    popup.classList.add("pop-up");
})

close.addEventListener("click",()=>{
    popup1.classList.add("none");
    popup1.classList.remove("pop-up-1");
    open.classList.remove("none");
    popup.classList.remove("pop-up");
})

function openPopup(){
    popup2.classList.add("open-popup")
}

function closePopup(){
    popup2.classList.remove("open-popup")
}

