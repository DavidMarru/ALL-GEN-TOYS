import React, { useContext, useState, useEffect } from "react";
import CartContext from "./CartContext";
import "./CheckOut.css";

const CheckOut = () => {
  const { items, removeFromCart } = useContext(CartContext);
  const [quantityInput, setQuantityInput] = useState({});
  const [discountCode, setDiscountCode] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [discountMessage, setDiscountMessage] = useState("");
  const [discountAmountMessage, setDiscountAmountMessage] = useState("");
  const [correctDiscountCode] = useState("ALLGENTOYS23");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [totalSubPrice, setTotalSubPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryFe, setdeliveryFee] = useState(5);

  const calculateSubPrice = () => {
    let subPrice = 0;
    
    for (const productId in items) {
      const item = items[productId];
      subPrice += item.price * (quantityInput[productId] || item.quantity);
    } 
        
    let discountApplied = 0;

    if (subPrice > 70) {
      discountApplied = subPrice * 0.15;
      console.log(discountApplied)
      setDiscountAmountMessage('15% off applied');
      setDiscountAmount(discountApplied);
    } else {
      setDiscountAmountMessage('');
      setDiscountAmount(0);
    }

    
    setTotalSubPrice(subPrice);
    setTotalPrice(subPrice += (deliveryFe));
  };
  
  const applyDiscount = () => {

    if (discountCode === correctDiscountCode) {
      setIsDiscountApplied(true);
      setDiscountMessage("Discount code applied ;)");
      setdeliveryFee(0)
    } else {
      setIsDiscountApplied(false);
      setDiscountMessage("This Discount code is not valid :(");
    }
  };

  const handleRemove = (productId) => {
    removeFromCart(productId, quantityInput[productId]);
    setQuantityInput((prevInput) => ({ ...prevInput, [productId]: undefined }));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = Math.max(0, Math.floor(newQuantity));
    setQuantityInput((prevInput) => ({ ...prevInput, [productId]: quantity }));

    const updatedItems = { ...items };
    updatedItems[productId].quantity = quantity;
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  useEffect(() => {
    calculateSubPrice();
  }, [items, quantityInput, isDiscountApplied, discountCode]);

  return (
    <div className="cart-Wrapper">
      <div className="cart-container">
        <div className="Cart-header">
          <h2>Order Summary</h2>
        </div>
        <div className="cart-content">
          <div className="Shopping-bag">
            {Object.keys(items).map((productId) => (
              <div className="cart-cards" key={productId}>
                <img src={items[productId].imagePath} alt={items[productId].name} />
                <div className="cart-info">
                  <h2>{items[productId].name}</h2>
                  <h3>£{items[productId].price}</h3>
                  <div className="quantity">
                    <label>Quantity:</label>
                    <input
                      type="number"
                      value={quantityInput[productId] || items[productId].quantity}
                      onChange={(e) => handleQuantityChange(productId, e.target.value)}
                    />
                  </div>
                  <button className="removeBtn" onClick={() => handleRemove(productId)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="sub-container">
            <div className="cart-sub">
              <div className="discount">
                <h3>Discount code</h3>
                <div className="discount-input">
                  <input
                    type="text"
                    placeholder="ENTER CODE HERE..."
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                  />
                  <button onClick={applyDiscount}>APPLY</button>
                  {discountMessage && <p className="discount-Message">{discountMessage}</p>}
                </div>
              </div>
              <div className="cost">
                <div className="subT">
                  <span>Sub Total:</span> <span className="number">£{totalSubPrice.toFixed(2)}</span>
                </div>
                <div className="Discount-Applied">
                  <span className="number">- £{discountAmount.toFixed(2)}</span>
                  {discountAmountMessage && <span className="15%odd">{discountAmountMessage}</span>}
                </div>
                <div className="subT">
                  <span>Delivery:</span> <span className="number"> £{deliveryFe.toFixed(2)}</span>
                </div>
                <div className="subT">
                  <span>Total:</span> <span className="number">£{totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button className="checkOut-Btn">Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
