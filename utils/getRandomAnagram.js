export function getRandomAnagram(){
    //console.log(RNFS);
    //Get random word from array with eniglish words
    let word = words.english[Math.trunc((Math.random()*100)%words.english.length)];
    return makeAnagram(word);
}

function makeAnagram(word){
    return shuffle(word.split('')).join('');    
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}
  
const words = {
    russian:[
        'Книга',
        'Лампа',
        'Удар',
        'Вера',
        'Легитимность'
    ],
    english:[
        'money',
        'lamp',
        'genious',
        'sock',
        'foot',
        'splipsole',
        'hit',
        'build',
        'Satellite',
        'Book'
    ]
}