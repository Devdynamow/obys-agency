


function Trigger(){
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
Trigger()

function loadinAnimation(){
    var tl = gsap.timeline();
    // gsap.to("#loader .load h2", {
    //     duration: 1.5,
    //     textStroke: "1px white",
    //     color: "transparent",
    //     opacity: 1,
    //     fontFamily: "plain light",
    //     fontWeight: 100,
    //     textTransform: "uppercase",
    //     marginLeft: "2vw",
    //     keyframes: [
    //       { opacity: 0, color: "white", },
    //       { fontFamily: "silk serif", textStroke: "1px white", color: "transparent", duration: 1.5 },
    //       { opacity: 1, color: "white", },
    //       { fontFamily: "plain light", textStroke: "1px white", color: "transparent", duration: 1.5 },
    //     ],
    //     repeat: -1,
    //   });
    
    tl.from(".load h1,.load h2",{
        y:120,
        duration:0.8,
        stagger:0.2,
        delay:0.2
    
    })
    .to(".load",{
        opacity:0,
        delay:1.6,
        stagger:-0.2
    })
    .to("#loader",{
        top:"-100%",
        duration:1,
        ease:"power4.out"
    })
    tl.from(".textc h1",{
        y:200,
        opacity:0,
       stagger:{
        amount:0.5
       }
    })
    tl.from("#nav",{
        opacity:0
    },"-=0.5")
    
    var timer = document.querySelector(".timer h4")
    var grow = 0;
    
    var int = setInterval(function(){
        if (grow<101) {
            grow++
            timer.innerHTML = grow
        }
        
    
    },30)
    setTimeout(function(){
        clearInterval(int)
    },3000)  
    
}
loadinAnimation()

function page2Animation(){
var videoc = document.querySelector("#videocontainer")

videoc.addEventListener("mouseenter",function(){
    gsap.to(".mousefollower",{
        opacity:0,
    })
})
videoc.addEventListener("mouseleave",function(){
    gsap.to(".mousefollower",{
        opacity:1,
    })
    gsap.to("#playbtn",{
        left: "70%",
        top: "-13%"
    })
})

var videovideo =document.querySelector("#videocontainer video")
var flag = 0
videoc.addEventListener("click",function(){
    if(flag === 0){
        gsap.to(videovideo,{
            opacity:1
        })
        gsap.to("#playbtn",{
            scale:0.8
        })
document.querySelector("#playbtn").innerHTML = '<i class="ri-pause-line"></i>'
videovideo.play()
flag = 1
        
    }
    else{
             
        gsap.to(videovideo,{
            opacity:1
        })
        gsap.to("#playbtn",{
            scale:1
        })
document.querySelector("#playbtn").innerHTML = '<i class="ri-play-line"></i>'  
videovideo.pause()
flag = 0

    }
    videoc.addEventListener("mousemove",function(details){
        gsap.to("#playbtn",{
            left: details.x - 555,
            top: details.y - 200
        })
    })
    
})

}
page2Animation()


var images =document.querySelectorAll(".images")
// images.forEach(function(imageselem){
//     imageselem.addEventListener("mouseenter", function(){
//        var ih1 = document.querySelectorAll(".imaget h1")
// ih1.forEach(function(e){
//     gsap.to(e,{
//         y:-50,
//         duration:0.5
//     })
// })

//     })
//     imageselem.addEventListener("mouseleave", function(){
//         var ih1 = document.querySelectorAll(".imaget h1")
//  ih1.forEach(function(e){
//      gsap.to(e,{
//          y:0,
//         duration:0.5

//      })
//  })
 
//      })

// })

images.forEach(function(imageselem) {
    imageselem.addEventListener("mouseenter", function() {
        var first = imageselem.querySelector("#first");
        var second = imageselem.querySelector("#second");
        gsap.to(first, {
            y: -50,
            duration: 0.5
        });
        gsap.to(second, {
            y: -50,
            duration: 0.5
        });
    });

    imageselem.addEventListener("mouseleave", function() {
        var first = imageselem.querySelector("#first");
        var second = imageselem.querySelector("#second");
        gsap.to(first, {
            y: 0,
            duration: 0.5
        });
        gsap.to(second, {
            y: 0,
            duration: 0.5
        });
    });
});

Shery.imageEffect(".iimage", {
    style: 6,
    // debug: true,
    gooey:true,
    config:{"noiseDetail":{"value":6.11,"range":[0,100]},"distortionAmount":{"value":2.9,"range":[0,10]},"scale":{"value":59.54,"range":[0,100]},"speed":{"value":0.58,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8333333134651184},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.44,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]}}

  });



Shery.mouseFollower({
    
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


  Shery.makeMagnet("#nav #navpart2 a,#firstsvg", {
    //Parameters are optional.
    
  });
 var footeText = document.querySelectorAll("#footer .text")
 footeText.forEach(function(elem){
    var textCont = elem.textContent;
    var splitted = textCont.split("");
    var clutter = "";
    splitted.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    elem.innerHTML = clutter
 }) 
 var foot = document.querySelector(".footertext")
 foot.addEventListener("mouseenter",function(){
    gsap.to("h1 span",{
        opacity:0,
        stagger:0.05,

    })
    gsap.to("h2 span",{
        opacity:1,
        stagger:0.05,
        delay:0.2
        
    })
 })
 foot.addEventListener("mouseleave",function(){
    gsap.to("h2 span",{
        opacity:0,
        stagger:0.05,
        delay:0.2


    })
    gsap.to("h1 span",{
        opacity:1,
        stagger:0.05,
        
    })
 })

 

var sp1 = document.querySelector(".sp1")

sp1.addEventListener("mousemove",function(move){
    gsap.to("#page1 img",{
        x:move.x - (500),
        y:move.y -(495),
        opacity:1,
        


    })
})

sp1.addEventListener("mouseleave",function(move){
    gsap.to("#page1 img",{
        
        opacity:0


    })
})
var sp2 = document.querySelector(".sp2")
sp2.addEventListener("mousemove",function(moveimage){
    gsap.to("#page1 img",{
        x:moveimage.x - (500),
        y:moveimage.y -(495),
        opacity:1,
        


    })
    
})
sp2.addEventListener("mouseleave",function(moveimage){
    gsap.to("#page1 img",{
        
        opacity:0


    })
})
var sh1 = document.querySelector("#page1 .textc .sp1");

    // Add event listener for mouseenter event
    sh1.addEventListener("mouseenter", function() {
        // Apply the CSS class with text-stroke property
        sh1.classList.add("text-stroke");
        // Change text color to yellow
        sh1.style.color = "yellow";
    });

    // Add event listener for mouseleave event (optional)
    sh1.addEventListener("mouseleave", function() {
        // Remove the CSS class with text-stroke property
        sh1.classList.remove("text-stroke");
        // Change text color back to default
        sh1.style.color = "";
    });