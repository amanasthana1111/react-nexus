import React from "react";
import ReactDOM from "react-dom/client"

const h = React.createElement("h1" , { key:  122 , style : {color: "red"}} , "hello AMAN ASTHANA")
const h1 = React.createElement("h1" , { key:  12 , style : {color: "red"}} , "hello AMAN ASTHANA")
const div1 = React.createElement("div" , { key : 1 , style : {color: "red"}} , [h , h1])







const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(div1);

