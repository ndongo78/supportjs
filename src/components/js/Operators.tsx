import React from "react";
import Img from "../../assets/img_operators.jpeg";
import C1 from "../../assets/c1.png";
import C2 from "../../assets/c2.png";
import C3 from "../../assets/c3.png";
import C4 from "../../assets/c4.png";
import { CodeBlock } from "../CodeBlock";

const Operators = () => {
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className=" ml-5">
        <h2 className="text-2xl font-bold m-5">Opérateurs JavaScript</h2>
        <p className="text-xl ">
          L' opérateur d'addition{" "}
          <span className="text-blue-600 font-bold p-2">+</span> ajoute des
          nombres
        </p>
        <p className="text-xl ">
          L' opérateur d'affectation{" "}
          <span className="text-blue-600 font-bold p-2">=</span> affecte une
          valeur à une variable.
        </p>
        <div className="mt-3">
          <img src={Img} alt="" />
        </div>
        <div className="">
          <h3 className="text-xl font-bold m-5 text-blue-600">
            Affectation JavaScript:
          </h3>
          <p className="text-xl">
            L' opérateur d'affectation{" "}
            <span className="text-blue-600 font-bold p-2">=</span> affecte une
            valeur à une variable :
          </p>
          <CodeBlock>
            {`
let x=3;
console.log(x)// 3
`}
          </CodeBlock>
        </div>
        <div className="">
          <h3 className="text-xl font-bold m-5 text-blue-600">
            Ajout JavaScript:
          </h3>
          <p className="text-xl">
            L' opérateur plus{" "}
            <span className="text-blue-600 font-bold p-2">+</span> ajoute des
            nombres , des string , array :
          </p>
          <CodeBlock>
            {`
           let x=3;
           let y=5;
           let z= y + x;
           console.log(z)// 8
         `}
          </CodeBlock>
        </div>
        <div className="">
          <h3 className="text-xl font-bold m-5 text-blue-600">
            Multiplication JavaScript:
          </h3>
          <p className="text-xl">
            L' opérateur de multiplication{" "}
            <span className="text-blue-600 font-bold p-2">*</span> multiplie les
            nombres :
          </p>
          <CodeBlock>
            {`
let x=3;
let y=5;
let z= y * x;
console.log(z) // 15
`}
          </CodeBlock>
        </div>
        <div className="">
          <h3 className="text-xl font-bold m-5 text-blue-600">
            Division JavaScript:
          </h3>
          <p className="text-xl">
            L' opérateur de division{" "}
            <span className="text-blue-600 font-bold p-2">/</span> divise les
            nombres :
          </p>
          <CodeBlock>
            {`
let x=5;
let y=5;
let z= y / x;
console.log(z)// 1
`}
          </CodeBlock>
        </div>
        <div className="">
          <h3 className="text-xl font-bold m-5 text-blue-600">
            Sous-traction JavaScript:
          </h3>
          <p className="text-xl">
            L' opérateur de sous-traction{" "}
            <span className="text-blue-600 font-bold p-2">-</span> sous-trait
            les nombres :
          </p>
          <CodeBlock>
            {`
let x=3;
let y=5;
let z= y - x;
console.log(z)// 2
`}
          </CodeBlock>
        </div>
        <div className="con">
          <h2 className="text-2xl font-bold m-5">Conditions</h2>
          <p>
            Parfois, nous devons effectuer différentes actions en fonction d’une
            condition.
            <br />
            Pour ce faire, nous pouvons utiliser l’instruction if et l’opérateur <br />
            conditionnel ?, également appelé opérateur “point d’interrogation”.
          </p>
          <p>
          L’instruction if(...) évalue une condition entre parenthèses et, si le résultat est true, exécute un bloc de code. <br />
          L’instruction if peut contenir un bloc optionnel “else”. Il s’exécute lorsque la condition est fausse.
          <CodeBlock>
            {`
let x=3;
let y=5;
 if(x == y){
  console.log("") // si x est egal y on affiche une message
 }else{
  console.log("") // sinon on affiche une message
 }
`}
          </CodeBlock><br />
          Parfois, nous aimerions tester plusieurs variantes d’une condition. Il y a une clause else if pour cela.

          <CodeBlock>
            {`
let year = prompt('En quelle année la spécification ECMAScript-2015 a-t-elle été publiée ?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
`}
          </CodeBlock>

          </p>
          <img src={C4} alt="" className="m-4" />
          <p>
          Il y a trois opérateurs logiques en JavaScript : || (OR), && (AND), ! (NOT).
<br />
Bien qu’ils soient appelés “logiques”, ils peuvent être appliqués à des valeurs de tout type, pas seulement booléennes. Le résultat peut également être de tout type.
<CodeBlock>
            {`
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
`}
          </CodeBlock>
          <CodeBlock>
            {`
alert( 1 || 0 ); // 1 (1 est vrai)

alert( null || 1 ); // 1 (1 est la première valeur vraie)
alert( null || 0 || 1 ); // 1 (la première valeur vraie)

alert( undefined || null || 0 ); // 0 (tous faux, renvoie la dernière valeur)
`}
          </CodeBlock>
          <CodeBlock>
            {`
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
`}
          </CodeBlock>
          </p>
          <img src={C3} alt="" className="m-4" />
          {/* <img src={C1} alt="" className="m-4" />
          <img src={C2} alt="" className="m-4" /> */}
        </div>
      </div>
    </div>
  );
};

export default Operators;
