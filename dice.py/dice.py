from js import alert
import random

def roll(event):
  console.log(event.srcElement.id)
  amount = 1
  if event.srcElement.id == 'five': amount = 5
  if event.srcElement.id == 'custom': amount = int(Element('amount').value)
  result = []
  for x in range(amount):
    dice1 = random.randint(1, 6);
    dice2 = random.randint(1, 6);
    result.append(f'{dice1}, {dice2} (sum: {dice1 + dice2})')
  alert('\n'.join(result))
  return

def customroll():