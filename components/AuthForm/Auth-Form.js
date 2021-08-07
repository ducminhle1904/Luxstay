import { useState, useRef } from "react";
import classes from "../../styles/AuthForm.module.css";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

async function createUser(email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
}

function AuthForm() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(e) {
    e.preventDefault();
    const enteredEmail = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;
    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      if (!result.error) {
        router.push("/");
      }
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <section>
      <div className={classes.hero}>
        <div className={classes.container}>
          <h2>Đăng ký thành viên Luxstay - Tích điểm thưởng và nhận ưu đãi</h2>
          <p>
            Nhanh chóng, tiện lợi và an toàn. Đăng ký liền tay, rinh ngay quyền
            lợi.
          </p>
        </div>
      </div>
      <div className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInput} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input type="password" id="password" required ref={passwordInput} />
          </div>
          <div className={classes.actions}>
            <button>{isLogin ? "Login" : "Create Account"}</button>
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
