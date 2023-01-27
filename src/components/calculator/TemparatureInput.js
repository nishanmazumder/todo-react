import React from "react";

const scaleName = {
  c: "Celsious",
  f: "Fahrenheit",
};

function TemparatureInput({ scale, temparature, temparatureOnChange }) {
  return (
    <fieldset>
      <legend>Temparature in {scaleName[scale]}.</legend>
      <input
        type="text"
        value={temparature}
        onChange={(e) => {
          temparatureOnChange(e, scale);
        }}
      />
    </fieldset>
  );
}

export default TemparatureInput;
