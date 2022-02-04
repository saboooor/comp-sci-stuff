// Update the mad lib
function updateMadLib() {
    // Get the values
    const plrnoun = document.getElementById('plrnoun').value;
    const adj = document.getElementById('adj').value;
    const verb = document.getElementById('verb').value;
    const noun = document.getElementById('noun').value;

    // Set the background color and update the rgb text under the inputs
    const result = `"There are too many ${plrnoun ? plrnoun : '_____'} on this ${adj ? adj : '_____'} airplane!" I screamed. "Somebody has to ${verb ? verb : '_____'} on the ${noun ? noun : '_____'} to solve this problem!"`;
    document.getElementById('output').innerText = result;
}

// Call the function on launch
updateRGB()