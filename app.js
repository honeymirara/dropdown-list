let s = document.querySelector('.select');
let w = document.querySelector('.wrapper');

s.addEventListener('click', function(){
    if(w.hidden == true){
        w.hidden = false;
    }else {
        w.hidden = true;
    }
})