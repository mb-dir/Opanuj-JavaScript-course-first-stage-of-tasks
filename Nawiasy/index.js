/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 19 - "Dopasuj nawiasy"
*/

/*
* Cel zadania
*------------
* Otrzymując stringa zawierającego nawiasy kwadratowe [], klamry {} lub nawiasy okrągłe (), upewnij się że wszystkie z par są dopasowane i prawidłowo zagnieżdżone. Jeżeli wszystko się zgadza, zwróć true. W przypadku wykrycia błędów, zwróc false.
*
* Przykład: '[{()}]' => true
* Przykład: '[{]}' => false
*/

function checkBrackets(stringWithBrackets) {
    let string = stringWithBrackets;
    const validBrackets = [
        '{}',
        '[]',
        '()',
    ]

    for (let i = 0; i < validBrackets.length; i++) {
        for (const bracket of validBrackets){
            if(string.includes(bracket)){
                string = string.replace(bracket, '')
            }
        }
    }
    return !string;
}

/* Weryfikacja */

function verify(input, goal) {
    input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
    if (input == goal) {
        console.log('Gratulacje!');
    } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
}

verify(checkBrackets("[{()}]"), true);
verify(checkBrackets("[{]}"), false);
verify(checkBrackets("()[{}]"), true);
verify(checkBrackets("{[(]}}"), false);