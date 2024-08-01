console.log("test")

for (let i = 1; i <= 5; i++) {
    console.log(`This is iteration number ${i} of the MAIN LOOP`)
    for (let j = 1; j <= 5; j++) {
        console.log(`This is iteration number ${j} of the inner loop`)
    }
    console.log("")
}

//Multiplication table
for (let i = 1; i <= 10; i++) {
    let row = "" // create 10 lines(rows)
    for (let j = 1; j <= 10; j++) {
        row += `${i * j} ` // adds results for the lines
    }
    console.log(row)
}