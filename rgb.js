// Update the rgb color
function updateRGB() {
    // Get the slider values
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');

    // Set the output values under the sliders
    document.getElementById('rval').innerText = redSlider.value;
    document.getElementById('gval').innerText = greenSlider.value;
    document.getElementById('bval').innerText = blueSlider.value;

    // Set the background color and update the rgb text under the inputs
    const rgbstring = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
    document.body.style.backgroundImage = `linear-gradient(315deg, ${rgbstring}, #00131a)`;
    document.getElementById('rgb').innerText = rgbstring;
}

// Call the function on launch
updateRGB()