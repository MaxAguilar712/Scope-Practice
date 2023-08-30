//C is for Cookie
//FIXED


const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 1; y < cookies.length; x++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
    y++;
}

//Conjunction Function
//FIXED


let conjoinedWord = ""
const conjunction = function (firstWord, secondWord) {
    conjoinedWord = (`${firstWord} ${secondWord}`)
}

conjunction("Master", "Card")
console.log(conjoinedWord)

//Mod Squad
//FIXED


    const modSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    modSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
    })
    


console.log(HTMLRepresentation)


//Simon Says

//FIXED

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (let location of locations) {

    if(location[0] > 2) {
       invalidLocation = true
    };

    if(invalidLocation = true) {
        console.log("This location is invalid")
    }
}




//Lambda Llama
//FIXED 
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7);

    const namer = function () {
        let suffix = " the Llama"
        let name = possibleNames[randomizer]
        return name + suffix
    }
    return namer();
    
    
}
let nameMaker = llamaNamer();
console.log(nameMaker)
