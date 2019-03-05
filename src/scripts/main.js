

// Scope part one

// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

// for (let x = 1; x < cookies.length; x++) {
//     const currentCookie = cookies[y]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

// Scope part two

// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     console.log(conjoinedWord)
// }

// conjunction("Master", "Card")

// Scope part three
let HTMLRepresentation = `<h1>The Mod Squad</h1>`
{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            start: "1968",
            end: "1973"
        }
    }

    

    ModSquad.members.forEach(member => {
         HTMLRepresentation += `<div>${member}</div>`
    })
}

document.querySelector(".show-info").innerHTML = HTMLRepresentation