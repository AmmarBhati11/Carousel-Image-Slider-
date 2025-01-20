let scroolContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")

// This is for mouse wheel to move the image with mouse wheel 
scroolContainer.addEventListener("Wheel",(evt)=>{
    evt.preventDefault();
    scroolContainer.scrollLeft += evt.deltaY
    scroolContainer.style.scrollBehavior="auto"
});

nextBtn.addEventListener("click",()=>{
    scroolContainer.style.scrollBehavior="smooth"
    scroolContainer.scrollLeft += 900
});
backBtn.addEventListener("click",()=>{
    scroolContainer.style.scrollBehavior="smooth"
    scroolContainer.scrollLeft -= 900
});