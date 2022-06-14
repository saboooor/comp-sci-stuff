from js import alert
import random

def roll_loop(amount):
  result = []
  for x in range(amount):
    dice1 = random.randint(1, 6);
    dice2 = random.randint(1, 6);
    result.append(f'{dice1}, {dice2} (sum: {dice1 + dice2})')
  Element('result').element.innerText = '\n'.join(result)

def roll(event):
  amount = 1
  if event.srcElement.id == 'five': amount = 5
  roll_loop(amount)

def customroll(event):
  amount = int(Element('amount').element.value)
  if not amount.isdigit():
    alert('Please enter a valid number.')
    return
  roll_loop(amount)

def snake_eyes(event):
  result = []
  while True:
    dice1 = random.randint(1, 6);
    dice2 = random.randint(1, 6);
    result.append(f'{dice1}, {dice2} (sum: {dice1 + dice2})')
    if dice1 == 1 and dice2 == 1:
      result.append(f'Snake eyes! It took {len(result)} rolls to get Snake eyes!')
      Element('result').element.innerText = '\n'.join(result)
      return