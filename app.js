import React from "react";
import ReactDom from "react-dom/client"
// import "./style.css"

const h = React.createElement("h3" , {style :{color : "yellow"}} , "Aman Asthana")

const root = ReactDom.createRoot(document.querySelector(".root"));


//jsx

const new1 = <div>
    <div className="main">
  <header>
    <h1 key="about">About</h1>
    <h1 key="news">News</h1>
    <h1 key="cart">Cart</h1>
    <i className="ri-shopping-bag-line" key="bag-icon"></i>
  </header>

  <div className="hero">
    <h1 key="hero-text">
      Lightly padded,<br />
      quality jacket in <br />
      recycled polster.
    </h1>
  </div>

  <div className="hero-2">
    <div className="section">
      <p key="hero-para">
        Lorem ipsum dolor sit amet consectetur adipisicing <br />
        Pariatur, laudantium? Quasi accusamus optio <br />
        repudiandae tempore libero iusto, dolor assumenda incidunt, <br />
        vitae voluptatibus, unde sit totam hic
      </p>
    </div>

    <div className="section-2" style={{color : "green"}}>
      <div key="add-to-cart">
        <h1>Add to cart</h1>
        <i className="ri-arrow-right-up-line"></i>
      </div>
      <div key="product-details">
        <h1>Product Details</h1>
        <i className="ri-arrow-right-up-line"></i>
      </div>
      <div key="shipping">
        <h1>Shipping</h1>
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  </div>
</div>

</div>
root.render(new1)