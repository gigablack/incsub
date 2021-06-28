import React from "react"
import Input from "../Input/Input.jsx"
import { useForm } from "react-hook-form"
import Select from "../Select/Select.jsx"
import "./form.css"
import "../../styles/input.css"

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = data => {
    reset()
  }
  const watchedFields = watch([
    "Your Name",
    "Email Address",
    "Password",
    "Role",
  ])
  const fieldsFullfilled = () => {
    for (let field of watchedFields) {
      if (!field) {
        return true
      }
    }
    return false
  }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        errors={errors}
        name="Your Name"
        errorMessage="Please enter your name"
        type="text"
      />
      <Input
        register={register}
        errors={errors}
        name="Email Address"
        errorMessage="Pleas enter a valid email address"
        type="email"
      />
      <Select name="Role" options={["User", "Developer"]} register={register} />
      <Input
        register={register}
        errors={errors}
        name="Password"
        errorMessage="Your password must have at least 8 characters"
        type="password"
        minLength={8}
      />
      {fieldsFullfilled() ? (
        <input
          type="submit"
          className="submit submit-disabled"
          disabled
          value="Next"
        />
      ) : (
        <input type="submit" className="submit submit-enabled" value="Next" />
      )}
    </form>
  )
}

export default Form
