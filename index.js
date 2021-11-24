function scroller(){
    var target = document.querySelectorAll("#inf");
    for(const link of target){
        link.addEventListener("click", clickHandler);
    } 
    function clickHandler(e){
        e.preventDefault();
        const href = this.getAttribute("href");
        document.querySelector(href).scrollIntoView({
            behavior: "smooth"
        });
    }
}
function modal(){
    var target = document.getElementById("mymodal");
    target.style.display="block";
}