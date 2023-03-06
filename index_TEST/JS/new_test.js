

let logo = document.querySelector("#logo")
let page = document.querySelector("#page")
let navi = document.querySelectorAll(".navi")
let navi_i = document.querySelectorAll(".navi_i")
let img_pg = document.querySelector("#img_pg")
let img_urb = document.querySelector("#ub")
let img_jav = document.querySelector("#jc")
let img_js = document.querySelector("#js")
let d = document.querySelector("#dice")
let navy = document.querySelector("#navy")
let btnColor = document.querySelectorAll(".btnColor")

// TEST TEST TEST TEST

function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

// TEST TEST TEST TEST
// let dice = 2
let pos = 0
function urba(){
    pos = 0
    logo.style.color = "#FFFFFF";
    page.style.backgroundColor =  "#FF4D48";
    navy.style.backgroundColor = "#FF4D48";
    // btnColor[0].style.color = "#FF4D48"
    // btnColor[1].styke.fill = "#FFFFFF"
    for (const element of navi) {
        element.style.color = "#FFFFFF"
    }
    for (const element of navi_i) {
        element.style.color = "#FFFFFF"
    }
    
}



function javu(){
    pos = 1
    logo.style.color = "#006637";
    page.style.backgroundColor =  "#FFFCF4";
    navy.style.backgroundColor = "#FFFCF4";
    // btnColor[0].style.color = "#FFFCF4"
    // btnColor[1].styke.fill = "#006637"
    for (const element of navi) {
        element.style.color = "#006637"
    }
    for (const element of navi_i) {
        element.style.color = "#006637"
    }
   
}



function jspenny(){
    pos = 2
    logo.style.color = "#FAB0AE";
    page.style.backgroundColor =  "#BDEFFF";
    navy.style.backgroundColor = "#BDEFFF";
    // btnColor[0].style.color = "#FAB0AE"
    // btnColor[1].styke.fill = "#FAB0AE"
    for (const element of navi) {
        element.style.color = "#F5635F"
    }
    for (const element of navi_i) {
        element.style.color = "#FAB0AE"
    }
    
}




// FUNCIÓN FORWARD QUE SE USABA
// function forward(pos){
//     if(pos === 0){dice = 2}
//     else if(pos === 1){dice = 3}
//     else if(pos === 2){dice = 1}
//     switch (dice) {
//         case 1:
//             // setInterval(urba,1)
//             urba()
//             break;
//         case 2:
//             // setInterval(javu,1)
//             javu()
//             break;
//         case 3:
//             // setInterval(jspenny,1)
//             jspenny()
//             break;
//     }   

   
     
//     console.log("pos "+pos);
// }

// FUNCIÓN BACK QUE SE USABA PARA LOS BOTONES!!!!!!!!!!!!!!!!!
// function back(pos){
//     if(pos === 0){dice = 3}
//     else if(pos === 1){dice = 1}
//     else if(pos === 2){dice = 2}
//     switch (dice) {
//         case 1:
//             // setInterval(urba,1)
//             urba()
//             break;
//         case 2:
//             // setInterval(javu,1)
//             javu()
//             break;
//         case 3:
//             // setInterval(jspenny,1)
//             jspenny()
//             break;
//     }   

//     // if(dice<=1){
//     //     dice = 1
//     // }else{
//     //     dice = dice - 1
//     // }
   
//     // CHECK
//     // console.log("dice "+ dice);
//     console.log("pos "+pos);
// }



// console.log("dice "+ dice);
// console.log("pos "+pos);




// setInterval(media,1)

// function logs(){
    
//     var elementTop1 = img_urb.getBoundingClientRect().top;
//     var elementTop2 = img_jav.getBoundingClientRect().top;
//     var elementTop3 = img_js.getBoundingClientRect().top;
//     console.log("urb " + elementTop1);
//     console.log("jav "+ elementTop2);
//     console.log("js "+ elementTop3);
    
// }
// window.addEventListener("scroll", logs);

// $('.carousel').bind('mousewheel', function(e) {
//     if(e.originalEvent.wheelDelta /120 > 0) {
//         $(this).carousel('next');
//     } else {
//         $(this).carousel('prev');
//     }
// });


// JQuery stuff


let ub = $(".carousel-item")[0]
let jc = $(".carousel-item")[1]
let js = $(".carousel-item")[2]
$('.carousel').bind('mousewheel DOMMouseScroll', function(event){
    
    if (event.originalEvent.wheelDelta /120 > 0 || event.originalEvent.detail /120 < 0) {
        $(this).carousel('prev')
        ub = $(".carousel-item")[0].attributes[0].value
        jc = $(".carousel-item")[1].attributes[0].value
        js = $(".carousel-item")[2].attributes[0].value
        if(ub.includes("active")){
            console.log("Es Jspenny");
            pos = 0
            jspenny()
        }else if(jc.includes("active")){
            console.log("Es Urban");
            pos = 1
            urba()
        }else if(js.includes("active")){
            console.log("Es Javucci");
            pos = 2
            javu()
        }    
    }
    else {
        $(this).carousel('next')
        ub = $(".carousel-item")[0].attributes[0].value
        jc = $(".carousel-item")[1].attributes[0].value
        js = $(".carousel-item")[2].attributes[0].value
        if(ub.includes("active")){
            console.log("Es Javucci");
            pos = 0
            javu()
        }else if(jc.includes("active")){
            console.log("Es Jspenny");
            pos = 1
            jspenny()
        }else if(js.includes("active")){
            console.log("Es Urban"); 
            pos = 2
            urba()
        }        
    }
});


console.log(pos);
// NO TE PERMITE HACER SCROLL A LA PÁGINA!!!! - PONLE 100 A TODO PARA REVERSEARLO
$('html, body').css({
    overflow: 'hidden',
    height: '100%'
});


function media(){
    switch (pos) {
        case 0:
            if(getWidth()<1300){
                img_urb.src = "/imgs/urba6.png"
            }else{
                img_urb.src = "/imgs/urba4.png"
            }
            break;
        case 1:
            if(getWidth()<1300){
                img_jav.src = "/imgs/javucci4.png"
            }else{
                img_jav.src = "/imgs/javucci.png"
            }
            break;
        case 2:
            if(getWidth()<1300){
                img_js.src = "/imgs/jspenny2.png"
            }else{
                img_js.src = "/imgs/jspenny.png"
            }
            break;
        }
}


setInterval(media,1)

let page2 = ""
function remove(){
    $("#page1").detach()
    let page2 = "<h1 style = 'color: black;'> HOLA CHAVALOS </h1>"
    document.querySelector("#page2").innerHTML = page2
}

let btMore = document.querySelector("#ubBT")
btMore.addEventListener("click", remove)
