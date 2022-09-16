
const applyAnimation = document.getElementById("activatebutton")
var box = document.querySelector('#announc3ment');
var loading_text = document.querySelector('#loading_text')
var loading_screen = document.querySelector("#loading_screen")
var background_img = document.querySelector("#background_img")
var cover_load = document.querySelector("#cover_load")

detect_anim_w = false
detect_anim_h = false


box.addEventListener('transitionend', () => {
    console.log("here")
    if (detect_anim_w == false){
        detect_anim_w = true
        console.log("set detect_anim_w to true")
        // box.classList.remove('active_width');
        box.classList.toggle('active_height');
        console.log("set detect_anim_h to false")
    } else if (detect_anim_w && detect_anim_h == false){
        console.log("detect_anim_w is true and detect_anim_h is false")
        detect_anim_h = true
        console.log("set detect_anim_h to true")
        // box.classList.remove('active_height');
    }
});

function showTextBox(){
    var centerspan = document.getElementById('centerspan')
    centerspan.style.minHeight = "97.5vh"
    var adiv = document.querySelector("#announc3ment")
    adiv.setAttribute("data-augmented-ui", "")
    adiv.classList.add("announc3ment")
    
    adiv.appendChild(document.createElement("br"))
    //adiv.innerHTML = "The trillogy concludes Aug 2021."
    setTimeout(() => {
        var box_cursor = document.querySelector("#cursor") // blinking cursor
        box_cursor.classList.toggle("hidden")
        // box_cursor.
        typewriter()
        setInterval(blink2(), 150)
    }, 1000)
    
}

//loading_text.addEventListener("click", function(e){
setTimeout(() => {
    // e = loading_text
    // console.log(e.target.localName)
    // if (e.target.localName === "div") {
    var removeTarget = loading_text // e.target.parentNode.parentNode;
    var black_div = document.querySelector("#bg")
    console.log(removeTarget)
    removeTarget.style.opacity = '0';
    loading_screen.style.opacity = '0';
    setTimeout(() => {
        removeTarget.remove()
        // black_div.animate({ opacity: 1 }, 1000);
        setTimeout(() => {
            // black_div.classList.toggle('active_hide')
            loading_screen.classList.toggle('fadeOut')//.remove()
            cover_load.remove()
            background_img.classList.toggle("show")
        },250)
        setTimeout(() => {
            // black_div.classList.toggle('active_hide')
            black_div.remove()
            showTextBox()
            console.log("after showTextBox()")
            setTimeout(() => {
                box.classList.toggle('active_width');
            }, 100)
        },1250)  
        
    }, 500);
        
}, 3550)//1750); // SET TO 5000 FOR FINAL
