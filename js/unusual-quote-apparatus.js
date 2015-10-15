$(document).ready(function() {
 
  generateNewQuote();

  function generateNewQuote(){
    
    var quotes = ["War brings death. And wounds and pain to both sides. There's nothing harder to accept, than the deaths of those you love. So you believe they could never die. Especially those who haven't known war. #Nagato, Naruto Shippuden", "Love is the reason why there is pain.  #Pain, Naruto Shippuden", "Learn to treasure your life because unfortunately, it can be taken away from you anytime. #L Lawliet, Death Note", "No matter how gifted you are... You, alone, cannot change the world. #L Lawliet, Death Note", "We have to change our way of thinking if we really want to change the future. #Watanabe Saki, From the New World", "I have to really enjoy the good things because it makes the bad things OK. #Emma Watson"];
       
    randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    
    quoteAuthor = randomQuote.split("#");
    $('.saying').text(quoteAuthor[0]);
    $('.author').text(quoteAuthor[1]);
    
  }
 
$("button").click(generateNewQuote);
     
});
