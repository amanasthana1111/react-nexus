const React = {
    createElement : (tag , styles , children)=>{
        const element  = document.createElement(tag);

        if(typeof children === 'object'){
            for(let val of children){
                element.append(val)
            }
        }
        else{
                    element.innerText = children;

        }
        
        for(let key in styles){
            element.style[key] = styles[key];
        }


        return element;
    }
}

const ReactDOM = {
    render : (element , root)=>{
        root.append(element);
    }
}


const Header = React.createElement("h1",{color: "blue"} , "hellw aman asthana")
const list1 = React.createElement("li" , {} , "html");
const list2 = React.createElement("li" , {} , "css");
const list3 = React.createElement("li" , {} , "js");
const list = React.createElement("ul" , {} ,[list1 , list2,list1] )

// const root = document.querySelector(".root");
// root.append(Header);


ReactDOM.render(list , document.querySelector(".root"))