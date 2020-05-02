/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 13 - "Izogram"
 */

/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję sprawdzającą czy podane słowo jest izogramem, czyli słowem w którym każda litera występuje tylko jeden raz.
 *
 *
 * Przykład:
 * isogram('Izogram'); // => true
 * isogram('Przeprogramowani'); // => false
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





function isogram(word) {
    const wordUp = word.toUpperCase();
    const letters = [];
    for(letter of wordUp){
        if (!letters.includes(letter)) {
            letters.push(letter);
        }else{
            return false;
        }
    }
    return true;
}

verify(isogram('izogram'), true);
verify(isogram('Przeprogramowani'), false);
verify(isogram('SprawdzAm'), false);