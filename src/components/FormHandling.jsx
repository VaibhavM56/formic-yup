import React from "react";
import { Field, Form, Formik } from "formik";

const FormHandling = () => {
  return (
    <div>
      <h1>SignUp Page</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => {
            setTimeout(r, 500);
          });

          //alert (JSON>stringify(values));
          console.log(JSON.stringify(values));
        }}
      >
        <Form>
          <label>First Name</label>
          <Field name="firstName" />
          <label>Last Name</label>
          <Field name="lastName" />
          <label>Email Address</label>
          <Field name="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormHandling;
