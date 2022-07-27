var slideIndex,slides,dots,captionText;
function initGallary(){
    slideIndex=0;
    slides=document.getElementsByClassName("images");
    slides[slideIndex].style.opacity=1;
    captionText=document.querySelector(".captionholder .text");
    captionText.innerHTML=slides[slideIndex].querySelector(".caption").innerText;
    // dots=[];
    // var dotscontainer=document.getElementById("dotContainer");
    // for(var i=0;i<slides.length;i++){
    //     var dot=document.createComment("span");
    //     dot.classList.add("dots");
    //     dotscontainer.append(dot);
    //     dots.push(dot);
    // }
}

initGallary();

function plusslide(n){
    moveslide(slideIndex+n);
}

function moveslide(n){
    var i,current, next;
    var moveslideclass={
        forcurrent:"",
        fornext:""
    }
    var slidetextanimclass;
    if(n>slideIndex){
        if(n>=slides.length){
            n=0;
        }
        moveslideclass.forcurrent="moveleftcurrentclass";
        moveslideclass.fornext="moveleftnextclass";
        slidetextanimclass="slidetextfromtoptobottom";
    }
    else if(n<slideIndex){
        if(n<0){
            n=slides.length-1;
        }
        moveslideclass.forcurrent="moverightcurrentclass";
        moveslideclass.fornext="moverightnextclass";
        slidetextanimclass="slidetextfrombottomtotop";
    }
    if(n!=slideIndex){
        next=slides[n];
        current=slides[slideIndex];
        for(i=0;i<slides.length;i++){
            slides[i].className="images";
            slides[i].style.opacity=0;
        }
        current.classList.add(moveslideclass.forcurrent);
        next.classList.add(moveslideclass.fornext);
        slideIndex=n;
    }
    captionText.style.display="none";
    captionText.className="text "+ slidetextanimclass;
    captionText.innerText=slides[n].querySelector(".caption").innerText;
    captionText.style.display="block";
}
var timer=null;
function setTimer(){
    timer=setInterval(function(){
        plusslide(1);
    },2000)
}
setTimer();
function playpauseSlide(){
    var playpausebtn=document.getElementById("playpausebtn");
    if(timer==null){
        setTimer();
        playpausebtn.style.width="32px";
        playpausebtn.style.height="32px";
        
    }else{
        clearInterval(timer);
        timer=null;
        playpausebtn.style.width="20px";
        playpausebtn.style.height="20px";
        playpausebtn.style.color="red";
       
        
    }
}