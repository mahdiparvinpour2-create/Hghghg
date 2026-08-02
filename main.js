// Hero Animation
gsap.from(".content h1",{
    duration:1.5,
    y:80,
    opacity:0
});

gsap.from(".content p",{
    duration:1.8,
    y:80,
    opacity:0,
    delay:0.3
});

gsap.from(".content button",{
    duration:2,
    scale:0,
    opacity:0,
    delay:0.6
});

gsap.from(".navbar",{
    duration:1,
    y:-100,
    opacity:0
});

// Button Effect
document.querySelector(".content button").addEventListener("mouseenter",()=>{
    gsap.to(".content button",{
        scale:1.1,
        duration:.3
    });
});

document.querySelector(".content button").addEventListener("mouseleave",()=>{
    gsap.to(".content button",{
        scale:1,
        duration:.3
    });
});
