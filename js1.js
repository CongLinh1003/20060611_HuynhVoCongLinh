//Coding Challenge #1
const bmi = (height, mass) => {
    return (mass / (height * height))
}

let jMass = 68
let jHeight = 1.65
let mMass = 78
let mHeight = 1.78

let mark = bmi(mHeight, mMass)
let john = bmi(jHeight, jMass)

console.log("mark's BMI: " + mark)
console.log("john's BMI: " + john)

const markHigherBMI = (peopleA, peopleB) => {
    if (peopleA > peopleB) { return true }
    else { return false }
}

console.log(markHigherBMI(mark, john));

//Coding Challenge #2

const whoHigherBMI = (peopleA, peopleB) => {
    let markHigh = `Mark's BMI (${peopleA}) is higher than John's (${peopleB})!`
    let johnHigh = `John's BMI (${peopleB}) is higher than John's (${peopleA})!`
    if (peopleA > peopleB) { console.log(markHigh) }
    else { console.log(johnHigh) }
}

whoHigherBMI(mark, john)

//Coding Challenge #3

const avgScore = arrayScore => {
    const sum = arrayScore.reduce((acc, curVal) => acc + curVal, 0)
    return sum / arrayScore.length
}

const validTest = (arrayScore) => {
   return arrayScore.some((value) => value > 100)
}

const whoWin = (arrayA, arrayB) => {
    let a = avgScore(arrayA)
    let b = avgScore(arrayB)
    if (a > b && validTest(arrayA)) { console.log(`Team Dolphins ${(arrayA)} win with the average ${a}!!`) }
    else if (b > a && validTest(arrayB)) { console.log(`Team Koalas ${(arrayB)} win with the average ${b}!!`) }
    else if (a == b && validTest(arrayA) && validTest(arrayB)) { console.log(`It's a Drawwwww!!`) }
    else console.log(`No one win!`);
}

Dolphins = [96, 90, 89]
Koalas = [88, 0, 110]

whoWin(Dolphins, Koalas)

//Coding Challenge #4

const tips = billValue => {
    return billValue>50 && billValue<=300? billValue*0.15 : billValue*0.2
}

const tipResult = billValue => {
    console.log(`The bill was ${billValue}, the tip was ${tips(billValue)}, and the total value ${billValue + tips(billValue)}`);
}

tipResult(275)