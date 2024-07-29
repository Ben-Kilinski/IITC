//1: write a loop that counts from 10 to 1(backwards)
for (let i = 10; i >= 0; i--) {
  console.log(i)
}

console.log('')

//2: Create a loop that prints only even numbers from 2 to 20
for (let i = 1; i < 20; i++) {
    if (i % 2 === 0) { console.log(i) }
}
console.log('')

//3: Make a loop that adds up all numbers from 1 to 10 and print sum.
let sum = 0;
for (i = 0; i <= 10; i++) {
    sum += i;
}
console.log(sum)

console.log('')

//4: write a loop that prints the 5 times table(5, 10, 15 ... 50)
for (i = 1; i <= 10; i++) {
    console.log(i * 5)
}

console.log('')

//5: create a loop that prints this pattern - 
//*
//**
//***
//****
//*****

for (i=1; i<=5; i++){
    let caful = "*"
    console.log(caful.repeat(i))
}
