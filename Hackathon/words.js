document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});

let currentWord;
const wordInput = document.getElementById('wordInput');

let announcement = new SpeechSynthesisUtterance();
const words = ['example', 'computer', 'bottle', 'picture', 'window', 'information', 'technology', 'science', 'development', 'university'];

document.getElementById("startButton").onclick = function() {
    if (document.getElementById("startButton").innerText === "Start") {
        document.getElementById("startButton").textContent = "Stop";
        startPrompt.style.display = 'none';
        currentWord = words[Math.floor(Math.random() * words.length)];
        announcement.text = currentWord;
        window.speechSynthesis.speak(announcement);

        wordInput.hidden = false;
        wordInput.focus();
        
        wordInput.addEventListener('input', function() {
            if(this.accessKey == 10){
            if (wordInput.value.toLowerCase() === currentWord.toLowerCase()) {
                announcement.text = "Correct";
                window.speechSynthesis.speak(announcement);
                document.getElementById("Correction").textContent = "CORRECT!";
                document.getElementById("Correction").style.color = "green";
                document.getElementById("label").textContent = "";
            } else {
                announcement.text = "Incorrect";
                window.speechSynthesis.speak(announcement);
                document.getElementById("Correction").textContent = "Incorrect";
                document.getElementById("Correction").style.color = "red";
                document.getElementById("label").textContent = currentWord;
            }
            currentWord = words[Math.floor(Math.random() * words.length)];
            announcement.text = currentWord;
            window.speechSynthesis.speak(announcement);
            wordInput.value = '';
        }
        });
    
    } else if (document.getElementById("startButton").innerText === "Stop") {
        wordInput.hidden = true;
        document.getElementById("Correction").textContent = "";
        document.getElementById("startButton").textContent = "Start";
    }
};
