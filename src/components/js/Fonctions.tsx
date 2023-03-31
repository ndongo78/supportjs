import React from "react"
import {CodeBlock} from "../CodeBlock"

const Functions=()=>{
  
  const fun  =`
function sum(a, b) {
  return a + b;
}`
  
  return (
    
     <div className='h-[100vh] overflow-scroll'>
    <div className=" ml-5">
    <h2 className='text-2xl font-bold m-5'>Functions JavaScript</h2>
    <p className="text-xl">Une fonction JavaScript est un bloc de code conçu pour effectuer une tâche particulière.</p>
    <p className="text-xl">Pour exécuter une fonction il faut l'appeler</p>

   <CodeBlock>
      {
 `
function sum(a, b) {
  return a + b;
}`
      }
     </CodeBlock>
     
     <p>Une fonction JavaScript est définie avec le functionmot-clé, suivi d'un nom , suivi de parenthèses () .
     </p>
      <p>
    Les noms de fonction peuvent contenir des lettres, des chiffres, des traits de soulignement et des signes dollar (mêmes règles que les variables).
      </p>
      <p>
Les parenthèses peuvent inclure des noms de paramètres séparés par des virgules :
( paramètre1, paramètre2, ... )
</p>
 <p className="text-xl">
 Le code à exécuter, par la fonction, est placé entre accolades : &#123; &#125;
 </p>
 <CodeBlock>
{`function name(parameter1, parameter2, parameter3) {
  // code to be executed
}`}
 </CodeBlock>
  <h3 className='text-xl font-bold m-5 text-blue-600'>Pourquoi Fonctions ?</h3>
  <p>Vous pouvez réutiliser le code : définissez le code une fois et réutilisez-le plusieurs fois.
<br/>
Vous pouvez utiliser le même code plusieurs fois avec des arguments différents, pour produire des résultats différents.</p>
  <h3 className='text-xl font-bold m-5 text-blue-600'>Utilisation des Fonctions comme des variables </h3>
  <p>Les fonctions peuvent être utilisées de la même manière que vous utilisez des variables, dans tous les types de formules, d'affectations et de calculs.</p>
     <CodeBlock>
      {
 `
function calculCourse(price, nombreItemDansPanier) {
  return price * nombreItemDansPanier;
}
let total= calculCourse(10,5)
console.log(x) // affiche 50 
`
  }
     </CodeBlock>
    </div>
    </div>
    )
}

export default Functions