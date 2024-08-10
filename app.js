let input = ["bat", "tap", "cat", "tab", "pat"]

// let userinput = prompt("Enter Anagram words",input)
// // console.log(userinput.split(","))
// userinput = userinput.split(",")

// console.log("abc",userinput)

// // console.log(input)
// // input.splice(2,1)
// // console.log(input)

let res = []


for (let i = 0; i < input.length; i++) {

    let a = input[i]
    let arr = []
    arr.push(a)
    let b = "";
    for (let ii = a.length - 1; ii >= 0; ii--) {
        b += a[ii]
    }
    if (input.includes(b)) {
        arr.push(b)
        input.splice(input.indexOf(b), 1)
    }
    res.push(arr)
    // console.log(b)

}

console.log(res)
document.write("Check Console for result")