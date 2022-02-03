// Prompt user for data
let name = prompt("what's your name");
let focus = prompt("what do you want from me");

// Set data in the page
document.getElementById('name').innerText = name;
document.getElementById('no').innerText = focus;