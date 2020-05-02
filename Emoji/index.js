/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 7 - "Emoji"
 */

/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję "useEmoji", która zastąpi wszystkie słowa danego parametru zgodnie 
 * z mapowaniem z obiektu "emojiMappings";
 *
 * Przykład:
 * useEmoji('Takiemu zachowaniu mówię stop i to mocny stop!') // => 'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!'
 * useEmoji('Jadę po nowy samochód :D') // => 'Jadę po nowy 🏎 :D'
 */


const emojiMappings = {
    'stop': '🚫',
    'gwiazda': '⭐️',
    'samochód': '🏎',
    'buduję': '🧱',
    'budzik': '⏰'
};
const chars = ['!', '?', ',', '.', ':']


function useEmoji(input) {
    const wordsValid = input.split(' ');
    const newSentence = input.split(' ');

    wordsValid.forEach((el, index)=>{
        for(key of Object.keys(emojiMappings)){
            if(el.includes(key)){
                for(char of chars){
                    if(el.includes(char)){
                        newSentence[index] = emojiMappings[key]+char;
                        break;
                    }else{
                        newSentence[index] = emojiMappings[key]
                    }
                }
            }
        }
    })
    return newSentence.join(' ')
}

/* Weryfikacja */
function verify(input, goal) {
    if (input === goal) {
        console.log('Gratulacje!');
    } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
}

verify(useEmoji('Takiemu zachowaniu mówię stop i to mocny stop!'), 'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!');
verify(useEmoji('Jadę po nowy samochód :D'), 'Jadę po nowy 🏎 :D');
verify(useEmoji('Właśnie buduję swoje skille w JS'), 'Właśnie 🧱 swoje skille w JS');