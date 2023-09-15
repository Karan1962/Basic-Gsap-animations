let tl = gsap.timeline({
    defaults:{
        opacity:0,
        ease:"linear",
        duration:1
    }
})

tl.fromTo(".navbar",{
    x:0,
   
},{
    opacity:1,
    duration:2
})

tl.fromTo(".sidebar",{
  width:0,
},{
  width:"30%",
  opacity:1
})

tl.fromTo(".main-img",{
    x:0
},{
    opacity:1,

})

tl.fromTo(".content",{
    x:100
},{
    x:0,
    opacity:1
})