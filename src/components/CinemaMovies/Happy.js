import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import HappyCard from "./HappyCard";


function Happy({items}) {

    return (
        <div className="Happy mt-5">
            <h4 className="">Happy Cinema</h4>
            {/* movies cards */}
            <div style={{margin:"0 -10px"}}>
                <HappyCard items_={items} />
            </div>
        </div>
    );
}

export default Happy;