import ReactDOM from "react-dom/client";
import arr from "./utiles";
// Header Component
import Header from "./component/Header";
import Card from "./component/Card";
import Footer from "./component/Footer";
import { useState } from "react";
// Card Component

function App() {
  

  const [a1, setA] = useState(arr)
  function sorting() {
    a1.sort((a,b)=> a.price-b.price)
    setA([...a1]);
  }
    function sortbyPrice() {
    const b= a1.filter((val)=> val.price>700)
    setA(b);
  }
 
  

  return (
    <>
    
      <Header />
      <button className="btn1" onClick={sorting}>
        Sort
      </button>
      <button className="btn1" onClick={sortbyPrice}>Sortbyprice by 700</button>
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        {a1.map((data) => (
          <Card
            key={data.id}
            name={data.name}
            offer={data.offer}
            price={data.price}
            img={data.img}
          />
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
