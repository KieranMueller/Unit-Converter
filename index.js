let initialNum = document.querySelector("#initialNum")

let units
let toUnits

function selectUnits() {
    units = document.querySelector("#dropdown").value
    return units
}
function selectConvertUnits() {
    toUnits = document.querySelector("#dropdown2").value
    return toUnits
}


let answer = ""
let answerEl = document.querySelector(".answer")
answerEl.innerHTML = `<h2>Answer: ${answer}</h2>`

initialNum.addEventListener("input", function() {
    return initialNum.valueAsNumber
})


function convert() {
    if (units == undefined || toUnits == undefined) {
        return alert("Please select units")
    }
    if (units === toUnits) {
        return alert("Units are the same")
    }
    if (units === "feet" && toUnits === "meters") {
        answer = (initialNum.valueAsNumber * 0.3048).toFixed(3)
    answerEl.innerHTML = `<h2>Answer: ${answer} Meters</h2>`
    return answer
    }
    if (units === "meters" && toUnits === "feet") {
        answer = (initialNum.valueAsNumber/0.3048).toFixed(3)
    answerEl.innerHTML = `<h2>Answer: ${answer} Feet</h2>`
    return answer
}
if (units === "inches" && toUnits === "feet") {
    answer = (initialNum.valueAsNumber * 0.0833333).toFixed(3)
answerEl.innerHTML = `<h2>Answer: ${answer} Feet</h2>`
return answer
}
if (units === "inches" && toUnits === "yards") {
    answer = (initialNum.valueAsNumber * 0.0277778).toFixed(3)
answerEl.innerHTML = `<h2>Answer: ${answer} Yards</h2>`
return answer
}
if (units === "inches" && toUnits === "meters") {
    answer = (initialNum.valueAsNumber * 0.0254).toFixed(3)
answerEl.innerHTML = `<h2>Answer: ${answer} Meters</h2>`
return answer
}
if (units === "feet" && toUnits === "inches") {
    answer = (initialNum.valueAsNumber * 12).toFixed(3)
answerEl.innerHTML = `<h2>Answer: ${answer} Inches</h2>`
return answer
}
if (units === "yards" && toUnits === "inches") {
    answer = (initialNum.valueAsNumber * 36).toFixed(3)
answerEl.innerHTML = `<h2>Answer: ${answer} Inches</h2>`
return answer
}
if (units === "meters" && toUnits === "inches") {
    answer = (initialNum.valueAsNumber * 39.3701).toFixed(3)
answerEl.innerHTML = `<h2>Answer: ${answer} Inches</h2>`
return answer
}
if (units === "feet" && toUnits === "yards") {
    answer = (initialNum.valueAsNumber * 0.333333).toFixed(3)
answerEl.innerHTML = `<h2>Answer: ${answer} Yards</h2>`
return answer
}
if (units === "yards" && toUnits === "feet") {
    answer = (initialNum.valueAsNumber * 3).toFixed(3)
answerEl.innerHTML = `<h2>Answer: ${answer} Feet</h2>`
return answer
}
if (units === "yards" && toUnits === "meters") {
    answer = (initialNum.valueAsNumber * 0.9144).toFixed(3)
answerEl.innerHTML = `<h2>Answer: ${answer} Meters</h2>`
return answer
}
if (units === "meters" && toUnits === "yards") {
    answer = (initialNum.valueAsNumber * 1.09361).toFixed(3)
answerEl.innerHTML = `<h2>Answer: ${answer} Yards</h2>`
return answer
}
}



