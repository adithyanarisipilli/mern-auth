import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/backend/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-5xl text-center font-semibold my-20">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-5 rounded-lg text-lg" // Setting font size to text-lg
          style={{ fontSize: "24px", lineHeight: "32px", padding: "12px" }}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-5 rounded-lg text-lg" // Setting font size to text-lg
          style={{ fontSize: "24px", lineHeight: "32px", padding: "12px" }}
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white text-2xl p-5 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5 text-2xl">
        <p>Do not Have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5 text-2xl">
        {error && "Something went wrong!"}
      </p>
    </div>
  );
}
