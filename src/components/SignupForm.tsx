import Button from "./Button";
import GoogleAuth from "./GoogleAuth";
import AppleLogo from "../assets/icons/appleLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import "./loginForm.css";
import { useRef } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import axios from "axios";

const SignupForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const confirmPassword = confirmPasswordRef.current!.value;
    const userName = userNameRef.current!.value;

    if (
      email.trim() === "" ||
      password.trim() === "" ||
      userName.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      toast.error("Please fill all fields and try again");
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      toast.error("Passwords must match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user){
        axios.post("https://shorts.zictracks.com/api/users",
        {
          "Name": "testuser",
          "Email": "test@email.com",
          "uuid": "1234567890"
        },
        );
        navigate("/dashboard");
      }
    } catch (error: unknown) { // Explicitly typing 'error' as 'any'
      toast.error("Invalid credentials");
    }
  };
  return (
    <div className="authForm mx-auto pt-20 w-96 p-5 rounded-sm">
      <p className="text-center mb-2 text-gray-500">Sign up with:</p>
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
          name="Name"
          placeholder="Username"
          required
          ref={userNameRef}
        />
        <input
          className="w-full mb-7"
          type="text"
          name="username"
          placeholder="Email"
          required
          ref={emailRef}
        />
        <input
          className="w-full mb-7"
          type="password"
          name="password"
          placeholder="Password"
          required
          ref={passwordRef}
        />
        <input
          className="w-full mb-2"
          type="password"
          name="password"
          placeholder="Retype Password"
          required
          ref={confirmPasswordRef}
        />
        <p className="text-right text-blue-500 text-sm mb-3">
          Forgot your password?
        </p>
        <Button className="w-full btn-primary rounded-3xl mb-3">
          Sign up with Email
        </Button>
        <p className="text-center mb-2">
          Already have an account?{" "}
          <Link className="text-blue-500" to={"/signin"}>
            Log in
          </Link>{" "}
        </p>
        <p className="text-center text-sm text-gray-500">
          By signing up, you agree to <br /> Scissor's{" "}
          <span className="text-gray-700 font-bold">
            Terms of Service, Privacy Policy
          </span>{" "}
          and{" "}
          <span className="text-gray-700 font-bold">Acceptable Use Policy</span>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
