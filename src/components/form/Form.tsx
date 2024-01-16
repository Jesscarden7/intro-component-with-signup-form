import styles from "./Form.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import iconError from "../../assets/images/icon-error.svg";

function Form() {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("First Name cannot be empty"),
    lastName: Yup.string().required("Last Name cannot be empty"),
    email: Yup.string()
      .email("Looks like this is not an email")
      .required("Email cannot be empty"),
    password: Yup.string().required("Password cannot be empty"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: () => {
      console.log("Form submitted!");
    },
    validationSchema: schema,
  });

  const noError = Object.keys(formik.errors).length === 0;

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{
            gap: noError ? "20px" : "8px",
          }}
          className={styles.inputWrapper}>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className={formik.errors.firstName && styles.inputError}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <>
              <span>{formik.errors.firstName}</span>
              <div className={styles.imgContainer}>
                <img src={iconError} />
              </div>
            </>
          ) : null}
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className={formik.errors.lastName && styles.inputError}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <>
              <span>{formik.errors.lastName}</span>
              <div className={styles.imgContainer}>
                <img src={iconError} />
              </div>
            </>
          ) : null}
          <input
            type='text'
            name='email'
            placeholder='Email Address'
            onChange={formik.handleChange}
            value={formik.values.email}
            className={formik.errors.email && styles.inputError}
          />
          {formik.touched.email && formik.errors.email ? (
            <>
              <span>{formik.errors.email}</span>
              <div className={styles.imgContainer}>
                <img src={iconError} />
              </div>
            </>
          ) : null}
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={formik.handleChange}
            value={formik.values.password}
            className={formik.errors.password && styles.inputError}
          />
          {formik.touched.password && formik.errors.password ? (
            <>
              <span>{formik.errors.password}</span>
              <div className={styles.imgContainer}>
                <img src={iconError} />
              </div>
            </>
          ) : null}
        </div>
        <button type='submit'>Claim your free trial</button>
      </form>
      <div className={styles.termsAndServices}>
        <span>By clicking the button, you are agreeing to our</span>
        <span> Terms and Services</span>
      </div>
    </div>
  );
}

export default Form;
