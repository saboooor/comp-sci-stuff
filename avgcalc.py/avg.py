# Get alert and math modules
from js import alert

# Update the average number
def updateAvg(event):
    # Get the values
    input = Element('input').element.value
    array = input.split(',')
    
    # Add numbers together
    addednums = 0
    for number in array:
        # Check if number is a digit and alert if not
        if not number.isdigit():
            alert('Please enter valid numbers separated by commas.')
            return
        addednums += float(number)

    # Calculate the average
    avg = addednums / len(array)

    # Output the average
    Element('output').element.innerText = f'The average of the {len(array)} numbers is {avg}'