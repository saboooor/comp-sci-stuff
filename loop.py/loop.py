from js import console

# “I’m so happy!”, 500 times
for x in range(500):
  console.log("I'm so happy!")

# multiples of 4 from 12 to 800
for x in range(12, 801, 4):
  console.log(x)

# odd numbers from 55 to 11
for x in range(55, 10, -2):
  console.log(x)

# 5 + 6 + 7 + 8 + … + 48 + 49 + 50
sum1 = 5
for x in range(55, 10, -2):
    sum1 += 1
console.log(sum1)
