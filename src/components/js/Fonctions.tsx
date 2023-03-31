

const Functions=()=>{
  
  return (
    
     <div className='h-[100vh] overflow-scroll'>
    <div className=" ml-5">
    <h2 className='text-2xl font-bold m-5'>Functions JavaScript</h2>
    <p className="text-xl">Une fonction JavaScript est un bloc de code conçu pour effectuer une tâche particulière.</p>
    <p className="text-xl">Pour exécuter une fonction il faut l'appeler</p>
         <div className="editor bg-[#e1dddd] w-8/12 m-5">
        <span className='text-blue-600 text-xl p-2'>function</span> myFunction (arg1,arg2)    &#123;
           <br/>
          <span className='text-red-600 ml-3 text-xl'>
           return 
          </span> arg1 * arg2
          <br/>
        <span className="ml-3"> &#125; </span>; <br/>
        <p className="opacity-20">// pour exécuter la function </p>
         <p>myFunction(2,3)</p>
     </div>
    </div>
    </div>
    )
}

export default Functions