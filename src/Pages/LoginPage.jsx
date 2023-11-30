import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../css/LoginStyles.css"; // Assuming you have a Login.css file for styling
import male_user from "../assets/male user.png";
import { toast } from "react-hot-toast";
import login_logo from "../assets/login-logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { baseUrl } from "../utils/constants";
import { useLocalState } from "../utils/useLocalStorage";

const PasswordIcon = ({ showPassword, togglePassword }) =>
  showPassword ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className=" password_eye"
      onClick={togglePassword}
      style={{ cursor: "pointer" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className=" password_eye"
      onClick={togglePassword}
      style={{ cursor: "pointer" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [jwt, setJwt] = useLocalState("", "jwt");

  // Function to handle changes in the username input
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  // Function to handle changes in the password input
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  // Function to toggle the password visibility
  const togglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const navigate = useNavigate();

  const navigateToForgotPassword = () => {
    navigate("/forgot-password");
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!validateEmail(username) || !password) {
      toast.error("Please provide a valid details to continue.");
      return;
    }

    setLoading(true);
    try {
      // Make a POST request to the API endpoint
      const response = await axios.post(
        `${baseUrl}/v1/admin/admin-login`,
        {
          email: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-CSRF-TOKEN": "NkqJL4ZZ3uo7Sp489LDOLWwx1Ocx13vZIfpVEzNo",
          },
        }
      );
      const token = response.data.data.token;
      setJwt(token);
      localStorage.setItem("_jwt", response.data.data.token);

      console.log(token);
      // Calculate the expiration time for the cookie (24 hours from now)
      const expirationTime = new Date();
      expirationTime.setTime(expirationTime.getTime() + 24 * 60 * 60 * 1000);

      // Set the cookie with the expiration time
      Cookies.set("authToken", token, {
        expires: expirationTime,
        secure: true,
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
      toast.success(response.message);
    } catch (error) {
      toast.error(error?.response?.data.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  React.useEffect(() => {
    document.title = "Login  | LeverPay Admin";
  }, []);

  return (
    <div className="login-container">
      <div>
        <div className="login-content">
          <img src={logo} alt="Leverpay Logo" className="logo" />
          <div className="user-container">
            <div className="login-user-container">
              <div className="user-img-container">
                <img src={male_user} alt="User" className="user_img" />
              </div>
              <div className="user-container-content">
                <div className="login-form">
                  <h4 className="form-title">LOGIN</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="input-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 password_eye"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>

                      <input
                        type="email"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </div>

                    <div className="input-container password-container">
                      <div className="input-container-password">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 password_eye "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="**********"
                          required
                          value={password}
                          onChange={handlePasswordChange}
                        />
                      </div>
                      <PasswordIcon
                        showPassword={showPassword}
                        togglePassword={togglePassword}
                      />{" "}
                    </div>

                    <div className="checkbox-container">
                      <div className="checkbox">
                        <input
                          className="cursor-pointer"
                          type="checkbox"
                          id="rememberMe"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="rememberMe">Remember me</label>
                      </div>
                      <div onClick={navigateToForgotPassword}>
                        <label
                          htmlFor="forgotPassword"
                          className="cursor-pointer"
                        >
                          Forgot Password
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      aria-label="Login"
                      className="login-btn"
                      disabled={loading}
                    >
                      <div className="login-btn-link">
                        {loading ? "Logging in..." : "LOGIN"}
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="secured-container flex items-center my-2">
          {/* help svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className=" password_eye"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
          Help
        </div>

        <div className="secured-logo-container my-2">
          {/* padlock svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className=" password_eye"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <span className="text-white text-base font-extrabold">
            Secured by
          </span>
          <img
            src={login_logo}
            alt="logo"
            srcSet=""
            className="w-[150px] h-auto"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
