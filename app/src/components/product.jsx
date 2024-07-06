import QuantityPicker from "./quantityPicker";
import "./styles/product.css"

function Product(props) {
    function add() {
        console.log("adding..." + props.info.title);
    }
    
    return (
        <div className="product">

            <img src={"/images/" + props.info.image} alt="" />

            <h1>{props.info.title}</h1>

            <label>${props.info.price.toFixed(2)}</label><label>${props.info.price.toFixed(2)}</label>

            <div className="controls">
                <QuantityPicker></QuantityPicker>

                <button onClick={add} className="btn btn-sm btn-primary">Add</button>
            </div>
        </div>
    )
}

export default Product;