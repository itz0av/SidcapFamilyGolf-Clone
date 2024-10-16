var curus = document.querySelector("#cursor")
var curusblr = document.querySelector("#cursorblr")

// var head = document.querySelectorAll("#nav h4")
// var btn = document.querySelectorAll("button")

// head.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         curus.style.scale=3
//         curus.style.border="1px solid #fff"
//         curus.style.backgroundColor="transparent" 
//         curus.style.zIndex= 101
//     })
//     elem.addEventListener("mouseleave",function(){
//         curus.style.scale=1
//         curus.style.border="none"
//         curus.style.backgroundColor="#95c11e"  
//     })
// })
// btn.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         curus.style.scale=3
//         curus.style.border="1px solid #fff"
//         curus.style.backgroundColor="transparent" 
//         curus.style.zIndex= 20
//     })
//     elem.addEventListener("mouseleave",function(){
//         curus.style.scale=1
//         curus.style.border="none"
//         curus.style.backgroundColor="#95c11e"  
//     })
// })
document.addEventListener("mousemove",function(dets){
    setTimeout(function() {
    // console.log(dets);
    curus.style.left =dets.x  +"px";
    curus.style.top =dets.y +"px";
}, 70);
})
document.addEventListener("mousemove",function(dets){
    setTimeout(function() {
    curusblr.style.left =dets.x -120 +"px";
    curusblr.style.top =dets.y -120 +"px";
}, 170);
})

gsap.to("#nav",{
    backgroundColor : "#000",
    height:"11vh",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:" top -11%",
        scrub:2
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -50%",
        end:"top -80%",
        scrub:2
    }
})

gsap.from(" #aboutus img,#about-text",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})
gsap.from("#card",{
    scale: 0.8,
    opacity:0,
    duration:1,
    // stagger:0.1,
    scrollTrigger:{
        trigger:"#card",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 50%",
        scrub:1
    }
})
gsap.from(".colm1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:".colm1",
        // markers:true,
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from(".colm2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:".colm2",
        // markers:true,
        scroller:"body",
        start:"top 95%",
        end:"top 85%",
        scrub:4
    }
})
gsap.from(".page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})
