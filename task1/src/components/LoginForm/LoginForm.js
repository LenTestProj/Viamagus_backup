import React, { useState } from "react";
import classes from "./LoginForm.module.css";
import LoginImage from "../../data/LoginImage.jpg";
import AmazonImage from "../../data/Amazon.jpg";
import FacebookIcon from "../../data/FacebookIcon.png";
import GoogleIcon from "../../data/GoogleIcon.jpg";

const ContinueWithGoogleMessage = "Continue with Google";
const ContinueWithFacebookMessage = "Continue with Facebook";
const ForgotPasswordMessage = "Did You Forget your password?";
const NewUserSignupMessage = "New User? Please sign up";
const submitMessage = "Successfully signed in";

const SubmitButtonSection = ({ isSubmitActive }) => {
  return (
    <div className={classes.submitButtonSection}>
      <button
        className={classes.signinButton}
        disabled={!isSubmitActive}
        onClick={() =>
          alert(isSubmitActive ? submitMessage : "Enter valid credentials")
        }
      >
        Sign In
      </button>
      <div className={classes.forgotPasswordSection}>
        <p
          className={classes.forgotPasswordText}
          onClick={() => alert(ForgotPasswordMessage)}
        >
          Forgot Password?
        </p>
        <p
          className={classes.signupText}
          onClick={() => alert(NewUserSignupMessage)}
        >
          New User? Sign up
        </p>
      </div>
    </div>
  );
};

const GoogleFacebookButtonSection = () => (
  <div className={classes.GoogleFacebookButtonSection}>
    <button
      className={classes.ContinueWithGoogleButton}
      onClick={() => alert(ContinueWithGoogleMessage)}
    >
      <div className="flex">
        <img
          className={classes.GoogleFacebookIcon}
          src={GoogleIcon}
          alt="NotFound.jpg"
        />
        <p className={classes.ContinueWithGoogleText}>Continue with Google</p>
      </div>
    </button>
    <button
      className={classes.ContinueWithFacebookButton}
      onClick={() => alert(ContinueWithFacebookMessage)}
    >
      <div className="flex">
        <img
          className={classes.GoogleFacebookIcon}
          src={FacebookIcon}
          alt="NotFound.jpg"
        />
        <p className={classes.ContinueWithFacebookText}>
          Continue with Facebook
        </p>
      </div>
    </button>
  </div>
);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInputTouched, setIsInputTouched] = useState({
    isEmailTouched: false,
    isPasswordTouched: false,
  });

  const emailHasError = !email.includes("@") && isInputTouched.isEmailTouched;

  const passwordhasError =
    !(password.length > 3) && isInputTouched.isPasswordTouched;

  const isvalidSubmitButton =
    !emailHasError &&
    !passwordhasError &&
    email.includes("@") &&
    password.length > 3;

  return (
    <div className={classes.container}>
      <div className={classes.headerSection}>
        <img src={AmazonImage} alt="test.jpg" className={classes.headerImage} />
      </div>
      <div className={classes.bodySection}>
        <img src={LoginImage} alt="test.jpg" className={classes.bodyImage} />
        <div className={classes.emailSection}>
          <input
            type="text"
            placeholder="email"
            className={classes.input}
            value={email}
            onChange={(event) => setEmail((prev) => event.target.value)}
            onBlur={() =>
              setIsInputTouched((prev) => ({
                ...prev,
                isEmailTouched: true,
              }))
            }
          />
          {emailHasError && (
            <p className={classes.error}>Enter a valid email</p>
          )}
        </div>
        <div className={classes.passwordSection}>
          <input
            type="text"
            placeholder="password"
            className={classes.input}
            value={password}
            onChange={(event) => setPassword((prev) => event.target.value)}
            onBlur={() =>
              setIsInputTouched((prev) => ({
                ...prev,
                isPasswordTouched: true,
              }))
            }
          />
          {passwordhasError && (
            <p className={classes.error}>Enter a valid password</p>
          )}
        </div>
        <SubmitButtonSection isSubmitActive={isvalidSubmitButton} />
        <p className={classes.orSection}>-or-</p>
        <GoogleFacebookButtonSection />
      </div>
    </div>
  );
};

export default LoginForm;
