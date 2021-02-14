function generate(){
    var quotes = {
      "- reason numba juan": 'Your tiny little baby face :)',
      "- reason #2": 'hairy legs >:)',
      "- tree:" 'you make me feel like im actually the prettiest person in the world'
      "- four ply four ply when i cry": 'you deal with me without even knowing youre dealing with an annoying mess',
      "- ayy lend me a fivaa": 'u funny whiteboy',
      "- devil number (6)": 'i can tell you anything and actually everything..cause i talk a lot',
      "- seven minutes in hEAAAVEN": 'you let me love you enough to never feel stupid or embarrassed at how excessive it can be sometimes',
      "- reason eight": 'when im insecure, i can just remember that you love me and it feels unconditional',
      "- nines a swine": 'youve allowed me to feel hopeful and excited about my future again',
      "- shawty a dime": 'youre fucking hot',
      "- seven ELEVEN": 'we share interests but were different enough to keep eachother curious',
      "- reason number midnight": 'you make me want to be a better person, to push you to be a better person and to treat you like the amazing person you are',
      "- 13 reasons why": 'youve never made me doubt myself. you dont let me doubt myself.',
      "- fourteen": 'i want to give you the life you deserve',
      "- fiveteen reason": 'you came back to me and that makes me feel so special.',
      "- 6teen life is sweet gonna make the good times last": 'youre the best friend that im also in love with that is also somehow my life mentor i mean senpai',
      "- say the name SEVENTEEEEN!": 'i KNOW youre always there for me and that means more than you could ever imagine',
    };
  
    // grab all the keys in the dictionary (authors)
    var keys = Object.keys(quotes);
    // grab a random key (author) and store it in author
    var author = keys[Math.floor(Math.random() * keys.length)];
    // grab the value(quote) that belongs to that key
    var quote = quotes[author]
  
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

   document.getElementById("welcome").style.display = 'none';
}