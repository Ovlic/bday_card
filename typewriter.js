var aText = new Array(
    "(Project started on Sept 11 2022, Finished on Sept 16 2022)",
    "",
    "Dear Asia,",
    "I can’t imagine a life where I didn’t meet you. Ever since last August we have been talking nonstop and sharing moments from our lives together. We had our issues but we always were able to recover from them and change our ways. You changed me for the better and I can’t even express how thankful I am for that. Even though you and I don’t talk as much anymore, I want you to know that you still mean a lot to me. Thank you for making the past year so fun and letting me tag along on your adventures.",
    "",
    "Happy Birthday,",
    //"Ovlic"
)

var iSpeed = 50; // time delay of print out (the lower the faster)
var periodpause_speed = 500
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialize text position
var sContents = ''; // initialize contents variable
var iRow; // initialize current row

var typing = false // set typing to false by default
var prevtyping = false // set default previous typing to false
var periodpause = false

var box_cursor = document.getElementById("cursor") // blinking cursor

function typewriter() {
    typing = true
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext"); // div for putting letters
    var outerdiv = document.querySelector("#announc3ment")
    var outerspan = document.querySelector("#centerspan")
    outerdiv = outerspan
    var box_cursor = document.querySelector("#cursor") // blinking cursor
    var isScrolledToBottom = outerdiv.scrollHeight - outerdiv.clientHeight <= outerdiv.scrollTop + 1 // if scrolled to bottom bool

    //console.log(box_cursor.classList)
    box_cursor.removeAttribute("hidden"); // show cursor

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />'; // cant find use?
        //br = document.createElement("br");
        //destination.insertBefore(br, box_cursor);
    }
    // create letter span
    elem = document.createElement("span")
    elem.style.color = "white";
    elem.style.display = "inline";
    elem.style.wordWrap = "break-word";
    var newContent = document.createTextNode(aText[iIndex].substring(iTextPos - 1, iTextPos)); //(write);

    elem.appendChild(newContent);

    destination.appendChild(elem)
    destination.insertBefore(elem, box_cursor);
    if (isScrolledToBottom) { // move cursor
        outerdiv.scrollTop = outerdiv.scrollHeight - outerdiv.clientHeight
    }
    if (iTextPos++ == iArrLength) { // if at last letter of current item
        console.log("at iTextPos++ == iArrLength") // At line break
        typing = false // stop typing
        iTextPos = 0; // reset letter positioning
        iIndex++; // go to next row
        if (iIndex != aText.length) { // if not at end of array
            console.log("at iIndex != aText.length")
            typing = false
            br = document.createElement("br"); // create line break
            br.style.display = "inline";
            destination.insertBefore(br, box_cursor); // insert line break
            iArrLength = aText[iIndex].length; // reset item length to next item
            setTimeout("typewriter()", 500); // reset timer

        
        } else{
            setTimeout(() => {
                var elem = document.getElementById("glitchtxt")
                elem.style.display = "initial"
            }, periodpause_speed)
        }
    
    } else { // not at last letter of current item
        //console.log("at else")
        //typing = false
        if (periodpause){
            console.log("periodpause")
            typing = false
            periodpause = false
            setTimeout("typewriter()", periodpause_speed)//500)
        } else {
            if (aText[iIndex].substring(iTextPos - 1, iTextPos) == ".") {
                console.log("period")
                periodpause = true
                // typing = false
                // setTimeout("typewriter()", 500)
            }
            setTimeout("typewriter()", iSpeed); // keep typing!
        }
    }
    prevtyping = typing // what previous typing bool is 
}
/*
setInterval(function blink() {
    var box_cursor = document.getElementById("cursor")
    if(prevtyping === false && typing === true){
        console.log("prevtyping false typing true")
        box_cursor.removeAttribute("hidden");
    }
    if(typing){
        console.log("typing")
        var box_cursor = document.getElementById("cursor")
        box_cursor.removeAttribute("hidden");
        box_cursor.setAttribute("class", "visible");
        console.log(box_cursor.classList)
        return
    } else {
        console.log("blink else")
        box_cursor.removeAttribute("visible");
        box_cursor.setAttribute("class", "hidden");
        $('#cursor').toggleClass('hidden');
    }
    box_cursor.removeAttribute("visible");
    box_cursor.setAttribute("class", "hidden");
    //box_cursor.className = ''
    document.getElementById("test").style.display= 'none';
    
    //$('#cursordiv').toggleClass('hidden');
    return
}, 600);*/

function blink2() {
    if(prevtyping === false && typing === true){ // if wasnt typing before and start typing
        console.log("prevtyping false typing true")
        //box_cursor.removeAttribute("hidden");
        box_cursor.style.display = "inline";
    }
    if(typing){ // if typing is true
        var box_cursor = document.getElementById("cursor")
        //box_cursor.removeAttribute("hidden");
        //box_cursor.setAttribute("class", "visible");
        box_cursor.style.display = "inline";
        return // dont blink

    } else { // if not typing
        box_cursor = document.getElementById("cursor")
        // initialize blinking
        // if is showing hide else show (toggling between)
        if (box_cursor.style.display === "none") { 
            box_cursor.style.display = "inline";
        } else {
            box_cursor.style.display = "none";
        }
    }
}
setInterval(blink2, 150)
/*
$(document.body).on('keypress', function(event) {
    $('#cursor').before(String.fromCharCode(event.keyCode));
});*/
