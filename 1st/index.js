let btn = document.querySelector('button');
let txt = document.querySelector('h5');

let cond = 1;
btn.addEventListener('click',function(){
    if(cond == 1){
        txt.innerHTML = "Friend"
        txt.style.color = "green"
        btn.innerHTML = "Remove"

        cond = 0
    }else{
        txt.innerHTML = "Stranger"
        txt.style.color = "Red"
        btn.innerHTML = "Add Friend"

        cond = 1
    }
});

let main = document.querySelector('#main')
let cur = document.querySelector('#cursor')

main.addEventListener("mousemove",function(dot){
    cur.style.left = dot.x + "px";
    cur.style.top = dot.y + "px";
})