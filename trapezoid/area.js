// Update the area of trapezoid
function updateArea() {
    // Get the values
    const a = document.getElementById('sideA').value;
    const b = document.getElementById('sideB').value;
    const height = document.getElementById('height').value;
    
    // calculate the area
    const area = ((parseInt(a) + parseInt(b)) / 2) * parseInt(height);

    // output the average
    if (!isNaN(area)) document.getElementById('output').innerHTML = `the area of the trapezoid is: ${area}cm`;
    else document.getElementById('output').innerHTML = `Please enter valid measurements.`;
}

// Call the function on launch
updateArea()