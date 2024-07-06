import {useState} from 'react';
import "./styles/quantityPicker.css"

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);
    
    function decrease() {
        let val = quantity - 1;
        if (val >= 0) {
            setQuantity(val);
        }
    }

    function increase() {
        let val = quantity + 1;
        setQuantity(val);
    }
    
    return (
        <div className="quantity-picker">
            <button className="quantity-button" disabled={quantity ===0} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className="quantity-button" onClick={increase}>+</button>
        </div>
    )
}

export default QuantityPicker;