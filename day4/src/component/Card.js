

function Card(props) {
  

  return (
    <div
    
      style={{
        width: "220px",
        height: "300px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(14, 13, 13, 0.1)",
        backgroundColor: "#fff",
        textAlign: "center",
        padding: "10px",
      }}
    >
      {/* <button onClick={filter}>filter</button> */}
      <img
        style={{
          width: "100%",
          height: "160px",
          objectFit: "contain",
          borderRadius: "8px",
        }}
        src={props.img}
        alt="Product"
      />
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"pink",
          gap: "8px",
        }}
      >
        <h3 style={{ fontSize: "16px", margin: 0 }}>{props.name}</h3>
        <p style={{ fontSize: "14px", color: "#444", margin: 0 }}>
          {props.offer}
        </p>
        <p style={{ fontSize: "15px", fontWeight: "bold", margin: 0 }}>
          ₹{props.price}
        </p>
      </div>
      
    </div>

  );
}



export default Card;