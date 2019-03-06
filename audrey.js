console.log("connected")
const audrey = document.getElementById("audrey")
/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function () {
    console.log("scrolling")
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    audrey.style.width = window.scrollY * .33 + "px"
    audrey.style.minWidth = "50px"
    /*
    Adjust the height of audrey to be 1/4 the value of
    `window.scrollY`. No lower than 100px, though.
    */
    audrey.style.height = window.scrollY * .25 + "px";
    audrey.style.minHeight = "100px";
})