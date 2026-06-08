let pwd1=document.getElementById("pwd-1")
let pwd2=document.getElementById("pwd-2")
let passwordLength=document.getElementById("pwd-len")


let symbolsEnabled=document.getElementById("symbols-select")

let numbersEnabled=document.getElementById("numbers-select")

function generatePwd(){
    pwd1.innerText=""
    pwd2.innerText=""
    if(symbolsEnabled.value === "on" && numbersEnabled.value === "on"){
        for(let i=1 ; i <= Number(passwordLength.value) ; i++){
            characters = ["A", "B", "C","D", "E","F","G", "H","I","J","K","L","M","N","O","P","Q","R","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","'","!","@","[","]","{","}"]
            pwd1.innerText += characters[Math.floor(Math.random()*characters.length)]
            pwd2.innerText += characters[Math.floor(Math.random()*characters.length)]
        }
    }
    if(symbolsEnabled.value === "off" && numbersEnabled.value === "on"){
        characters = ["A", "B", "C","D", "E","F","G", "H","I","J","K","L","M","N","O","P","Q","R","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"]
        for(let i=1 ; i <= Number(passwordLength.value) ; i++){
            pwd1.innerText += characters[Math.floor(Math.random()*characters.length)]
            pwd2.innerText += characters[Math.floor(Math.random()*characters.length)]
        }
    }
    if(symbolsEnabled.value === "off" && numbersEnabled.value === "off"){
        characters = ["A", "B", "C","D", "E","F","G", "H","I","J","K","L","M","N","O","P","Q","R","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","t","u","v","w","x","y","z"]
        for(let i=1 ; i <= Number(passwordLength.value) ; i++){
            pwd1.innerText += characters[Math.floor(Math.random()*characters.length)]
            pwd2.innerText += characters[Math.floor(Math.random()*characters.length)]
        }
    }
    if(symbolsEnabled.value === "on" && numbersEnabled.value === "off"){
        characters = ["A", "B", "C","D", "E","F","G", "H","I","J","K","L","M","N","O","P","Q","R","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","t","u","v","w","x","y","z","~","'","!","@","[","]","{","}"]
        for(let i=1 ; i <= Number(passwordLength.value) ; i++){
            pwd1.innerText += characters[Math.floor(Math.random()*characters.length)]
            pwd2.innerText += characters[Math.floor(Math.random()*characters.length)]
        }
    }
    
}
