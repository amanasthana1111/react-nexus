import React, { useState } from "react";
import ReactDom from "react-dom/client";

const h1 = <h1>ed</h1>


const App = ()=>{

    const [i , seti] = useState(0);
    
    
    function inc(){
        seti((c)=>c+1);
    }
    function dec(){
        seti((c)=>c-1);
    }
    function z(){
        seti((c)=>0);
    }
    
    return (<>
    
    <div>
        <h3>Count : {i}</h3>
        <button  onClick={inc}>incement</button>
        <button onClick={dec}>decr</button>
        <button onClick={z}>zero</button>
    </div>
    
    </>)
}




const root = ReactDom.createRoot(document.querySelector(".root"));
root.render(<App></App>)