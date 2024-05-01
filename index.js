const threeLine = document.querySelector(".three-line");
const menuCollapse = document.querySelector(".to-show");
const closeMen = document.querySelector("#close-menu");
const hoverUp = document.querySelectorAll(".to-hover__up");
const hoverDown = document.querySelectorAll(".to-hover__down");
const toDark = document.querySelector(".to-dark");

threeLine.addEventListener("click", ()=>{
    menuCollapse.style.display = "block";
    numClick = 0;
    if(menuCollapse.style.display = "block"){
        toDark.style.display = "block";
    }
})

closeMen.addEventListener("click", ()=>{
    menuCollapse.style.display = "none";
    if(menuCollapse.style.display = "none"){
        toDark.style.display = "none";
    }
})

hoverUp.forEach((up, index) =>{
    up.addEventListener("click", ()=>{
        const hoverDownElement = hoverDown[index];
        hoverDownElement.style.display = hoverDownElement.style.display === "block"? "none" : "block";
    })
})