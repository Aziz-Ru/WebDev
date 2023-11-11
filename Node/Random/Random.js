const mathLibrary=require('./randomNumber');
const quotesLibrary=require('./quotes');

//Dependencies

const app={};
//app object -module scafholding

app.config={
    timeBetweenQuotes:1000,
};
app.printquotes = function printquotes(){
    const allQuotes=quotesLibrary.allQuotes();
    // console.log(allQuotes);
    const numberOfQuotes=allQuotes.length;
    const randomNumber=mathLibrary.getRandomNumber(1,numberOfQuotes);
    console.log(allQuotes[randomNumber-1]);
}
// setInterval(app.printquotes,app.config.timeBetweenQuotes);

app.infinteLoop=function infinteLoop(){
setInterval(app.printquotes,app.config.timeBetweenQuotes);
}
app.infinteLoop();
