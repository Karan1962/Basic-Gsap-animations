// Expo.easeInOut

let tl=gsap.timeline({
        repeat:-1,
});

tl.to(".images",{
    width:"100%",
    stagger:2,
    ease:Expo.easeInOut,

},"a").to(".title",{
    top:0,
    stagger:2,
    ease:Expo.easeInOut
},"a").to(".title",{
    top:"-100px",
    stagger:2,
    ease:Expo.easeInOut,
    delay:1
},"a")

