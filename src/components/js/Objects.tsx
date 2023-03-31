import React from 'react'
import { CodeBlock } from '../CodeBlock'
import c5 from "../../assets/c5.png"



const Objects = () => {
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="m-5">
        <h2 className="text-2xl font-bold m-5">Objets JavaScript</h2>
        <p>En JavaScript, les objets sont des structures de données qui permettent de stocker et d'organiser des données de manière hiérarchique. Un objet peut contenir des propriétés, qui peuvent être des valeurs primitives ou des fonctions, ainsi que des méthodes, qui sont des fonctions attachées à l'objet.</p>
<CodeBlock>
{`
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    sayHello:()=>console.log("Hello" + person.firstName),
};
`}
</CodeBlock>
  <img src={c5} alt="pro" className='ml-4'  />
  <div className='m-4'>
    <h2 className="text-2xl font-bold m-5">Accéder aux propriétés de l'objet</h2>
  <p>Pour accéder aux propriétés d'un objet en utilisant la notation pointée ou la notation crochetée</p>
    <p> Par exemple, pour accéder à la propriété firstName de notre objet person, nous pouvons écrire :</p>
<CodeBlock>
    {`
console.log(person.firstName); // affiche "john"
    `}
</CodeBlock>
    </div>
    
    </div>
    </div>
  )
}

export default Objects