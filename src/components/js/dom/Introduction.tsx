import React from 'react'
import c8 from "../../../assets/pic_htmltree.gif"
import c9 from "../../../assets/c9.png"
import c10 from "../../../assets/c10.png"
import c11 from "../../../assets/c11.png"
import  c12 from "../../../assets/c12.png"
import { CodeBlock } from '../../CodeBlock'

const Introduction = () => {
  return (
    <div className="h-[100vh] overflow-scroll">
      <div className="">
        <h2 className="text-2xl font-bold m-5">DOM JavaScript</h2>
        <h3 className='text-xl m-5'>Le DOM HTML (Document Object Model)</h3>
        <p>Lorsqu'une page Web est chargée, le navigateur crée un modèle d' objet de document de la page.
<br />
Le modèle HTML DOM est construit comme un arbre d' Objets 
<br />
L'arborescence d'objets HTML DOM
</p>
        <img src={c8} alt="" className='m-5'/>
        <p>
        Avec le modèle objet, JavaScript obtient toute la puissance dont il a besoin pour créer du HTML dynamique :
<br />
<br />
JavaScript peut modifier tous les éléments HTML de la page <br />
JavaScript peut modifier tous les attributs HTML de la page <br />
JavaScript peut modifier tous les styles CSS de la page <br />
JavaScript peut supprimer des éléments et des attributs HTML existants <br />
JavaScript peut ajouter de nouveaux éléments et attributs HTML <br />
JavaScript peut réagir à tous les événements HTML existants dans la page <br />
JavaScript peut créer de nouveaux événements HTML dans la page <br />
    </p>
          <h2 className="text-2xl m-5">Il existe un objet “racine” appelé <span className="text-red-600">window</span>. Il a 2 rôles</h2>
          <ul className="ml-10 text-xl">
              <li>Premièrement, c’est un objet global pour le code JavaScript</li>
              <li>Deuxièmement, il représente la “fenêtre du navigateur” et fournit des méthodes pour la contrôler</li>
          </ul>
          <CodeBlock>
{
  `
   function sayHello(){
    console.log("Hello john")
   }
   // les fonctions globales sont des méthodes de l'objet global :
    window.sayHello();
  `
}
          </CodeBlock>
          <h2 className="text-2xl font-bold m-5">DOM (Document Object Model)</h2>
          <p>
              Document Object Model, ou DOM en abrégé, représente tout le contenu de la page sous forme d’objets pouvant être modifiés.
              <br/>
              L’objet <span className="text-red-600">document</span>  est le “point d’entrée” principal de la page. Nous pouvons changer ou créer n’importe quoi sur la page en l’utilisant.
              <CodeBlock>
                  {
                      `
 // change la couleur de fond en rouge
document.body.style.background = "red";

// réinitialisation après 1 seconde
setTimeout(() => document.body.style.background = "", 1000);
  `
                  }
              </CodeBlock>
          </p>
          <h2 className="text-2xl font-bold m-5">BOM (Browser Object Model)</h2>
          <p>
              Le modèle d’objet du navigateur (BOM en anglais) contient des objets supplémentaire fourni par le navigateur (l’environnement hôte) pour travailler avec tout à l’exception du document.
          <p>Par exemple:</p>
           <ul>
               <li>
                   L’objet <span className="text-red-600">navigator</span>  fournit des informations contextuelles à propos du navigateur et du système d’exploitation. Il y a beaucoup de propriétés mais les deux plus connues sont : navigator.userAgent – qui donne des informations sur le navigateur actuel, et navigator.platform sur la plateforme (peut permettre de faire la différence entre Windows/Linux/Mac etc).
               </li>
               <li>
                   L’objet <span className="text-red-600">location</span>  nous permet de lire l’URL courante et peut rediriger le navigateur vers une nouvelle adresse.
               </li>
           </ul>
              <h3>Voici comment l’on peut utiliser l’objet location :</h3>
              <CodeBlock>
                  {
                      `
console.log(location.href); // affiche l'URL actuelle
if (confirm("Go to google")) {
  location.href = "https://google.com"; // rediriger le navigateur vers une autre URL
}
  `
                  }
              </CodeBlock>
          </p>
    <div>
    </div>
</div>
</div>
  )
}

export default Introduction