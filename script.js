function generate(){
    var quotes = {
      "- reason numba juan": '"Your tiny little baby face :)"',
      "- reason #2": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
      "- raisin number tree": '"Don’t Let Yesterday Take Up Too Much Of Today."',
      "- four ply four ply when i cry": '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
      "- ayy lend me a fivaa": '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."',
      "- devil number (6)": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
      "- seven minutes in hEAAAVEN": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
      "- reason eight": '"Strive not to be a success, but rather to be of value."',
      "- nines a swine": '"I attribute my success to this: I never gave or took any excuse."',
      "- shawty a dime": '"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed."',
      "- seven ELEVEN": '"Every strike brings me closer to the next home run."',
      "- reason number midnight": '"Life is what happens to you while you’re busy making other plans."',
      "- 13 reasons why": '"We become what we think about."',
      "- fourteen": '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
      "- fiveteen reason": '"Life is 10% what happens to me and 90% of how I react to it."',
      "- 6teen life is sweet gonna make the good times last": '"The mind is everything. What you think you become."',
      "- say the name SEVENTEEEEN!": '"The best time to plant a tree was 20 years ago. The second best time is now."',
    };
  
    // grab all the keys in the dictionary (authors)
    var keys = Object.keys(quotes);
    // grab a random key (author) and store it in author
    var author = keys[Math.floor(Math.random() * keys.length)];
    // grab the value(quote) that belongs to that key
    var quote = quotes[author]
  
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
  
  }