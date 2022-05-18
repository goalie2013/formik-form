import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>Email</div>
        </div>
        <input
          id="emailField"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
        />
        {formik.errors.email ? (
          <div id="emailError">{formik.errors.email}</div>
        ) : null}

        <div>
          <div>Password</div>
        </div>
        <input
          id="pswField"
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
        />
        {formik.errors.password ? (
          <div id="pswError">{formik.errors.password}</div>
        ) : null}

        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
