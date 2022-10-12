import React, { useState } from "react";
import { useFormik } from "formik";
import "./App.css";

function App() {
  const [emailError, setEmailError] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("---- onSubmit ----");

      alert("Login Successful");
    },
    validate: (values) => {
      console.log("---- validate ----");
      console.log("values", values);
      // If the username or password inputs are empty, display the message "Field required" under the text input, by using FormikErrors

      const errors = {};

      if (!values.email) {
        errors.email = "Field required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Username should be an email";
      }

      if (!values.password) errors.password = "Field required";

      return errors;
    },
  });

  return (
    <div className="formWrapper">
      <div className="myForm">
        <h1>Sign In Form</h1>
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="emailField">Email</label>
            </div>
            <input
              id="emailField"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="example@mail.com"
            />
            {formik.errors.email ? (
              <div id="emailError">{formik.errors.email}</div>
            ) : null}
            <div id="emailError">{emailError}</div>

            <div>
              <div>
                <label htmlFor="pswField">Password</label>
              </div>
            </div>
            <input
              id="pswField"
              name="password"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="******"
            />
            {formik.errors.password ? (
              <div id="pswError">{formik.errors.password}</div>
            ) : null}

            <div className="submitBtnWrapper">
              <button
                id="submitBtn"
                type="submit"
                className="btn btn-lg btn-primary"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
