const menu = document.getElementById("menu")
const menuHambuger = document.getElementById("menu-hambuger")
const btnTheme = document.getElementById("theme-btn")


menuHambuger.addEventListener("click", () => {
    menu.classList.toggle("activo")
    menuHambuger.classList.toggle("rotate")
})

btnTheme.addEventListener("click" , e => {
    document.body.classList.toggle("light-mode")

    if(e.target.innerText == "brightness_6"){
        e.target.innerHTML = "dark_mode"
    }else{
        e.target.innerHTML = "brightness_6"
    }
})

(function (){

    
    [...document.querySelectorAll(".menu-item")].forEach(item => {
        item.addEventListener("click", () => { 
            const itemRemoveSelected = document.querySelector(".selected") 
            itemRemoveSelected.classList.remove("selected")

            const itemSelect = document.getElementById(item.dataset.id)
            itemSelect.classList.add("selected")
        })
    })
}())()