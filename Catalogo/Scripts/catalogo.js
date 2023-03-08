//Aqui se guardan los datos de la api en una variable
let jsonData;
fetch('../dataBase/datos.json')
    .then(response => response.json())
    .then(data => {
    jsonData = data;
});

//Funcion para la creacion de elementos
const buildElement=el=>{
    return document.createElement(el)
}
//Funcion para la creacion de las tarjetas de productos
const buildCard=item=>{
            //Creacion de los elementos de cada producto
            let cardProduct=buildElement('div')
            let imgF=buildElement("img")
            let imgB=buildElement("img")
            let divIm=buildElement('div')
            let title=buildElement('h5')
            let divTitle=buildElement('div')
            let description=buildElement('div')
            let price=buildElement('p')
            let brand=buildElement('p')
            //Adición de clases para las tarjetas de producto 
            imgB.classList.add('back','card')
            cardProduct.classList.add('cardProduct')
            imgF.classList.add('front','card')
            divIm.classList.add('divImg')
            description.classList.add('description')
            //Adicion de atributos y texto a los elementos
            price.innerHTML=`$${item.price}`
            brand.innerHTML=`Marca ${item.marca}`
            title.innerHTML=item.title
            imgF.src=item.colors.color1.front
            imgB.src=item.colors.color1.back
            divIm.id=item.codigo
            let id=item.codigo
            //Adicion de los elementos al DOM
            description.append(price, brand)
            divTitle.append(title)
            divIm.append(imgF)
            divIm.append(imgB)
            cardProduct.append(divIm)
            cardProduct.append(divTitle)
            cardProduct.append(description)
            container.append(cardProduct)
            //Condicion para agregar las opciones de cambio de color
            if(Object.keys(item.colors).length>1){
                let divColors=document.createElement('div')
                //Loop para agregar todos los colores disponibles
                for(colores in item.colors){
                    drawCircle(item.colors[colores],divColors,id)
                }
                divTitle.append(divColors)
            }
}


//Funcion para iterar sobre el archivo JSON y llenar el DOM acorde a la base de datos
let container=document.getElementById('section')
const postProducts=()=>{
    //setTimeout para esperar el resultado de fetc fetch
    setTimeout(() => {
        //Loop para iterar en cada uno de los elementos disponibles
        for(item of jsonData){
            buildCard(item)
        }
    }, 1000); 
}




//Function para crear los circulos para la eleccion del color
const drawCircle=(iitem, divcol,id)=>{
    let circle=document.createElement('div')
    circle.classList.add('circle')
    let back=iitem.back
    let front=iitem.front
    circle.style.backgroundColor=(`${iitem.hexa}`)
    circle.addEventListener('click', ()=>{changeColor(`${id}`, front, back)})
    divcol.append(circle)
    circle.parentNode.childNodes[0].classList.add('selected')
}


//Funcion que se agrega a los circulos para cambiar de color
const changeColor=(nodo,srcFront,srcBack)=>{
    let containImg=document.getElementById(nodo)
    containImg.childNodes[0].src=srcFront
    containImg.childNodes[1].src=srcBack
    //Loop para eliminar el color verde de los circulos no seleccionados
    for (let i=0;i<event.target.parentNode.childNodes.length;i++){
        event.target.parentNode.childNodes[i].classList.remove("selected")
    }
    event.target.classList.add('selected')
}
//Funcion que limpia todos los filtros
const cleanFilters=()=>{
    let checks=document.querySelectorAll('.check')
    for(let i=0;i<checks.length;i++){
        checks[i].checked=false
    }
    document.querySelectorAll('.rangePrice')[0].value=0
    document.querySelectorAll('.rangePrice')[1].value=1500
}

//Funcion para imprimir en el DOM el valor de los input range
let rangeMin=document.querySelectorAll('.rangePrice')[0]
let rangeMax=document.querySelectorAll('.rangePrice')[1]
let valueMin=document.querySelectorAll('.price')[0]
let valueMax=document.querySelectorAll('.price')[1]
const writePrice=(node)=>{
    let valMin=Number(rangeMin.value)
    let valMax=Number(rangeMax.value)
    //Este if evita que el precio menor sea mas alto que el precio mayor
    //En caso de que el rango del precio menor sea mas grande que el precio mayor, intercambia los valores
    if(valMin>valMax){
        rangeMin.value=valMax
        rangeMax.value=valMin
        valueMax.innerHTML=`$${rangeMax}`
        valueMin.innerHTML=`$${rangeMin}`
    }else{
    node.innerHTML=`$${event.target.value}`
    }}
rangeMin.addEventListener("change",()=>{writePrice(valueMin)})
rangeMax.addEventListener("change",()=>{writePrice(valueMax)})

window.addEventListener('load',postProducts)
window.addEventListener('load',cleanFilters)

























const filtrar=()=>{
    del()
    writeWithFilters()
}





let siVacios
const filter=()=>{
    let filtros=[];  
    let chequeados=[]
    let checks=document.querySelectorAll('.check')
    
    for(let i=0;i<checks.length;i++){
        if(checks[i].checked){
            filtros.push(checks[i].value)
            chequeados.push(checks[i].checked)
        }
    }
    if(chequeados.length==0){ siVacios=true}
    else{siVacios=false}
    console.log(siVacios)
    return filtros
    
}
let check=document.querySelectorAll('.check')
for(let i=0;i<check.length;i++){
    check[i].addEventListener('change', filter)
    check[i].addEventListener('change', filtrar)
}
rangeMin.addEventListener("change",filtrar)
rangeMax.addEventListener("change",filtrar)


const del=()=>{
    let cards=document.querySelectorAll('.cardProduct')
    for(let i=0;i<cards.length;i++){
        cards[i].remove()
    }
}
const writeWithFilters=()=>{
    let filters=filter()
    for(item of jsonData){
        if((filters.some(fil=>item.category.includes(fil))||siVacios)&&(item.price>=Number(rangeMin.value)&&item.price<=Number(rangeMax.value))){
            buildCard(item)
        }
    }
}





