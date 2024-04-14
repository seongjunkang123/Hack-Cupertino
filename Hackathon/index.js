const lettersButton = document.getElementById("Letters");
const wordsButton = document.getElementById("Words");
const sentencesButton = document.getElementById("Sentences");

lettersButton.onclick = function(){
    window.open("Letters.html" , '_self');
}
wordsButton.onclick = function(){
    window.open("Words.html" , '_self');
}
sentencesButton.onclick = function(){
    window.open("Sentences.html" , '_self');
}
