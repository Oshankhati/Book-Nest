import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, Eye, EyeOff } from "lucide-react";
import API from "../api/api";
import "../styles/Login.css";

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("CUSTOMER");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      await API.post("/register", {
        name,
        email,
        password,
        role
      });

      alert("Account created successfully");

      navigate("/login");

    } catch (error) {

      console.error(error);

      if (error.response) {
        alert(error.response.data.message || "Registration failed");
      } else {
        alert("Server not reachable");
      }

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <Link to="/" className="auth-logo">
          <BookOpen className="w-6 h-6" />
          <span>BookNest</span>
        </Link>

        <h1 className="auth-heading">Create your account</h1>

        <p className="auth-subheading">
          Start your reading journey today
        </p>

        <form onSubmit={handleSubmit} className="auth-form">

          <div className="form-group">

            <label>Full Name</label>

            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="John Doe"
              required
            />

          </div>

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />

          </div>

          <div className="form-group">

            <label>Password</label>

            <div className="password-wrapper">

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={()=>setShowPassword(!showPassword)}
              >

                {showPassword
                  ? <EyeOff className="w-4 h-4"/>
                  : <Eye className="w-4 h-4"/>
                }

              </button>

            </div>

          </div>

          <div className="form-group">

            <label>Role</label>

            <select
              value={role}
              onChange={(e)=>setRole(e.target.value)}
            >

              <option value="CUSTOMER">Customer</option>
              <option value="ADMIN">Admin</option>

            </select>

          </div>

          <button
            type="submit"
            className="auth-submit"
            disabled={loading}
          >

            {loading ? "Creating..." : "Create Account"}

          </button>

        </form>

        <p className="auth-switch">

          Already have an account?

          <Link to="/login"> Sign in</Link>

        </p>

      </div>

    </div>
  );
};

export default Register;