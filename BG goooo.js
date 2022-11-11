let mmak1 = document.getElementById('mmak1');
let mmak2 = document.getElementById('mmak2');
let btn = document.getElementById('btn');
let Bg = document.getElementById('Bg');

window.addEventListener('scroll' , function(){
    let value = window.scrollY;
    btn.style.top = 50 + values * -1.25 +'%' ;
    Bg.style.top = values = 1.25 +'px';
})