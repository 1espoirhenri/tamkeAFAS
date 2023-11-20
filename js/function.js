// khoi tao cac thong so
let btn1 = document.querySelector('#btn1');
let img1 = document.querySelector('#call');
let btn2 = document.querySelector('#btn2');
// functions nut bam
// const database=firebase.database();
// const deviceRef=database.ref('quan1');

btn1.addEventListener('click', ()=>{
    img1.src = '/lab1/image/call.png'; 
    firebase.database().ref("thietbi_call").set({call: '1'})
})
btn2.addEventListener('click', ()=>{
    img1.src = '/lab1/image/telephone.png';
    firebase.database().ref("thietbi_call").set({call: '0'})
})

// khoi tao cac thong so
let btn3 = document.querySelector('#btn3');
let img2 = document.querySelector('#led');
let btn4 = document.querySelector('#btn4');
// functions nut bam
btn3.addEventListener('click', ()=>{
    img2.src = '/lab1/image/elecon-unscreen.gif'; 
    firebase.database().ref("thietbi_elec").set({elec:'1'})
})

btn4.addEventListener('click', ()=>{
    img2.src = '/lab1/image/elecoff.png';
    firebase.database().ref("thietbi_elec").set({elec:'0'})
})

// khoi tao cac thong s
let btn5 = document.querySelector('#btn5');
let img3 = document.querySelector('#loa');
let btn6 = document.querySelector('#btn6');
let btn7 = document.querySelector('#btn7');
let img4 = document.querySelector('#alarm');
let btn8 = document.querySelector('#btn8');

// functions nut bam
btn5.addEventListener('click', ()=>{
     img3.src = '/lab1/image/water.png' ;
     firebase.database().ref("thietbi_water").set({water:'1'})

})
btn6.addEventListener('click', ()=>{
    img3.src = '/lab1/image/wateroff-rbg.png';
    firebase.database().ref("thietbi_water").set({water: '0'})

})
var audio = new Audio('alarm-sound.mp3');
let isOn = false
// functions nut bam
btn7.addEventListener('click', ()=>{   
        isOn = !isOn;
        // Thay đổi trạng thái hiển thị
        if (isOn) {
            img4.src = '/lab1/image/micro.gif' ;
            firebase.database().ref("thietbi_mic").set({mic: '1'})
            firebase.database().ref("thietbi_alarm").set({alarm:'0'})
            btn7.textContent = 'Loa';
            audio.pause();
        } else {
            img4.src = '/lab1/image/alarm-unscreen.gif';
            firebase.database().ref("thietbi_alarm").set({alarm:'1'})
            firebase.database().ref("thietbi_mic").set({mic: '0'})
            btn7.textContent = 'Mic';
            audio.play();         
        }
})
btn8.addEventListener('click', ()=>{
    img4.src = '/lab1/image/volume-mute.png';
    firebase.database().ref("thietbi_alarm").set({alarm: '0'})
    firebase.database().ref("thietbi_mic").set({mic: '0'})
    audio.pause();
})