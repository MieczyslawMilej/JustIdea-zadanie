document.addEventListener("DOMContentLoaded", () => {

  //OVERLAY

  gsap.to(".overlay", {
    duration: 1.5,
    delay: 0.5,
    top: "-100%",
    ease: "expo.inOut",
    stagger: 0.2
  });



  //HEADING

  gsap.from(".main-heading", {
    duration: 1.5,
    opacity:0,
    delay: 2,
    y: "100",
    ease: "expo.out"
  });

  //SUBHEADING

  gsap.from(".main-subheading", {
    duration: 1.5,
    opacity:0,
    delay: 2.2,
    y: "100",
    ease: "expo.out"
  });


  //GEAR

  gsap.from(".circle-container", {
    duration: 1.5,
    opacity:0,
    delay: 2.8,
    ease: "expo.out"
  });

  //LINKS

  gsap.from(".link-box", {
    duration: 1.5,
    opacity:0,
    delay: 3,
    ease: "expo.out",
    stagger: .1
  });




});
