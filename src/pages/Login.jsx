import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const accessWebsite = () => {
    if (name && validateInput(emailOrPhone) && password.length >= 8) {
      navigate("/");
    }
  };

  function validateInput(input) {
    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regex for mobile phone validation (US format example)
    const phoneRegex = /^\+?(\d{1,3})?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

    if (emailRegex.test(input)) {
      return true;
    } else if (phoneRegex.test(input)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-green-900">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prate-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-green-900" />
      </div>

      {currentState === "Login" ? (
        ""
      ) : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-green-700 placeholder-green-900 placeholder-opacity-60"
          placeholder="Name"
          required
        />
      )}
      <input
        onChange={(e) => setEmailOrPhone(e.target.value)}
        value={emailOrPhone}
        type="text"
        className="w-full px-3 py-2 border border-green-700 placeholder-green-900 placeholder-opacity-60"
        placeholder="Email or Phone number"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-3 py-2 border border-green-700 placeholder-green-900 placeholder-opacity-60"
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forget your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>

      <button
        onClick={accessWebsite}
        className="bg-green-900 text-white font-light px-8 py-2 mt-4"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
