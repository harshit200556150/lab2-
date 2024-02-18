var pageBg = document.querySelector("html");
var sliders = document.getElementsByTagName("input");
var rgb = [0, 0, 0];

function handleSliderChange() {
    var whichSlider = this.getAttribute("id");
    var sliderValue = this.value;
    rgb = changeRgb(whichSlider, sliderValue);
    var newCSS = writeCSS(rgb);
    pageBg.style.backgroundColor = newCSS;
}

for (var i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("input", handleSliderChange);
}

function changeRgb(channel, value) {
    switch (channel) {
        case "red":
            rgb[0] = value;
            break;
        case "green":
            rgb[1] = value;
            break;
        case "blue":
            rgb[2] = value;
            break;
    }
    return rgb;
}

function writeCSS(newRgb) {
    var newColor = 'rgb(';
    for (var i = 0; i < newRgb.length; i++) {
        newColor += newRgb[i];
        if (i < newRgb.length - 1) {
            newColor += ',';
        }
    }
    newColor += ')';
    return newColor;
}
