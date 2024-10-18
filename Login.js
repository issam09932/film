import { Link, useNavigate } from "react-router-dom"; 
import "./Login.css";
import { PiPopcornBold } from "react-icons/pi";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Add error state
    const navigate = useNavigate(); 

    function login() {
        setError(""); // Clear previous errors
        fetch("http://localhost:9021/User/Login", {
            method: "POST", 
            body: JSON.stringify({
                Eamil: email, // Changed from 'email' to 'Eamil' to match the server expectation
                Password: password, // Changed from 'password' to 'Password'
            }),
            headers: { "Content-Type": "application/json" }, 
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.Token) { // Changed from 'token' to 'Token' to match the server response
                localStorage.setItem("token", data.Token);
                navigate("/");
            } else {
                setError(data.message || "Login failed"); // Set error message
            }
        })
        .catch((err) => {
            console.error("Login error:", err);
            setError("An error occurred. Please try again."); // Set error for network issues
        });
    }
    return (
        <div className="login">
            <h1 className="ch"><PiPopcornBold /> CinemaHub <PiPopcornBold /></h1>
            <div className="form">
                <div style={{ fontWeight: "1000", fontSize: "30px" }} className="title">
                    Welcome back
                </div>
                <div className="sous">Log in to your CinemaHub account</div>

                {/* Email input */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="Email">Email</div>
                    <input 
                        type="email"
                        placeholder="your email is ......"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password input */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="password">Password</div>
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="*********"
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button
                    style={{ width: "100%" }} 
                    className="button2"
                    onClick={login}
                >
                    Log in
                </button>

                <p>
                    Don't have an account? <Link to="/Signin"><span> Sign up </span></Link> here
                </p>
            </div>

            <p>By logging in, you agree to our <span>Terms of Service</span> and <span>Privacy Policy.</span></p>
        </div>
    );
}
