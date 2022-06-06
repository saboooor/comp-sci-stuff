from js import console

# “I’m so happy!”, 500 times
for x in range(500):
  console.log("I'm so happy!")

# multiples of 4 from 12 to 800
for x in range(12, 800 + 1, 4):
  console.log(x)

# odd numbers from 55 to 11
for x in range(55, 11 - 1, -2):
  console.log(x)

# 5 + 6 + 7 + 8 + … + 48 + 49 + 50
sum1 = 0
for x in range(5, 50 + 1):
  sum1 = sum1 + x
console.log(sum1)

# 10 + 20 + 30 + … + 90 + 100
sum2 = 0
for x in range(10, 100 + 1, 10):
  sum2 = sum2 + x
console.log(sum2)