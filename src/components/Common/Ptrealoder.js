import React from 'react'
import prealoder from "../../assets/images/Prealoder.svg";

const Prealoder = (props) => {
    return <div>
        <img src={prealoder} alt="Loading"/>

        {props.wait}
    </div>
};

export default Prealoder;
