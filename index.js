// //document.querySelector('h1').innerHTML = "Heheheh"

// //a.innerHTML = "Antarip";


// a.style.color = "red"

// let a = document.querySelector('h1');

// function stl(){
//     a.innerHTML = "Somthing"
// }

// a.addEventListener("click",stl)
let bulb = document.querySelector("#bulb");
let onBtn = document.querySelector("#on");

let ant = 0;

function on(){
    if(ant == 0){
        bulb.style.background = "yellow";
        ant = 1;
    }else{
        bulb.style.background = "transparent"
        ant = 0;
    }
}

onBtn.addEventListener('click',on)

//let offBtn = document.querySelector("#off");
// offBtn.addEventListener('click',off)
// function off(){
//     bulb.style.background = ""
// }