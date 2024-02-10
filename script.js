function catAnimation(){
    gsap.to(".hero .herobg #hole,.hero .herobg #cat",{ 
        duration:.2,   
        delay:1, 
        opacity:1, 
        scale:1,
        stagger:0.005  
    })   
}
  

function boxSlide(){
    gsap.from(".service-section .service-one",{  
        x:-150,   
        opacity:0,
        duration:.5,   
        scrollTrigger:{ 
            trigger:".vet-doc-details",  
            scroll:"body",
            scrub:true,     
        } 

    })
    gsap.from(".service-section .service-two",{  
        x:150,       
        opacity:0, 
        duration:.5,   
        scrollTrigger:{
            trigger:".vet-doc-details",  
            scroll:"body",
            scrub:true,    
        } 

    })
}


catAnimation(); 
boxSlide();  
  
 