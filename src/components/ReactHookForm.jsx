import React from "react";
import { useForm } from "react-hook-form";
import styles from "./reactHookForm.module.css";

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "John Doe",
    },
    mode: "onChange",
  });
  // Form submission handler
  const onSubmit = (data) => {
    console.log("Form Submitted: ", data);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className={styles.container}>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.containerTwo}>
          <label className={styles.inputLabel}>Name:</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className={styles.inputText}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>

        <div className={styles.containerTwo}>
          <label className={styles.inputLabel}>Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={styles.inputText}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.containerTwo}>
          <label className={styles.inputLabel}>Password:</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            className={styles.inputText}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
