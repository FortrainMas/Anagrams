import {AsyncStorage} from 'react-native';
export async function getRandomAnagram(){
    let word = ''
    switch(await AsyncStorage.getItem('language')){
        case 'en':
            word = words.english[Math.trunc((Math.random()*100)%words.english.length)];
            break;
        case 'ru':
            word = words.russian[Math.trunc((Math.random()*100)%words.russian.length)];
            break;
        default:
            console.error('Unknown value in storage on key language');
    }
    let anagram = makeAnagram(word)
    return {word: word, anagram: anagram};
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
        'Легитимность',
        'Надежда',
        'Рынок',
        'Рост',
        'Финансы',
        'Аристократия',
        'Поражение',
        'Демократия',
        'Школа',
        'Экономика',
        'Кризис',
        'Пари',
        'Казино',
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