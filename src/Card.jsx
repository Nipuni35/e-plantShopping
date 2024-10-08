/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const Card = ({ plant }) => {
  const dispatch = useDispatch();  
  const plants = useSelector((state) => state.cart.items);
  const { name, image, description, cost } = plant;
  const [disableButton, setDisableButton] = useState(false);
  
  const handleAddToCart = (plant) => {
    // e.preventDefault();
    setDisableButton(true); 
    let payload = {
        ...plant,
        counter : 1
    }
    dispatch(addItem(payload));
  };
  useEffect(() => {
    const p = plants.find((x)=>x.name === name);
    if (p && p.counter > 0) {
        setDisableButton(true);
    }
  },[]);

  return (
    <div style={styles.card}>
      <button style={styles.tag}>SALE</button>
      <h2 style={styles.title}>{name}</h2>
      <div style={styles.imageBox}>
        <img src={image} alt={name} style={styles.image} />
      </div>
      <h3 style={styles.cost}>{cost}</h3>
      <div style={styles.content}>
        <p style={styles.description}>{description}</p>
        <button
          style={!disableButton ? styles.button : styles.disableButton}
          onClick={() => handleAddToCart(plant)}
        >
          {!disableButton ? "Add to Cart" : "Added to Cart"} 
        </button>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "30%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    margin: "16px",
    position: "relative", // Position relative for absolute positioning of the tag
    display: "flex",
    flexDirection: "column",
  },
  tag: {
    position: "absolute",
    top: "0px",
    right: "0px",
    fontSize: "1rem",
    padding: "10px 10px",
    color: "white",
    backgroundColor: "red",
    border: "none",
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "200px",
    overflow: "hidden",
  },
  image: {
    maxWidth: "100%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    padding: "16px",
    textAlign: "center",
  },
  title: {
    fontSize: "1.5rem",
    marginTop: "30px",
    marginBottom: "10px",
    textAlign: "center",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
    fontStyle: "italic",
    textAlign: "center",
  },
  cost: {
    fontSize: "1.5rem",
    margin: "0",
    color: "red",
    textAlign: "center",
  },
  button: {
    fontSize: "1rem",
    padding: "10px",
    margin: "20px 20px",
    color: "white",
    backgroundColor: "#4caf50",
    border: "2px solid #4caf50",
    cursor: "pointer",
  },
  disableButton: {
    fontSize: "1rem",
    padding: "10px",
    margin: "20px 20px",
    color: "white",
    backgroundColor: "#808080",
    border: "2px solid #808080",
    cursor: "pointer",
  },
};

export default Card;
