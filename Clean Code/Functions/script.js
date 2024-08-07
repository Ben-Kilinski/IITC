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

function extractSubstring(str, start, end) {
    return str.substring(start, end)
}
console.log(extractSubstring(str, 2, 3))

let nstr = "national aeronautics and space administration"
function generateAcronym(string) {
    let separatedWords = string.split(" ") // ['national', 'aeronautics', 'and', 'space', 'administration']
    let initials = ""
    for (let i = 0; i < separatedWords.length; i++) {
        initials += separatedWords[i].charAt(0).toUpperCase() // NAASA
    }
    let result = "";
    for (let i = 0; i < initials.length; i++) {
        if (initials[i] !== initials[i - 1]) {
            result += initials[i];
        }
    }
    return result;
}
console.log(generateAcronym(nstr))