const header = document.querySelector("headr");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>0)
})