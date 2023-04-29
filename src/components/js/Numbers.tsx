import React from 'react'
import { CodeBlock } from '../CodeBlock'


const Numbers = () => {
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="">
        <h2 className="text-2xl font-bold m-5">Numbers JavaScript</h2>
        <p>JavaScript n'a qu'un seul type de Number.Les nombres peuvent etre entier ou décimal
        </p>
        <CodeBlock>
        {`
let x = 3.14;    // nombres  decimals
let y = 3;       // nombres entier 
        `}
        </CodeBlock>
        <h3 className='text-2xl font-bold m-3 text-blue-500'>Les méthodes</h3>
        <p>
        toString() : retourne une chaîne de caractères représentant num dans le système numérique de la base donnée
        <CodeBlock>
        {`
let x = 123;
x.toString();
        `}
        </CodeBlock>
        </p>
        <p>
        toFixed():  arrodi un nombre aupres
        <CodeBlock>
        {`
let x = 9.656;
x.toFixed(0);
        `}
        </CodeBlock>
        </p>
        <p>
        Number(): méthode peut être utilisée pour convertir des variables JavaScript en nombres 
        <CodeBlock>
        {`
Number(true);
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("John");
        `}
        </CodeBlock>
        </p>
        <p>
        parseInt(): analyse une chaîne et renvoie un nombre entier. Les espaces sont autorisés. Seul le premier nombre est renvoyé
        <CodeBlock>
        {`
parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");
        `}
        </CodeBlock>
        </p>
        <p>
        parseFloat(): permet de transformer une chaîne de caractères en un nombre flottant
        <CodeBlock>
        {`
     parseFloat("10");
        `}
        </CodeBlock>
        </p>
    </div>
    </div>
  )
}

export default Numbers