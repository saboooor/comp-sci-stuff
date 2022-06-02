# Get alert module
from js import alert
import random

# 8ball function, used to get a random answer from the array
def updateResponse(event):
    # check if input is empty
    input = Element('input').element.value
    if (input == ''):
        alert('Please enter a question!')
        return
    
    # get responses
    ball = [
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

    # set a specific response to specific inputs, not case or space sensitive
    if ('doesamagic8ballactuallywork' in Element('input').element.value.lower().replace(' ', '')):
        Element('output').element.innerText = '🎱 how dare u doubt me bro';
        return
    elif ('ispythonawesome' in Element('input').element.value.lower().replace(' ', '')):
        Element('output').element.innerText = '🎱 i prefer javascript';
        return
    elif ('yousuck' in Element('input').element.value.lower().replace(' ', '')):
        Element('output').element.innerText = '🎱 why bro i\'m just tryna answer ur question';
        return
    
    i = random.randint(0, len(ball) - 1);
    Element('output').element.innerText = f'🎱 {ball[i]}';
