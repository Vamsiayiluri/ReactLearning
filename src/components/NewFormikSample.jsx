import { Formik, useFormik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import styles from "./formikSample.module.css";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("form values", values);
};
const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};
export default function NewFormikSample() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      <Form>
        <div className={styles.formcontrol}>
          <label>Name</label>
          <Field className={styles.input} type="text" name="name"></Field>
          <ErrorMessage name="name" />
        </div>
        <div className={styles.formcontrol}>
          <label>Email</label>
          <Field className={styles.input} type="text" name="email"></Field>
          <ErrorMessage name="email" />
        </div>
        <div className={styles.formcontrol}>
          <label>Channel</label>
          <Field className={styles.input} type="text" name="channel"></Field>
          <ErrorMessage name="channel" />
        </div>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
