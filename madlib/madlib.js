// Update the mad lib
function updateMadLib() {
    // Get the values
    const subject = document.getElementById('subject').value;
    const color = document.getElementById('color').value;
    const noun = document.getElementById('noun').value;

    // Set the output
    const result = `"In ${subject ? subject : '_____'} class, our teacher was wearing a ${color ? color : '_____'} ${noun ? noun : '_____'}."`;
    document.getElementById('output').innerText = result;
}

// Call the function on launch
updateMadLib()