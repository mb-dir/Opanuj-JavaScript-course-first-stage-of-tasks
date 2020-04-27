/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 11 - Thing inside the box
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, sprawdzającą czy pudełko jest puste.
*
*
*/

function thing(box) {
    return box.split('\n').map(el=>el.trim()).some(line=>{
        return line.includes('o') && line.startsWith('*') && line.endsWith('*')
    })
}

thing(`*****
              * o *
              *   *
              *****`)
/* Weryfikacja */

function verify(input, goal) {
    if (input === goal) {
        console.log('Gratulacje!');
    } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
}

verify(thing(`*****
              *   * o
              *   *
              *****`), false);

verify(thing(`*****
              * o *
              *   *
              *****`), true);

verify(thing(`*****
               *   *
               *   *
               *****`), false);