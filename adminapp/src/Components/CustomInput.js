import React from "react";

const CustomInput = (props) => {
  const { type,label, i_id, i_class,name, val,onChng,onBlr,max,min } = props;
  return (
    <>
      <div className="form-floating mt-3">
        <input
          type={type}
          className={`form-control ${i_class}`}
          id={i_id}
          max={max}
          min={min}
          placeholder={label}
          name={name}
          value={val}
          onChange={onChng}
          onBlur={onBlr}
        />
        <label htmlFor={label}>{label}</label>
      </div>
      </>
  );
};
export default CustomInput;
