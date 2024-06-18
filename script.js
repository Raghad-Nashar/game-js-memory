let imgs=[
    'img/2.png',
    'img/4.jfif',
    'img/3.jfif',
    'img/5.jfif',
    'img/6.png',
    'img/7.jfif',
];

let rightAudio =new Audio('right.wav');
let wrongAudio =new Audio('wrong.wav');

let main = document.getElementById('main');
let allDives =document.getElementsByTagName('div')




function drawImags(){
    
    for(let i=0 ; i<imgs.length ;i++){
        main.innerHTML +='<div><img src="'+imgs[i]+'"></div>';
    }
}
drawImags();
drawImags();

var flg=true;
var arr=[];

for(let i=0; i<allDives.length;i++){
    allDives[i].addEventListener('click', function(){
        if(flg){
            this.firstChild.style.opacity ='1';

            if(arr.length == 0){
                arr[0]=this;

            }
            else if(arr.length == 1){
                arr[1]=this;
            }
            if(arr.length ==2){
                flg =false;
                setTimeout(checkImg,200);
                
            }
        }
        else{
            return;
        }
    })
}
function checkImg(){
    if(arr[0].firstChild.getAttribute('src') == arr[1].firstChild.getAttribute('src')){
        rightAudio.play();
    }else{
        arr[0].firstChild.style.opacity=0;
        arr[1].firstChild.style.opacity=0;
        wrongAudio.play();
    }

    arr=[];
    flg=true;
}
