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
          <h2 className="text-2xl font-bold m-5">Opérateurs Récap</h2>
          <img src={C3} alt="" className="m-4" />
          <img src={C4} alt="" className="m-4" />
          <img src={C1} alt="" className="m-4" />
          <img src={C2} alt="" className="m-4" />
        </div>
 
      </div>
    </div>
  );
};

export default Operators;
