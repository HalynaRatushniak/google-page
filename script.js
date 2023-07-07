
 const letters = "Google".split('');
const newLetters = "Oddity".split('');

const mainWord = document.querySelector('.main-word');
let word = "";
let newWord = "";
           
letters.forEach((letter) => {
    word += `<span>${letter}</span>`
});

mainWord.innerHTML = word;

newLetters.forEach((newLetter) => {
    newWord += `<span>${newLetter}</span>`
});

function changeWord(){
    mainWord.innerHTML=newWord;
}
