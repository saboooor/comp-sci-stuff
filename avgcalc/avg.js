// Update the average number
function updateAvg() {
    // Get the values
    const input = document.getElementById('input').value;
    const array = input.split(',');

    // Add numbers together
    let addednums = 0;
    array.forEach(number => {
        addednums = addednums + parseInt(number);
    });
    
    // calculate the average
    const avg = addednums / array.length;

    // output the average
    if (!isNaN(avg)) document.getElementById('output').innerHTML = `The average of the ${array.length} numbers is: ${avg}`;
    else document.getElementById('output').innerHTML = `Please enter valid numbers separated by commas.`;
}

// Call the function on launch
updateAvg()