
var imageList=Array.from(document.querySelectorAll('img')) ;
var onHidden =document.querySelector('.on-hidden');
var hiddenDiv=document.querySelector('.hidden-div');
var exit =document.querySelector('#exit');
var previouse =document.querySelector('#previouse');
var next=document.querySelector('#next');
var currentIndex=0;


for(var i=0; i<imageList.length;i++){
    imageList[i].addEventListener('click',function(e){
        currentIndex= imageList.indexOf(e.target);
        var backImg=e.target.getAttribute('src');
        onHidden.style.cssText=`background-image:url(${backImg})`;
        hiddenDiv.classList.replace('d-none','d-flex');

    }
    );
}

next.addEventListener("click",nextImage);
previouse.addEventListener("click",prevImage);
exit.addEventListener('click',hiddeAll);
// hiddenDiv.addEventListener('keypress', hiddeAll);


function nextImage(){
    currentIndex++;
    if(currentIndex== imageList.length){
        currentIndex=0;
    }
     var backImg=imageList[currentIndex].getAttribute('src');
     onHidden.style.cssText=`background-image:url(${backImg})`;  
}

function prevImage(){
    currentIndex--;
    if(currentIndex== -1){
        currentIndex= imageList.length-1;
    }
     var backImg=imageList[currentIndex].getAttribute('src');
     onHidden.style.cssText=`background-image:url(${backImg})`;  
}
function hiddeAll(){
    hiddenDiv.classList.replace('d-flex','d-none');
}

hiddenDiv.addEventListener('click',function(e){
    if(e.target==hiddenDiv){
        hiddeAll();
    }
})






