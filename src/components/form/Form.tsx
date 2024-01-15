import styles from "./Form.module.css";

function Form() {
  return (
    <div className={styles.formWrapper}>
      <form action=''>
        <div className={styles.inputWrapper}>
          <input type='text' placeholder='Fist Name' />
          <input type='text' placeholder='Last Name' />
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
        </div>
      </form>
      <button>Claim your free trial</button>
      <div className={styles.termsAndServices}>
        <span>By clicking the button, you are agreeing to our</span>
        <span> Terms and Services</span>
      </div>
    </div>
  );
}

export default Form;
