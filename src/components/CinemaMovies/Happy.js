import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import DataHappy from "./DataHappy";
import HappyCard from "./HappyCard";


function Happy() {
    const [item] = useState(DataHappy);

    return (
        <div className="Happy mt-5">
            <h4 className="">Happy Cinema</h4>
            {/* movies cards */}
            <div>
                <HappyCard item={item} />
            </div>
        </div>
    );
}

export default Happy;