import React from "react"
import "./stepper.css"
import Form from "../Form/Form.jsx"

const Stepper = () => {
  return (
    <div className="stepper-container">
      <p className="steps">Step 1 of 3 . . .</p>
      <div className="form-container">
        <h1>{`Let's set up your account`}</h1>
        <p>
          Already have an account?{" "}
          <a href="#">
            <strong>Sign in</strong>
          </a>
        </p>
        <Form />
        <p>
          By clicking the "Next" button, you agree to creating a free account,
          and to{" "}
          <a href="#">
            <strong>Terms of Service</strong>
          </a>{" "}
          and{" "}
          <a href="#">
            <strong>Privacy Policy</strong>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Stepper
