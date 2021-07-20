/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 21 - "HTML String"
*/

/*
* Cel zadania
*------------
* To zadanie stanowi wstęp do projektu "Abstract Syntax Trees" https://przeprogramowani.pl/opanuj-javascript_ast.pdf. Zacznij od zapoznania się z jego wprowadzeniem i opisem.
*
* Twoim rozgrzewkowym zadaniem jest napisanie funkcji, która przekonwertuje pojedynczy obiekt AST na HTML String.
*
* Przykład: convertAstToHtmlString({ 
“nodeType”: “element”, “tagName”: “div”,
“attributes”: [ { “name”: “class”, “value”: “test” }],
“children”: [ “nodeType”: “text”, “value”: “Hello world!”]
}) => "<div class="test">Hello world!</div>"
* 
* 
*/

function convertAstToHtmlString(astObject) {

}


/* Weryfikacja */
function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(convertAstToHtmlString(
  { 
    "nodeType": "element",
    "tagName": "div",
    "attributes": [ { "name": "class", "value": "test" } ],
    "children": [ { "nodeType": "text", "value": "Hello world!" }]
}), '<div class="test">Hello world!</div>');


const obj = { 
    "nodeType": "element",
    "tagName": "div",
    "attributes": [ { "name": "class", "value": "test" } ],
    "children": [ { "nodeType": "text", "value": "Hello world!" }]
};

function convertAstToHtmlString(stringObj){
    const element = document.createElement(stringObj.tagName);
    element.setAttribute(stringObj.attributes[0].name, stringObj.attributes[0].value);
    element.innerHTML = stringObj.children[0].value;
    
    return element.outerHTML;
}