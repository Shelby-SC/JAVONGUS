

const cambio=()=>{
    localStorage.setItem('marca',event.target.id)

}
let check=document.getElementById('javucci')

check.addEventListener('click', cambio)
localStorage.removeItem('marca')
let check1=document.getElementById('urbanot')
let check2=document.getElementById('jspenny')
check1.addEventListener('click', cambio)
check2.addEventListener('click', cambio)