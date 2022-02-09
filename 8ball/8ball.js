// 8ball function, used to get a random answer from the array
function update8Ball() {
    // check if input is empty
    if (document.getElementById("input").value == "") return alert('Please enter a question!');

    // get responses
    const ball = [
        "Seems pretty likely",
        "Absolutely",
        "Definitely",
        "I think so",
        "Probably",
        "The opposite is certain",
        "Seems pretty unlikely",
        "Absolutely not",
        "Definitely not",
        "I don't think so",
        "Signs point to no",
        "I'm not sure",
        "That's hard to say at this time",
        "Figure it out on your own",
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful",
        "No",
        "Probably not",
        "I don't know",
        "Bro i'm just a ball what do you expect from me",
        "There's plenty of doubt"
    ]

    // set a specific response to specific inputs, not case or space sensitive
    if (document.getElementById("input").value.toLowerCase().replace(/ /g, '').includes("doesamagic8ballactuallywork")) {
        return document.getElementById("8ball").innerHTML = `🎱 how dare u doubt me bro`;
    }
    else if (document.getElementById("input").value.toLowerCase().replace(/ /g, '').includes("isjavascriptawesome")) {
        return document.getElementById("8ball").innerHTML = `🎱 ya bro it's the best`;
    }
    else if (document.getElementById("input").value.toLowerCase().replace(/ /g, '').includes("yousuck")) {
        return document.getElementById("8ball").innerHTML = `🎱 why bro i'm just tryna answer ur question`;
    }

    // Get random index and reply with the string in the array of the index
    const i = Math.floor(Math.random() * ball.length);
    document.getElementById("8ball").innerHTML = `🎱 ${ball[i]}`;
}