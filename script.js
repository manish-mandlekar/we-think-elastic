function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init();

gsap.to("#cnt",{
    width:"100%",
    height:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 60%",
        end:"top 80%",
        scrub:4,
        pin:true,
        // markers:true,
    }
})
gsap.from("#page3 h1",{
    y:800,
    stagger:0.5,
    duration:2,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"top 60%",
        end:"top 10%",
        // markers:true,
        scrub:true,
    }
})

document.querySelector("#box").addEventListener("mousemove",function(e){
  document.querySelector(".arrow").style.left = e.x + "px";
  document.querySelector(".arrow").style.top = e.y + "px"
})

document.querySelector("#box").addEventListener("mouseenter",function(e){
  document.querySelector(".arrow").style.scale = 1;
})
document.querySelector("#box").addEventListener("mouseleave",function(e){
  document.querySelector(".arrow").style.scale = 0;
})



document.querySelector("#dabba").addEventListener("mousemove",function(e){
  document.querySelector(".arrow").style.left = e.x + "px";
  document.querySelector(".arrow").style.top = e.y + "px"
})

document.querySelector("#dabba").addEventListener("mouseenter",function(e){
  document.querySelector(".arrow").style.scale = 1;
})
document.querySelector("#dabba").addEventListener("mouseleave",function(e){
  document.querySelector(".arrow").style.scale = 0;
})

document.querySelector("#yl").addEventListener("mousemove",function(e){
  document.querySelector(".arrow").style.left = e.x+"px";
  document.querySelector(".arrow").style.top = e.y+"px"
})

document.querySelector("#yl").addEventListener("mouseenter",function(e){
  document.querySelector(".arrow").style.scale = 1;
})
document.querySelector("#yl").addEventListener("mouseleave",function(e){
  document.querySelector(".arrow").style.scale = 0;
})


gsap.to("#page8 h1,#one,#two,#three",{
  left:"-230%",
  duration:100,
  scrollTrigger:{
    trigger:"#page8",
    scroller:"#main",
    start:"top -10%",
    end:"top -100%",
    scrub:1,
    pin:true,
  }
})

var img = document.querySelector("#front img")
var arr = ["one.svg","two.svg","three.svg","four.svg","five.svg","six.svg","seven.svg","eight.svg","nine.svg","ten.svg","eleven.svg","twelve.svg","thirteen.svg"]
var index = 1;

setInterval(() => {
img.setAttribute("src",arr[index])  
index++
}, 200);
gsap.to("#front",{
  top:"-200%",
  duration:2,
  delay:2,
  ease:Expo.easeInOut,
})
gsap.from("#page1 h1,h2",{
  scaleX:.5,
  opacity:0,
  scaleY:.5,
  duration:1,
  delay:2.8,
  ease:Expo.easeInOut,
})