console.log("test")

for (let i = 1; i <= 5; i++) {
    console.log(`This is iteration number ${i} of the MAIN LOOP`)
    for (let j = 1; j <= 5; j++) {
        console.log(`This is iteration number ${j} of the inner loop`)
    }
    console.log("")
}