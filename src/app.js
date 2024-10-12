const exit =document.getElementById('exit');
const basij = document.getElementById('box_1');
const anjoman = document.getElementById('box_2');
const basij_box = document.getElementById('box_media');
const anjoman_box = document.getElementById('box_media2');
const social = document.getElementById('social_btn');
const main = document.getElementById('main');
const modal = document.getElementById('modal');

const vid1 = document.getElementById('vid1');
const vid2=document.getElementById('vid2');
const vid3 = document.getElementById('vid3');
const vid4 = document.getElementById('vid4');
const next=  document.getElementById('next');
const back = document.getElementById('back');
function start(){
    social.addEventListener('click' ,function (){
        main.classList.remove('show');
        main.classList.add('hide');
        modal.classList.add('show');
        modal.classList.remove('hide')
    })
    exit.addEventListener('click', function (){
        modal.classList.add('hide');
        modal.classList.remove('show');
        main.classList.add('show');
        main.classList.remove('hide');
        basij.classList.add('show');
        basij.classList.remove('hide');
        basij_box.classList.add('hide');
        basij_box.classList.remove('show');
        anjoman.classList.add('show');
        anjoman.classList.remove('hide');
        anjoman_box.classList.add('hide');
        anjoman_box.classList.remove('show');
    })
    basij.addEventListener('click',function (){
        basij.classList.add('hide');
        basij.classList.remove('show');
        basij_box.classList.add('show');
        basij_box.classList.remove('hide');
    })
    anjoman.addEventListener('click' , function (){
        anjoman.classList.add('hide');
        anjoman.classList.remove('show');
        anjoman_box.classList.add('show');
        anjoman_box.classList.remove('hide');
    })
    next.addEventListener('click' , function (){
        if(vid1.classList.contains('activing')){
            vid1.classList.remove('activing');
            vid1.classList.add('hide');
            vid2.classList.add('activing');
            vid2.classList.remove('hide');
            
        }else if(vid2.classList.contains('activing')){
            vid2.classList.remove('activing');
            vid2.classList.add('hide');
            vid3.classList.add('activing');
            vid3.classList.remove('hide');
        }else if(vid3.classList.contains('activing')){
            vid3.classList.remove('activing');
            vid3.classList.add('hide');
            vid4.classList.add('activing');
            vid4.classList.remove('hide');
        }else if(vid4.classList.contains('activing')){
            vid4.classList.remove('activing');
            vid4.classList.add('hide');
            vid1.classList.add('activing');
            vid1.classList.remove('hide');
        }
    })
    back.addEventListener('click' , function (){
        if(vid1.classList.contains('activing')){
            vid1.classList.remove('activing');
            vid1.classList.add('hide');
            vid4.classList.add('activing');
            vid4.classList.remove('hide');
        }else if(vid2.classList.contains('activing')){
            vid2.classList.remove('activing');
            vid2.classList.add('hide');
            vid1.classList.add('activing');
            vid1.classList.remove('hide');
        }else if(vid3.classList.contains('activing')){
            vid3.classList.remove('activing');
            vid3.classList.add('hide');
            vid2.classList.add('activing');
            vid2.classList.remove('hide');
        }else if(vid4.classList.contains('activing')){
            vid4.classList.remove('activing');
            vid4.classList.add('hide');
            vid3.classList.add('activing');
            vid3.classList.remove('hide');
        }
    })

   
}


start();