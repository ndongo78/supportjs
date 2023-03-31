import React from "react"
import Prism from "prismjs"

export const CodeBlock=({className, children})=>{
  
  

React.useEffect(()=>{
    if(typeof window !== "undefined"){
      Prism.highlightAll();
    }
  },[])
  
  return (
     <div className="flex flex-cols m-4 rounded">
     <pre>
     <code className={`language-javascript`}>
      {children}
      </code>
     </pre>
     </div>
    )
}