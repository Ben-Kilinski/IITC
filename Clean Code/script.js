let x = 10
let y = 13
function max(x, y) {
    let numsAray = [x, y]
    return Math.max(...numsAray)
}
console.log(max(x, y))