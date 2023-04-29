import React from "react";
import { CodeBlock } from "../CodeBlock";

const Variables = () => {
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="">
        <h2 className="text-2xl font-bold m-5">Variables JavaScript</h2>
        <p className="text-xl m-2">
          Les variables sont des conteneurs pour stocker des données (stocker
          des valeurs de données).
        </p>
        <p className="text-xl m-2">
          Les variables sont déclarées avec les mots clé:
          <span className="text-red-600 m-2 font-bold">var</span>,
          <span className="text-red-600 m-2 font-bold">let</span>,
          <span className="text-red-600 m-2 font-bold">const</span>
        </p>
<CodeBlock>
  {`
  //Comment créer une variable
  var n;
  let x;
  //Comment utilisé une variable
  n=1;
  x=3;
  let y= n + x ;
  console.log(y); //afficher la value x dans la console
`}
</CodeBlock>
      </div>
      <div className="">
        <h3 className="text-xl font-bold m-5 text-blue-600">NB</h3>
        <p className="text-xl m-2">
          Toutes les variables JavaScript doivent être identifiées par des noms
          uniques
        </p>
        <p className="text-xl m-2">
          Les noms de variables peuvent être des noms courts (comme x et y) ou
          des noms plus descriptifs (age, sum, totalVolume).
        </p>
        <h4 className="text-blue-700 text-xl ml-5 font-bold">
          Les règles générales de construction des noms de variables
          (identificateurs uniques) sont :
        </h4>
        <ul className="ml-7">
          <li className="text-[18px] mt-3">
            Les noms peuvent contenir des lettres, des chiffres, des traits de
            soulignement et des signes dollar.
          </li>
          <li className="text-[18px] m-1">
            Les noms doivent commencer par une lettre.
          </li>
          <li className="text-[18px] m-1">
            Les noms peuvent également commencer par $ et _ (mais nous ne les
            utiliserons pas dans ce tutoriel).
          </li>
          <li className="text-[18px] m-1">
            Les noms sont sensibles à la casse (y et Y sont des variables
            différentes).
          </li>
          <li className="text-[18px] m-1">
            Les mots réservés (comme les mots clés JavaScript) ne peuvent pas
            être utilisés comme noms.
          </li>
        </ul>
      </div>
      <div className=" flex justify-start flex-col">
        <h2 className="text-xl font-bold m-5 text-blue-600">
          Les mots clés: <span className="text-red-600 m-2 font-bold">let</span>
          ,<span className="text-red-600 m-2 font-bold">const</span>
        </h2>
        <div className="ml-6 text-xl">
          <p className="text-black font-normal">
            <span className="text-red-600 m-2 ">const</span> mot-clé a été
            introduit dans ES6 (2015) .
          </p>
          <p className="text-black font-normal">
            Les variables définies avec{" "}
            <span className="text-red-600 m-2 ">const</span> ne peuvent pas être
            redéclarées .
          </p>
          <p className="text-black font-normal">
            Les variables définies avec{" "}
            <span className="text-red-600 m-2 ">const</span> ne peuvent pas être
            réaffectées.
          </p>
          <p className="text-black font-normal">
            Les variables définies avec{" "}
            <span className="text-red-600 m-2 ">const</span> ont une portée de
            bloc .
          </p>
        </div>
      </div>
      <CodeBlock>
        {`
            const person= "john";
            person="bill";
            //cela generera une erreur
          `}
      </CodeBlock>
             <h2 className="text-2xl font-bold m-5">Types de données JavaScript</h2>
        <p>
        Une valeur en JavaScript est toujours d’un certain type. Par exemple, une chaîne de caractères ou un nombre.
        </p>
        <p className="text-xl m-3 font-bold text-blue-600">
          JavaScript a 8 types de données
        </p>
        <ol className="text-xl">
          <li>1 String</li>
          <li>2 Number</li>
          <li>3 Boolean</li>
          <li>4 Bigint</li>
          <li>5 Null</li>
          <li>6 Undefined</li>
          <li>7 Symbol</li>
          <li>8 Object</li>
        </ol>
        <h4 className="text-xl m-3 font-bold text-blue-600">
          Le type de données d'objet
        </h4>
        <p className="text-xl m-3">Peut contenir </p>
        <ol className="text-xl">
          <li>1 Object</li>
          <li>2 Array</li>
          <li>3 Date</li>
        </ol>
        <h4>Exemple</h4>
        <>
          <div className="p-2">
            <CodeBlock>
              {`
//Numbers
let x=12;
var y=1.23;
`}
            </CodeBlock>
          </div>
          {/* ob */}
          <div className="p-2">
            <CodeBlock>
              {`
//Strings
const firstName ="john";
let color="green";
`}
            </CodeBlock>
          </div>
          <div className="p-2">
            <CodeBlock>
              {`
// Booleans
let isValid =true;
let isRed=false;
`}
            </CodeBlock>
          </div>
          <div className="p-2">
            <CodeBlock>
              {`
// Object
const person ={
name: 'John',
age:23,
colorYeux: "marron"
}
`}
            </CodeBlock>
          </div>
          <div className="p-2">
            <p className=" opacity-90 text-green-500 ml-5"></p>
            <CodeBlock>
              {`
// Array
const fruits=["banana", "cerise", "orange", "mango"]
`}
            </CodeBlock>
          </div>
          <div className="p-2">
            <CodeBlock className={"first-letter"}>
              {
                //date
                `const date=new Date("2022-03-25")`
              }
            </CodeBlock>
          </div>
        </>
        {/* typeOf */}
        <h4 className="text-xl m-3 font-bold text-blue-600">
          Le typeOf de Javascript:
        </h4>
        <p className="text-xl ml-5">
          Vous pouvez utiliser l'opérateur JavaScript{" "}
          <span className="text-red-600 font-bold">typeof</span> pour trouver le
          type d'une variable JavaScript.
        </p>
        <div className="p-2">
          <CodeBlock>
            {`
const date=new Date("13-02-2023")
console.log(typeof date) // date
const user={name: "tom", email:"tom@gmail.com"}
console.log(typeof user) // object
`}
          </CodeBlock>
        </div>
    </div>
  );
};

export default Variables;
