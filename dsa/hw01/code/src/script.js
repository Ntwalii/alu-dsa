const fs = require("fs")

const data = fs.readFileSync("../../sample_inputs/sample_inputs.txt", "utf8")


const lines = data.split("\n");

const tally = {}



    const trimmedLine = trimString(line);


    const num = convertStringToInt(trimmedLine);

    if(isInRange(num)) {

        trackCount(num, tally);
    }



const tallyArr = Object.values(tally);

const sortedArr = sortArr(tallyArr);

for(let num of sortedArr) {
    fs.appendFileSync("../../sample_results/sample_results.txt", num + "\n")
}

function trimString(str) {

    let newStr = "";


    for(let char of str) {
        if(char !== " ") newStr += char;
    }
    return newStr;
}

function convertStringToInt(str) {
    return parseInt(str);
}

function isInRange(num) {
    return num >= -1023 && num <= 1023;
}

function trackCount(num, obj) {
    if(!obj[num]) obj[num] = num; 
}

function sortArr(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i !== Math.floor(arr.length / 2)) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }

    return sortArr(left).concat(pivot, sortArr(right));
}
