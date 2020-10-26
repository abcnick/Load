const menup = document.querySelector('.menup')
const menu = document.querySelector('.menu-navegacion')

menup.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != menup){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})


  