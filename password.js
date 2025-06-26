const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6",
     "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
     "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//Create a function for password generator for when the button is clicked 
//Retrieve all the ids for button and output boxes
// for loop to go over every element of the array for 15 times
//random character generator (15 characters ) , use random maths 
//Add generated password into the password boxes

let passwordEl1 = document.getElementById("password1")
let passwordEl2 = document.getElementById("password2")

let passwordButton = document.getElementById("generate-btn")
//let randomCharacters= Math.floor(Math.random()* characters.length)

function generatePassword(){
    for (let i=0; i < 15; i+=1){
        let randomCharacter= Math.floor(Math.random()* characters.length)
        passwordEl1.textContent += characters[randomCharacter]

        let randomWord = Math.floor(Math.random()* characters.length)
        passwordEl2.textContent += characters[randomWord]
        //console.log(characters[randomCharacter])
        }
        
    }


    //function generatePassword(){
        //for (let i=0; i < 15; i+=1){
            //let randomPassword= Math.floor(Math.random()* characters.length)
            //passwordEl2.textContent += characters[randomPassword]
            //}
        //}


//passwordButton.addEventListener("click", function (){
    //let randomCharacter= Math.floor(Math.random()* characters.length)
    //console.log(characters[randomCharacter])
    //let randomWord = Math.floor(Math.random()* characters.length)
    //passwordEl.textContent = characters[randomCharacter] + ""+""+""+""+""
    

//})



