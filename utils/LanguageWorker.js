import {AsyncStorage} from 'react-native';

export function changeLanguage(currentLanguage){
    let newLangauge
    switch(currentLanguage){
        case 'en':
            newLangauge = 'ru';
            break;
        case 'ru':
           newLangauge = 'en';
           break;
    }
    AsyncStorage.setItem('language', newLangauge);
    return newLangauge;
}

export async function setCurrentLanguage(context){
    context.setState({language: await AsyncStorage.getItem('language')});
}