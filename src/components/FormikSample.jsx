import { useFormik } from "formik";
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
export default function FormikSample() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formcontrol}>
          <label>Name</label>
          <input
            className={styles.input}
            type="text"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          ></input>
          {formik.touched.name && formik.errors.name ? (
            <span className={styles.error}>{formik.errors.name} </span>
          ) : null}
        </div>
        <div className={styles.formcontrol}>
          <label>Email</label>
          <input
            className={styles.input}
            type="text"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          ></input>
          {formik.touched.email && formik.errors.email ? (
            <span className={styles.error}>{formik.errors.email} </span>
          ) : null}
        </div>
        <div className={styles.formcontrol}>
          <label>Channel</label>
          <input
            className={styles.input}
            type="text"
            id="channel"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.channel}
          ></input>
          {formik.touched.channel && formik.errors.channel ? (
            <span className={styles.error}>{formik.errors.channel} </span>
          ) : null}
        </div>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
