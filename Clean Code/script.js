let x = 10
let y = 13
function max(x, y) {
    let numsAray = [x, y]
    return Math.max(...numsAray)
}
console.log(max(x, y))

let str = "hello word"
function firstChar(str) {
    return str.charAt(0)
}
console.log(firstChar(str))

function roundToNearestInt(num) {
    return Math.round(num)
}
console.log(roundToNearestInt(2.4))

function startsWithSubstring(str, substring) {
    return str.startsWith(substring)
}
console.log(startsWithSubstring(str, "helo"))