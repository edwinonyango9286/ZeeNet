
import React from "react";
const CustomInput =(props)=>{

const {type,label,i_id,i_class} = props;
    return(

        <>
        <div className="form-floating mb-4">
            <input 
            type={type}
            className={`form-control py-2 ${i_class}`}
            id={i_id}
            placeholder={label}
            />
            <label htmlFor="{label}">{label}</label> 
        </div>
        
        </>
    )
}

export default CustomInput;