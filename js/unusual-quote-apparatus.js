$(document).ready(function () {

    generateNewQuote();

    function generateNewQuote() {
        
        var quotes = ["Luck? I don't know anything about luck. I've never banked on it and I'm afraid of people who do. Luck to me is something else: Hard work - and realizing what is opportunity and what isn't. #Lucille Ball", "Any fool can have bad luck; the art consists in knowing how to exploit it. #Frank Wedekind", "Chance favors the prepared mind. #Louis Pasteur", "The winds and waves are always on the side of the ablest navigators. #Edward Gibbon", "In the middle of every difficulty lies opportunity. #Albert Einstein", "Small opportunities are often the beginning of great enterprises. #Demosthenes", "I've found that luck is quite predictable. If you want more luck, take more chances. Be more active. Show up more often. #Brian Tracy", "I think luck falls on not just the brave but also the ones who believe they belong there. #Novak Djokovic", "Luck is a dividend of sweat. The more you sweat, the luckier you get. #Ray Kroc", "My success was due to good luck, hard work, and support and advice from friends and mentors. But most importantly, it depended on me to keep trying after I had failed. #Mark Warner"];

        randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        quoteAuthor = randomQuote.split("#");
        $('.saying').text(quoteAuthor[0]);
        $('.author').text(quoteAuthor[1]);
    }

    $("button").click(generateNewQuote);

});