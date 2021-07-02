function addDelay() {
    var elements = document.getElementsByClassName("delayedtransition");

    for(let i = 0; i < elements.length; i++) {
        elements[i].style.transition = ".15s";
    }
}

window.onload = () => {addDelay();}