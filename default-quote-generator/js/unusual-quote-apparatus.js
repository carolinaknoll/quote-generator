$(document).ready(function() {

  generateNewQuote();

  function generateNewQuote() {

    var quotes = [
      "Luck? I don't know anything about luck. I've never banked on it and I'm afraid of people who do. Luck to me is something else: Hard work - and realizing what is opportunity and what isn't. #Lucille Ball",
      "Any fool can have bad luck; the art consists in knowing how to exploit it. #Frank Wedekind",
      "Chance favors the prepared mind. #Louis Pasteur",
      "The winds and waves are always on the side of the ablest navigators. #Edward Gibbon",
      "In the middle of every difficulty lies opportunity. #Albert Einstein",
      "Small opportunities are often the beginning of great enterprises. #Demosthenes",
      "I've found that luck is quite predictable. If you want more luck, take more chances. Be more active. Show up more often. #Brian Tracy",
      "I think luck falls on not just the brave but also the ones who believe they belong there. #Novak Djokovic",
      "Luck is a dividend of sweat. The more you sweat, the luckier you get. #Ray Kroc",
      "My success was due to good luck, hard work, and support and advice from friends and mentors. But most importantly, it depended on me to keep trying after I had failed. #Mark Warner",
      "A closed mouth gathers no feet. #Popular saying",
      "A conclusion is simply the place where you got tired of thinking. #Popular saying",
      "A cynic is only a frustrated optimist. #Popular saying",
      "A fanatic is one who can't change his mind, and won't change the subject. #Popular saying",
      "An alien of some sort will be appearing to you shortly. #Unknown",
      "Do not mistake temptation for opportunity. #Popular saying",
      "Flattery will go far tonight. #Unknown",
      "He who laughs at himself never runs out of things to laugh at. #Popular saying",
      "He who laughs last is laughing at you. #Popular saying",
      "He who throws dirt is losing ground. #Popular saying",
      "Some men dream of fortunes, others dream of cookies. #Popular saying",
      "The greatest danger could be your stupidity. #Popular saying",
      "The world may be your oyster, but it doesn't mean you'll get its pearl. #Popular saying",
      "You will be hungry again in one hour. #Unknown",
      "You can always find happiness at work on Friday. #Popular saying",
      "Confucius say: if you think you’re going to sum up your whole life on this little bit of paper, you’re crazy. #Popular saying"
    ];

    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quoteAuthor = randomQuote.split("#");
    $('.saying').text(quoteAuthor[0]);
    $('.author').text(quoteAuthor[1]);
  }

  $("#new-quote").click(generateNewQuote);
  $('#tweet-quote').on('click', function() {
    window.open(`https://twitter.com/intent/tweet?text=${$('.saying').text()} - ${$('.author').text()}`);
  })
});
