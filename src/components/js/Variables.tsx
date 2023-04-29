import React from "react";
import { CodeBlock } from "../CodeBlock";
import Box from '../../assets/variable.svg'
import BoxChange from '../../assets/variable-change.svg'

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
        <p>Par exemple, la variable message peut être imaginée comme une boîte étiquetée “message” avec la valeur “Hello!” à l’intérieur :</p>
        <CodeBlock>
  {`let message ="hello"`}
</CodeBlock>
        <div className="">
          <img src={Box} alt="" color="black" />
        </div>
        <p>
        Nous pouvons mettre n’importe quelle valeur dans la boîte.
<br />
On peut aussi le changer autant de fois qu’on veut :
      </p>
  <CodeBlock>
  {`let message ="world"`}
</CodeBlock>
      <div className="">
          <img src={BoxChange} alt="" color="black" />
        </div>

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
            <p>exemple: Des variables nommées person et PERSON sont deux variables différentes.</p>
          </li>
          <li className="text-[18px] m-1">
            Les mots réservés (comme les mots clés JavaScript) ne peuvent pas
            être utilisés comme noms.
            <p>exemple: Par exemple, les mots let, class, return, function sont réservés</p>
<CodeBlock>
{
`
//Le code ci-dessous donne une erreur de syntaxe :

let let = 5; // impossible de nommer une variable "let", erreur!
let return = 5; // on ne peut pas la nommer "return" aussi, erreur!
`
}
</CodeBlock>
          </li>
        </ul>
      </div>
      <div className=" flex justify-start flex-col">
        <h2 className="text-xl font-bold m-5 text-blue-600">
          Les mots clés: 
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
        <p>
          Nous pouvons déclarer des variables pour stocker des données. Cela peut être fait en utilisant <span className="text-red-600">var</span> ou <span className="text-red-600">let</span> ou <span className="text-red-600">const</span>.
<br />
 <span className="text-red-600">let</span>  – est une déclaration de variable moderne. <br />
 <span className="text-red-600">var</span> – est une déclaration de variable old-school. Normalement, nous ne l’utilisons pas du tout. <br />
 <span className="text-red-600">const</span> – est équivalent à <span className="text-red-600">let</span>, mais la valeur de la variable ne peut pas être modifiée. <br />
Les variables doivent être nommées d’une manière qui nous permet de comprendre facilement ce qui est à l’intérieur.
          </p>
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
            <ol className="text-xl m-3">
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
        <ol className="text-xl m-3">
          <li>1 Object</li>
          <li>2 Array</li>
          <li>3 Date</li>
        </ol>
        
        <>
    <div className="p-2">
    <h4 className=" text-xl m-3 text-red-500">Number</h4>
    <p>
    Le type number sert à la fois à des nombres entiers et à des nombres à virgule flottante.
 <br />
Il existe de nombreuses opérations pour les nombres, par ex. multiplication *, division /, addition +, soustraction - et ainsi de suite.
<br />
Outre les nombres réguliers, il existe des “valeurs numériques spéciales” qui appartiennent également à ce type: Infinity, -Infinity et NaN.
            </p>
<CodeBlock>
{`
//Numbers
let x=12;
var y=1.23;
`}
</CodeBlock>
  <p>
  NaN représente une erreur de calcul. C’est le résultat d’une opération mathématique incorrecte ou non définie, par exemple 
  <CodeBlock>
{`
//Nan
   let x= "12" / 2
   console.log(x) // return NaN
`}
</CodeBlock>
  </p>
  <h4 className=" text-xl m-3 text-red-500">String</h4>
  <p>
    Une chaîne de caractères en JavaScript doit être entre guillemets.
    <CodeBlock>
{`
   let x= "12" 
   let x= '12' 
`}
</CodeBlock>
</p>
<h4 className=" text-xl m-3 text-red-500">Boolean</h4>
<p>
Le type booléen n’a que deux valeurs: true et false.
<br />
Ce type est couramment utilisé pour stocker des valeurs oui / non: true signifie “oui, correct” et false signifie “non, incorrect”
<CodeBlock>
  {
    `
let nameFieldChecked = true; // oui, le champ de nom est coché
let ageFieldChecked = false; // non, le champ d'âge n'est pas coché
    `
  }
</CodeBlock>
</p>
<h4 className=" text-xl m-3 text-red-500">Null et Undefined</h4>
<p>
La valeur spéciale null n’appartient à aucun type de ceux décrits ci-dessus.
<br />
Il forme un type bien distinct qui ne contient que la valeur null :
{
    `
    let age = null;
    `
  }
</p>
<p>
La valeur spéciale undefined se distingue des autres. C’est un type à part entière, comme null.
<br />
La signification de undefined est “la valeur n’est pas attribuée”.
<br />
Si une variable est déclarée mais non affectée, alors sa valeur est exactement undefined :
{
    `
    let age;
    console.log(age); // affiche "undefined"
    `
  }
</p>
          </div>
          {/* ob */}
          <div className="p-2">
          <h4 className=" text-xl m-3 text-red-500">Object</h4>
            <p>les objets servent à stocker des collections de données et des entités plus complexes.</p>
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
