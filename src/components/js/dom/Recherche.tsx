// @flow
import * as React from 'react';
import {CodeBlock} from "../../CodeBlock";



export function Recherche() {
    return (
        <div className="h-[100vh] overflow-scroll">
            <h2 className="text-2xl font-bold m-5">Recherche un élement du DOM</h2>
            <h3 className='m-5 text-2xl font-bold text-blue-600'>Recherche d'élément HTML par identifiant</h3>
            <p>
                <span className="text-red-600">document.getElementById</span> : Permet de rechercher un élement du dom par son identifiant
            </p>
            <p>Cet exemple trouve l'élément avec id="myDiv"</p>
            <CodeBlock>
                {`
let myDiv = document.getElementById('myDiv');
`}
            </CodeBlock>
            <h3 className='m-5 text-2xl font-bold text-blue-600'>Recherche d'éléments HTML par nom de balise</h3>
            <p>
                <span className="text-red-600">document.getElementsByTagName</span> : cherche les éléments avec le tag donné et renvoie l’ensemble de ces éléments
            </p>
            <p>
                <span className="text-red-600">document.getElementsByClassName</span> : renvoie les éléments qui ont la classe CSS donnée.
            </p>
            <p>
                <span className="text-red-600">document.getElementsByName</span> : renvoie les éléments qui ont l’attribut name, dans tout le document. Très rarement utilisé.
            </p>
            <p>Cet exemple trouve tous {`<p>`} les éléments</p>
            <CodeBlock>
                {`
let myPbalise = document.getElementsByTagName("p");
`}
            </CodeBlock>
            <p>Cet exemple renvoie une liste de tous les éléments avec class="root"</p>
            <CodeBlock>
                {`
let x = document.getElementsByClassName("root");
`}
            </CodeBlock>
            <h3 className='m-5 text-2xl font-bold text-blue-600'>Recherche d'éléments HTML par les sélecteurs css</h3>
            <p>
                <span className="text-red-600">document.querySelector</span> : renvoie le premier élément d’un sélecteur CSS donné.
            </p>
            <p>
                <span className="text-red-600">document.querySelectorAll</span> : renvoie une collection de nodeList.
            </p>
            <CodeBlock>
                {`
let myPbalise = document.querySelector("p");
`}
            </CodeBlock>
            <CodeBlock>
                {`
let myPbalises = document.querySelectorAll("li");
`}
            </CodeBlock>
            <h3 className='m-5 text-2xl font-bold text-blue-600'>Récuperer les attributes d'un élément</h3>
            <p>
                <span>element.getAttribute(attribute)</span> : Permet recuperer l'attribute d'un element <br/>
                <span>element.getAttribute(attribute)</span> : Permet de modifier l'attribute d'un element par un nouveau attribute <br/>
                <span>element.removeAttribute(attribute)</span> : Permet de supprimer  l'attribute d'un element <br/>
            </p>
        </div>
    );
};