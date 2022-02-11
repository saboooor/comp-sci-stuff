// “I’m so happy!”, 500 times
for (let step = 0; step < 500; step++) {
    console.log('i\'m so happy!');
}

// multiples of 4 from 12 to 800
for (let step = 12; step <= 500; step+=4) {
    console.log(step);
}

// odd numbers from 55 to 11
for (let step = 55; step >= 11; step-=2) {
    console.log(step);
}

// 5 + 6 + 7 + 8 + … + 48 + 49 + 50
let sum1 = 5;
for (let step = 5; step <= 50; step++) {
    sum1 += step;
}
console.log(sum1)

// 10 + 20 + 30 + … + 90 + 100
let sum2 = 10;
for (let step = 20; step <= 100; step+=10) {
    sum2 += step;
}
console.log(sum2)