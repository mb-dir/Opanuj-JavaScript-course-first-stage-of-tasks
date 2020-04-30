/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 12 - "Mr. Elliot"
 */

/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję zmieniającą tekst na pozdrowienia od Mr. Elliota, według przykładu.
 *
 *
 * Przykład:
 * greetings('hacker'); // => 'H4Ck3r'
 * greeting('Control Is An Illusion'); // => 'C0NtR0L 15 4N 1lLu510n'
 * greeting('Saving The World'); // => 'S4V1Ng tHe w0rLd'
 * 
 */


/* Weryfikacja */

function verify(input, goal) {
    if (input === goal) {
        console.log('Gratulacje!');
    } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
}


const specialChars = ['a', 'e', 'o', 'i', 's']
const specialCharsNumbers = ['4', '3', '0', '1', '5']

function greeting(message) {
    const messageLowerCase = message.toLowerCase().split('');
    
    for(let j = 0, l = messageLowerCase.length; j<l;j++){

        for (let i = 0, len = specialChars.length; i < len; i++) {
            if (specialChars[i] === messageLowerCase[j]) {
                messageLowerCase[j] = specialCharsNumbers[i];        
            }
        }

    }
    

    messageLowerCase.forEach((el, i, arr)=>{
        if (i % 2 === 0) {
            arr[i] = arr[i].toUpperCase();
        }
    })
    return messageLowerCase.join('');
}
verify(greeting('hacker'), 'H4Ck3r');
verify(greeting('Control Is An Illusion'), 'C0NtR0L 15 4N 1lLu510n');
verify(greeting('Saving The World'), '54V1Ng tH3 w0rLd');