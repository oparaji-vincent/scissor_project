import Button from "./Button";
import GoogleAuth from "./GoogleAuth";
import AppleLogo from "../assets/icons/appleLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import "./loginForm.css";
import { useRef } from "react";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const LoginForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;

    if (email?.trim().length === 0) {
      toast.error("Email cannot be left blank");
      return;
    }
    if (password?.trim().length === 0) {
      toast.error("Password cannot be left blank");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) navigate("/");
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };
  return (
    <div className="authForm mx-auto pt-20 w-96 p-5 rounded-sm">
      <p className="text-center mb-2 text-gray-500">Log in with:</p>
      <div className="cta_buttons flex justify-center text-center">
        <GoogleAuth />
        <Button className="btn-primary flex mx-auto px-4 rounded-md">
          <img src={AppleLogo} className="inline mr-1" alt="" />
          Apple
        </Button>
      </div>

      <form onSubmit={onSubmitHandler}>
        <input
          className="w-full mb-7"
          type="text"
          name="username"
          placeholder="Email address or username"
          required
          ref={emailRef}
        />
        <input
          className="w-full mb-2"
          type="password"
          name="password"
          placeholder="Password"
          required
          ref={passwordRef}
        />
        <p className="text-right text-blue-500 text-sm my-2">
          <Link to={"/forgotpassword"}>Forgot your password?</Link>
        </p>
        <Button className="w-full btn-primary rounded-3xl mb-3 mt-3">
          Log in
        </Button>
        <p className="text-center mb-2">
          Don't have an account?{" "}
          <Link className="text-blue-500" to={"/signup"}>
            Sign up
          </Link>{" "}
        </p>
        <p className="text-center text-sm text-gray-500">
          By signing in with an account, you agree to <br /> Scissor's{" "}
          <span className="text-gray-700 font-bold">
            Terms of Service, Privary Policy
          </span>{" "}
          and{" "}
          <span className="text-gray-700 font-bold">Acceptable Use Policy</span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
