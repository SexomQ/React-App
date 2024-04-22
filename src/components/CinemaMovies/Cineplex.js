import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import CineplexCard from "./CineplexCard";


function Cineplex({items}) {

    return (
        <div className="Cineplex mt-5">
            <h4 className="">Cineplex</h4>
            {/* movies cards */}
            <div style={{margin:"0 -10px"}}>
                <CineplexCard items_={items} />
            </div>
        </div>
    );
}

export default Cineplex;