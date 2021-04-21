import React from "react";

const Button = (props) =>{

    return(
        <div>
            <button
            onClick={props.onButtonClick}
            style={{backgroundColor: props.backgroundColor, margin:"10px"}}
            className="btn btn-lg text-white"
            >
            {props.title}
            </button>
        </div>
    )
}

export default Button;