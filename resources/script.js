let toggleDisplay= false;
function onDisplayMenu() {
    let menuMobile = document.getElementById("menu");
    toggleDisplay = !toggleDisplay
    if (toggleDisplay == true) menuMobile.style.top = "60px";
    else menuMobile.style.top = "-205px";
    console.log("Booo", toggleDisplay )
}