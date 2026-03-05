import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, Eye, EyeOff } from "lucide-react";
import API from "../api/api";
import "../styles/Login.css";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      const res = await API.post("/login", {
        email,
        password
      });

      // Save JWT token
      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      navigate("/books");

    } catch (error) {

      console.error(error);

      if (error.response) {
        alert(error.response.data.message || "Login failed");
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

        <h1 className="auth-heading">Welcome back</h1>
        <p className="auth-subheading">Sign in to your account</p>

        <form onSubmit={handleSubmit} className="auth-form">

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

          <button
            type="submit"
            className="auth-submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

        </form>

        <p className="auth-switch">
          Don't have an account?
          <Link to="/register"> Create one</Link>
        </p>

      </div>

    </div>
  );
};

export default Login;