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

// verify(convertAstToHtmlString(
//   { 
//     "nodeType": "element",
//     "tagName": "div",
//     "attributes": [ { "name": "class", "value": "test" } ],
//     "children": [ { "nodeType": "text", "value": "Hello world!" }]
// }), '<div class="test">Hello world!</div>');


const obj = { 
    "nodeType": "element",
    "tagName": "div",
    "attributes": [ { "name": "class", "value": "test" }, { "name": "class", "value": "test12" }, { "name": "id", "value": "test12" }],
    "children": [ { "nodeType": "text", "value": "Hello world!" }]
};

function convertAstToHtmlString(stringObj){
    const element = document.createElement(stringObj.tagName);
    const attributes = stringObj.attributes;
    const attributesObj = {};
    let valueContentClass = "";

    for(const t of attributes){
      if(t.name === "class"){
        t.name = "className";

        valueContentClass += t.value+" ";

        Object.defineProperty(attributesObj, t.name, {
          value: valueContentClass,
          configurable: true,
          enumerable: true,
        });
      }else{
        Object.defineProperty(attributesObj, t.name, {
          value: t.value,
          configurable: true,
          enumerable: true,
        });
      }
    }
    Object.assign(element, attributesObj);

    document.body.appendChild(element);
}

convertAstToHtmlString(obj);