import { useState } from "react";
import { toast } from "react-toastify"; 
import "./Signin.css";
import { PiPopcornBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom"; 

export default function Signin() {
    const [Name, setName] = useState("");
    const [FamilyName, setFamilyName] = useState("");
    const [Age, setAge] = useState(""); 
    const [DateOfBirth, setDateOfBirth] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState(""); 

    const navigate = useNavigate();

    function Sign() {
        setError("");

        if (!Name || !FamilyName || !Age || !DateOfBirth || !Email || !Password || !confirm) {
            setError("All fields must be filled.");
            return;
        }

        if (Password !== confirm) {
            setError("Passwords do not match.");
            return;
        }

        fetch("http://localhost:9021/User/Signin", {
            method: "POST",
            body: JSON.stringify({
                Name,
                FamilyName,
                Age,
                DateOfBirth,
                Email,
                Password,
            }),
            headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.message && data.message.includes("Welcome")) {
                console.log("User created:", data);
                toast.success('User created successfully!'); 
                navigate("/login"); // Navigate to login page after successful signup
            } else {
                setError(data.message || "Failed to create the account.");
            }
        })
        .catch((error) => {
            console.error("Error creating user:", error);
            setError("Failed to create the account. Please try again.");
        });
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "60px"
        }} className="sign">
            <h1 className="ch"><PiPopcornBold /> CinemaHub <PiPopcornBold /></h1>
            <div className="form">
                <div style={{
                    fontWeight: "1000",
                    fontSize: "30px"
                }} className="title">Welcome With Us</div>
                <div className="sous">Create Your Own Account</div>

                {/* Champs de formulaire */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="Email">Name</div>
                    <input value={Name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name is ......" />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="Email">Family Name</div>
                    <input value={FamilyName} onChange={(e) => setFamilyName(e.target.value)} type="text" placeholder="Your last name is ......" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div className="Email">Age</div>
                <input type="number" value={Age} onChange={(e) => setAge(e.target.value)} placeholder="Your age is ..." />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="Email">Date Of Birth</div>
                    <input type="date" value={DateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="Email">Email</div>
                    <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email is ......" />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="password">Password</div>
                    <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="*********" />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="Email">Confirm your password</div>
                    <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}
                
                <button onClick={Sign} style={{ width: "100%" }} className="button2">Sign Up</button>
            </div>
        </div>
    );
}
