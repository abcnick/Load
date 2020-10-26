const menup = document.querySelector('.menup')
const menup1 = document.querySelector('.menup1')
const menu = document.querySelector('.menu-navegacion')

menup.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})
menup1.addEventListener('click', ()=>{
  src="img/pie_chart.svg"
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != menup){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})


  