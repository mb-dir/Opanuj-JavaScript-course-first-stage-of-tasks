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


//my test obj
const obj = { 
    "nodeType": "element",
    "tagName": "div",
    "attributes": [ { "name": "class", "value": "test" }, { "name": "class", "value": "test12" }, { "name": "id", "value": "test12" }],
    "children": [ { "nodeType": "text", "value": "Hello world!" }, { "nodeType": "element", "tagName": "p" }]
};

function convertAstToHtmlString(stringObj){
  //creating element based on tage name from object
    const element = document.createElement(stringObj.tagName);

    //attributes handling

    //variable with attributes which has this element(it is an array)
    const attributes = stringObj.attributes;

    //to this object will go all attributes, it is object cuz I will use object.assing in order to add these attributes to element
    const attributesObj = {};

    //string where will be all names of classes
    let valueContentClass = "";

    //t cuz I do not have any other idea for name(I know it is bad practice, but it doesn't go to the production)
    for(const t of attributes){
      if(t.name === "class"){
        //must be className, not class - https://developer.mozilla.org/pl/docs/Web/API/Element/className
        t.name = "className";

        //there can be a lot of classes, this code below "combines"  class names into one string(later this one big string will be add as className)
        if(attributesObj.className){
          valueContentClass = valueContentClass+" "+t.value;
        }else{
          valueContentClass = t.value;
        }

        //define object properties
        Object.defineProperty(attributesObj, t.name, {
          value: valueContentClass,
          configurable: true,
          //it must be true in order to object assing will able "see" it - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description
          enumerable: true,
        });
      }else{
        //define properties if it is not class
        Object.defineProperty(attributesObj, t.name, {
          value: t.value,
          configurable: true,
          //it must be true in order to object assing will able "see" it - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description
          enumerable: true,
        });
      }
    }

    //children handling
    const children = stringObj.children;
    for(const t of children){
      //In this task I assume that nodeType can be "text" or other element which can be add with appendChild(another div or p or span tag etc)
      //I also assume that children do not have children and attributes
      if(t.nodeType === "text"){
        element.textContent = t.value;
      }else{
        const child = document.createElement(t.tagName);
        element.appendChild(child);
      }
    }

    Object.assign(element, attributesObj);

    console.log(element.outerHTML);
    return element.outerHTML;
}

convertAstToHtmlString(obj);