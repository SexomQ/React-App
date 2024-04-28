import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import HappyCard from "./HappyCard";


function Happy({items, handleAdd}) {

    // const [cart, setCart] = React.useState([]);

    // const handleAdd = (item) => {
    //     cart.push(item);
    //     setCart([...cart, item]);
    // }

    return (
        <div className="Happy mt-5">
            <h4 className="">Happy Cinema</h4>
            {/* movies cards */}
            <div style={{margin:"0 -10px"}}>
                <HappyCard items_={items} handleAdd={handleAdd} />
            </div>
        </div>
    );
}

export default Happy;