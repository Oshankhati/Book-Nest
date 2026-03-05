import { Link, useNavigate } from "react-router-dom";
import { BookOpen, ShoppingCart, Users, Search, ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-bookstore.jpg";
import "../styles/Landing.css";

const features = [
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Vast Collection",
    desc: "Browse thousands of titles across every genre imaginable.",
  },
  {
    icon: <Search className="w-7 h-7" />,
    title: "Smart Search",
    desc: "Find exactly what you're looking for with powerful filters.",
  },
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    title: "Easy Ordering",
    desc: "Simple checkout and real-time order tracking.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Community",
    desc: "Join a community of book lovers and share recommendations.",
  },
];

const stats = [
  { value: "50K+", label: "Books Available" },
  { value: "12K+", label: "Happy Readers" },
  { value: "200+", label: "Authors Featured" },
  { value: "4.9★", label: "Average Rating" },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Avid Reader",
    text: "BookNest has completely transformed my reading habit. The curation is impeccable and delivery is always on time.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Book Club Organizer",
    text: "We use BookNest for all our club orders. The bulk ordering and genre filters make it incredibly easy.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Literature Student",
    text: "Finally a bookstore that understands readers. The recommendations are spot-on every single time.",
    rating: 5,
  },
];

const Landing = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {

    localStorage.removeItem("token");

    alert("Logged out successfully");

    navigate("/");

  };

  return (

    <div className="landing-page">

      {/* Navbar */}

      <nav className="landing-nav">

        <Link to="/" className="landing-logo">
          <BookOpen className="w-6 h-6" />
          <span>BookNest</span>
        </Link>

        <div className="landing-nav-links">

          <Link to="/books" className="nav-link">
            Browse
          </Link>

          {token ? (

            <button
              onClick={handleLogout}
              className="nav-link-cta"
            >
              Logout
            </button>

          ) : (

            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>

              <Link to="/register" className="nav-link-cta">
                Get Started
              </Link>
            </>

          )}

        </div>

      </nav>

      {/* Hero */}

      <section className="landing-hero">

        <div className="hero-overlay" />

        <img
          src={heroImage}
          alt="Cozy bookstore interior"
          className="hero-image"
        />

        <div className="hero-content">

          <div className="hero-badge animate-fade-in">
            📚 Over 50,000 titles and counting
          </div>

          <h1
            className="hero-title animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            Discover Your Next
            <br />
            Great Read
          </h1>

          <p
            className="hero-subtitle animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            A curated bookstore experience — browse, purchase, and manage your
            literary collection with ease.
          </p>

          <div
            className="hero-actions animate-fade-in"
            style={{ animationDelay: "0.45s" }}
          >

            <Link to="/books" className="hero-btn-primary">
              Browse Books
              <ArrowRight className="w-4 h-4" />
            </Link>

            {!token && (
              <Link to="/register" className="hero-btn-secondary">
                Create Account
              </Link>
            )}

          </div>

        </div>

        <div className="scroll-indicator animate-float">
          <div className="scroll-dot" />
        </div>

      </section>

      {/* Stats */}

      <section className="stats-bar">

        {stats.map((stat, i) => (

          <div
            key={stat.label}
            className="stat-item animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >

            <span className="stat-value">
              {stat.value}
            </span>

            <span className="stat-label">
              {stat.label}
            </span>

          </div>

        ))}

      </section>

      {/* Features */}

      <section className="landing-features">

        <div className="section-label">
          WHY CHOOSE US
        </div>

        <h2 className="features-heading">
          Everything a reader needs
        </h2>

        <p className="features-subheading">
          From discovery to delivery, we've crafted every step of your reading journey.
        </p>

        <div className="features-grid">

          {features.map((f, i) => (

            <div
              key={f.title}
              className="feature-card animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >

              <div className="feature-icon">
                {f.icon}
              </div>

              <h3 className="feature-title">
                {f.title}
              </h3>

              <p className="feature-desc">
                {f.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Footer */}

      <footer className="landing-footer">

        <div className="footer-inner">

          <div className="footer-brand">

            <BookOpen className="w-5 h-5" />

            <span>
              BookNest
            </span>

          </div>

          <div className="footer-links">

            <Link to="/books">
              Browse
            </Link>

            {!token && (
              <>
                <Link to="/login">
                  Login
                </Link>

                <Link to="/register">
                  Register
                </Link>
              </>
            )}

          </div>

          <p className="footer-copy">
            © 2026 BookNest. All rights reserved.
          </p>

        </div>

      </footer>

    </div>

  );
};

export default Landing;