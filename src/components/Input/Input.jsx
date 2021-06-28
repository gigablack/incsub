import React, { useState } from "react"
import "../../styles/input.css"
import { HiEye, HiEyeOff } from "react-icons/hi"

const setClass = (error, class1, class2) => {
  return error ? class1 : class2
}

const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const Input = ({
  register,
  name,
  errorMessage,
  type,
  errors,
  minLength = 0,
}) => {
  const [eyeState, setEyeState] = useState(false)
  return (
    <div className="input-container">
      <div className={`group ${setClass(errors[name], "group-border", null)}`}>
        <div>
          <input
            type={eyeState ? "text" : type}
            {...register(name, {
              required: true,
              pattern: type === "email" ? emailPattern : "",
              minLength,
            })}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label
            className={`input-${setClass(errors[name], "error", "normal")}`}
          >
            {name}
          </label>
        </div>
        {type === "password" && (
          <div className="eye" onClick={() => setEyeState(!eyeState)}>
            {eyeState ? <HiEye /> : <HiEyeOff />}
          </div>
        )}
      </div>
      {errors[name] ? <p className="input-error">{errorMessage}</p> : null}
    </div>
  )
}

export default Input
