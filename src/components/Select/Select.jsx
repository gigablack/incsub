import React from "react"
import "../../styles/input.css"

const Select = ({ options, register, name }) => {
  return (
    <div className="group">
      <select className="select" {...register(name)}>
        {options.map((opt, ind) => (
          <option value={opt} key={ind}>
            {opt}
          </option>
        ))}
      </select>
      <label className="input-normal">Select</label>
    </div>
  )
}

export default Select
