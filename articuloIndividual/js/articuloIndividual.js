
const COLOR_BTNS = document.querySelectorAll('.color');
const MAIN_IMG = document.querySelector('.container.sproduct img');
const SMALL_IMGS_CONTAINER = document.querySelector('.small-img-group');

COLOR_BTNS.forEach(color => {
  color.addEventListener('click', () => {
    let colorNameClass = color.className;
    if(!color.classList.contains('active-color')){
      let colorName = colorNameClass.slice(colorNameClass.indexOf('-') + 1, colorNameClass.length);
      resetActiveBtns();
      color.classList.add('active-color');
      setNewColor(colorName);
    }
  });
});

// resetting all color btns
function resetActiveBtns(){
  COLOR_BTNS.forEach(color => {
    color.classList.remove('active-color');
  });
}

// set new color on the banner right and small images
function setNewColor(color){
  MAIN_IMG.src = `../img/camisa4c/1_${color}.png`;
  for(let i = 0; i < 4; i++) {
    SMALL_IMGS_CONTAINER.children[i].children[0].src = `../img/camisa4c/${i+1}_${color}.png`;
  }
}

function toggleTable() {
  var tabla = document.getElementById("tabla-tallas");
  var boton = document.querySelector(".tallas-toggle i:last-child");
  if (tabla.style.display === "none") {
    tabla.style.display = "table";
    boton.classList.remove("fa-plus");
    boton.classList.add("fa-minus");
  } else {
    tabla.style.display = "none";
    boton.classList.remove("fa-minus");
    boton.classList.add("fa-plus");
  }
}

// boton
