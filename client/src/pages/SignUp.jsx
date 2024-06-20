import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-5xl text-center font-semibold my-20">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-5 rounded-lg text-lg" // Setting font size to text-lg
          style={{ fontSize: "24px", lineHeight: "32px", padding: "12px" }}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-5 rounded-lg text-lg" // Setting font size to text-lg
          style={{ fontSize: "24px", lineHeight: "32px", padding: "12px" }}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-5 rounded-lg text-lg" // Setting font size to text-lg
          style={{ fontSize: "24px", lineHeight: "32px", padding: "12px" }}
        />
        <button className="bg-slate-700 text-white text-2xl p-5 rounded-3xl uppercase hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5 text-2xl">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
