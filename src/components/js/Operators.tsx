import React from 'react'
import Img from "../../assets/img_operators.jpeg"
import C1 from "../../assets/c1.png"
import C2 from "../../assets/c2.png"
import C3 from "../../assets/c3.png"
import C4 from "../../assets/c4.png"

const Operators = () => {
  return (
    <div className='h-[100vh] overflow-scroll'>
    <div className=" ml-5">
    <h2 className='text-2xl font-bold m-5'>Opérateurs JavaScript</h2>
    <p className='text-xl '>L' opérateur d'addition <span className='text-blue-600 font-bold p-2'>+</span> ajoute des nombres</p>
    <p className='text-xl '>L' opérateur d'affectation <span className='text-blue-600 font-bold p-2'>=</span> affecte une valeur à une variable.</p>
     <div className='mt-3'>
        <img src={Img} alt=""  />
     </div>
     <div className="">
     <h3 className='text-xl font-bold m-5 text-blue-600'>Affectation JavaScript:</h3>
     <p className='text-xl'>L' opérateur d'affectation <span className='text-blue-600 font-bold p-2'>=</span>   affecte une valeur à une variable :</p>
     <div className="editor bg-[#e1dddd] w-8/12 m-5">
        <span className='text-blue-600 text-xl p-2'>let</span> x =  <span className='text-red-600 text-xl'>5</span>;
     </div>
     </div>
     <div className="">
     <h3 className='text-xl font-bold m-5 text-blue-600'>Ajout JavaScript:</h3>
     <p className='text-xl'>L' opérateur plus <span className='text-blue-600 font-bold p-2'>+</span>   ajoute des nombres , des string , array :</p>
     <div className="editor bg-[#e1dddd] w-8/12 m-5">
        <span className='text-blue-600 text-xl p-2'>let</span> x =  <span className='text-red-600 text-xl'>5</span>;<br />
        <span className='text-blue-600 text-xl p-2'>let</span> y=  <span className='text-red-600 text-xl'>5</span>;<br />
        <span className='text-blue-600 text-xl p-2'>let</span> w=  x <span className='text-blue-600 text-xl p-2'>+</span> y;<br />
        <p className='ml-3 p-2 text-xl'>console(w) <span className=' opacity-20'>//affiche 10</span></p>
     </div>
     </div>
     <div className="">
     <h3 className='text-xl font-bold m-5 text-blue-600'>Multiplication JavaScript:</h3>
     <p className='text-xl'>L' opérateur de multiplication <span className='text-blue-600 font-bold p-2'>*</span>   multiplie les nombres :</p>
     <div className="editor bg-[#e1dddd] w-8/12 m-5">
        <span className='text-blue-600 text-xl p-2'>let</span> x =  <span className='text-red-600 text-xl'>5</span>;<br />
        <span className='text-blue-600 text-xl p-2'>let</span> y=  <span className='text-red-600 text-xl'>5</span>;<br />
        <span className='text-blue-600 text-xl p-2'>let</span> w=  x <span className='text-blue-600 text-xl p-2'>*</span> y;<br />
        <p className='ml-3 p-2 text-xl'>console(w) <span className=' opacity-20'>//affiche 25</span></p>
     </div>
     </div>
     <div className="">
     <h3 className='text-xl font-bold m-5 text-blue-600'>Division JavaScript:</h3>
     <p className='text-xl'>L' opérateur de division <span className='text-blue-600 font-bold p-2'>/</span>   divise les nombres :</p>
     <div className="editor bg-[#e1dddd] w-8/12 m-5">
        <span className='text-blue-600 text-xl p-2'>let</span> x =  <span className='text-red-600 text-xl'>5</span>;<br />
        <span className='text-blue-600 text-xl p-2'>let</span> y=  <span className='text-red-600 text-xl'>5</span>;<br />
        <span className='text-blue-600 text-xl p-2'>let</span> w=  x <span className='text-blue-600 text-xl p-2'>/</span> y;<br />
        <p className='ml-3 p-2 text-xl'>console(w) <span className=' opacity-20'>//affiche 1</span></p>
     </div>
     </div>
     <div className="">
     <h3 className='text-xl font-bold m-5 text-blue-600'>Sous-traction JavaScript:</h3>
     <p className='text-xl'>L' opérateur de sous-traction <span className='text-blue-600 font-bold p-2'>-</span>   sous-trait les nombres :</p>
     <div className="editor bg-[#e1dddd] w-8/12 m-5">
        <span className='text-blue-600 text-xl p-2'>let</span> x =  <span className='text-red-600 text-xl'>5</span>;<br />
        <span className='text-blue-600 text-xl p-2'>let</span> y=  <span className='text-red-600 text-xl'>5</span>;<br />
        <span className='text-blue-600 text-xl p-2'>let</span> w=  x <span className='text-blue-600 text-xl p-2'>-</span> y;<br />
        <p className='ml-3 p-2 text-xl'>console(w) <span className=' opacity-20'>//affiche 0</span></p>
     </div>
     </div>
      <div className="con">
      <h2 className='text-2xl font-bold m-5'>Opérateurs Récap</h2>
        <img src={C3} alt=""  className='m-4'/>
        <img src={C4} alt=""  className='m-4'/>
        <img src={C1} alt="" className='m-4' />
        <img src={C2} alt=""  className='m-4'/>
      </div>
      <h2 className='text-2xl font-bold m-5'>Types de données JavaScript</h2>
       <p className='text-xl m-3 font-bold text-blue-600'>JavaScript a 8 types de données</p>
       <ol className='text-xl'>
        <li>1 String</li>
        <li>2 Number</li>
        <li>3 Boolean</li>
        <li>4 Bigint</li>
        <li>5 Null</li>
        <li>6 Undefined</li>
        <li>7 Symbol</li>
        <li>8 Object</li>
       </ol>
       <h4 className='text-xl m-3 font-bold text-blue-600'>Le type de données d'objet</h4>
       <p className='text-xl m-3'>Peut contenir </p>
       <ol className='text-xl'>
        <li>1 Object</li>
        <li>2 Array</li>
        <li>3 Date</li>
       </ol>
        <h4>Exemple</h4>
        <div className="editor bg-[#e1dddd] w-8/12 m-5">
       <div className="p-2">
       <p className=' opacity-90 text-green-500 ml-5'>// Numbers</p>
        <span className='text-blue-600 text-xl p-2'>let</span> x =  <span className='text-red-600 text-xl'>5</span>;<br />
        <span className='text-blue-600 text-xl p-2'>let</span> y=  <span className='text-red-600 text-xl'>5.3</span>;<br />
       </div>
       {/* ob */}
       <div className="p-2">
       <p className=' opacity-90 text-green-500 ml-5'>// Strings</p>
        <span className='text-blue-600 text-xl p-2'>let</span> name =  <span className='text-red-600 text-xl'>"john"</span>;<br />
        <span className='text-blue-600 text-xl p-2'>let</span> color=  <span className='text-red-600 text-xl'>"black"</span>;<br />
       </div>
       <div className="p-2">
       <p className=' opacity-90 text-green-500 ml-5'>// Booleans</p>
        <span className='text-blue-600 text-xl p-2'>let</span> isValid =  <span className='text-red-600 text-xl'>false</span>;<br />
        <span className='text-blue-600 text-xl p-2'>let</span> isRed=  <span className='text-red-600 text-xl'>true</span>;<br />
       </div>
       <div className="p-2">
       <p className=' opacity-90 text-green-500 ml-5'>// Object</p>
        <span className='text-blue-600 text-xl p-2'>const</span> person =  <span className='text-red-600 text-xl'>&#123;name: "john",age:26 &#125; </span>;<br />
       </div>
       <div className="p-2">
       <p className=' opacity-90 text-green-500 ml-5'>// Array</p>
        <span className='text-blue-600 text-xl p-2'>const</span> cars =  <span className='text-red-600 text-xl'>	&#91;"renault","bmw","mini" &#93; </span>;<br />
       </div>
       <div className="p-2">
       <p className=' opacity-90 text-green-500 ml-5'>// date</p>
        <span className='text-blue-600 text-xl p-2'>const</span> date =  <span className='text-red-600 text-xl'>	new Date("2022-03-25") </span>;<br />
       </div>
     </div>
     {/* typeOf */}
     <h4 className='text-xl m-3 font-bold text-blue-600'>Le typeOf de Javascript:</h4>
     <p className='text-xl ml-5'>Vous pouvez utiliser l'opérateur JavaScript <span className='text-red-600 font-bold'>typeof</span>  pour trouver le type d'une variable JavaScript.</p>
     <div className="p-2">
        <span className='text-blue-600 text-xl p-2'>const</span> date =  <span className='text-red-600 text-xl'>	new Date("2022-03-25") </span>;<br />
       <p className=' opacity-90 text-green-500 ml-5'>// date</p>
       </div>
    </div>
    </div>
  )
}

export default Operators