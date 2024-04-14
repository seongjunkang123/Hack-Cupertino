document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});

let randomLetter;
const letterInput = document.getElementById('letterInput');
       
let speech =  new SpeechSynthesisUtterance();
let speech1 = new SpeechSynthesisUtterance();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
document.getElementById("startButton").onclick = function() {
    if(document.getElementById("startButton").innerText == "Start"){
        document.getElementById("startButton").textContent = "Stop";
        //randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
        startPrompt.style.display = 'none';  
        speech.text =  "" + randomLetter;
        window.speechSynthesis.speak(speech);
            
        letterInput.hidden = false;
        letterInput.focus();
        letterInput.addEventListener("input", function() {
           
            if (letterInput.value.toUpperCase() == randomLetter) {
                    
                speech1.text = "Correct";
                window.speechSynthesis.speak(speech1);
                document.getElementById("Correction").textContent = "CORRECT";
                document.getElementById("Correction").style.color = "green";
                console.log(randomLetter);
                document.getElementById("label").textContent = "";
                  
            } 
                else if (letterInput.value.toUpperCase() != randomLetter){
                    document.getElementById("label").textContent = "" + randomLetter;
                    speech1.text = "Incorrect";
                    window.speechSynthesis.speak(speech1);
                    document.getElementById("Correction").textContent = "Incorrect";
                    document.getElementById("Correction").style.color = "red";
                    console.log(randomLetter);
                   
                }
                letterInput.value = ``;
                randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
                speech.text =  "" + randomLetter;
                window.speechSynthesis.speak(speech);
            });
            }
            else if(document.getElementById("startButton").innerText == "Stop"){
                letterInput.hidden = true;
                speech.text = "";
                speech1.text = "";
                //randomLetter = '';
                document.getElementById("Correction").textContent = "";
                document.getElementById("startButton").textContent = "Start";
                console.log(letterInput.hidden);
                console.log(randomLetter);

            }
        }