
const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const quoteAuthor = document.querySelector(".author .name");
const soundBtn = document.querySelector(".sound")
const copyBtn = document.querySelector(".copy")
const twitterBtn = document.querySelector(".twitter")

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote..."
    fetch("https://dummyjson.com/quotes") // Removed the extra single quote
    .then(res => res.json())
    .then(result =>{
        console.log(result);
        const randomIndex = Math.floor(Math.random() * result.quotes.length);
        const randomQuote = result.quotes[randomIndex];
        quoteText.innerText = randomQuote.quote;
        quoteAuthor.innerText = randomQuote.author;
        
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
        
    });
}


soundBtn.addEventListener("click",()=>{
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${quoteAuthor.innerText}`);
        window.speechSynthesis.speak(utterance);
    } else {
        console.error("Speech synthesis is not supported in this browser.");
    }
});
twitterBtn.addEventListener("click",()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText} `
    window.open(tweetUrl,"_blank")
});
copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerText)
});
quoteBtn.addEventListener('click', randomQuote);