import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-5xl">
            <span className="text-blue-500">A</span>uth{" "}
            <span className="text-blue-500">A</span>pp
          </h1>
        </Link>
        <ul className="flex gap-10 text-3xl">
          <Link to="/">
            <li className="text-2xl">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-2xl">About</li>
          </Link>
          <Link to="/sign-up">
            <li className="text-2xl">Sign Up</li>
          </Link>
          <Link to="/sign-in">
            <li className="text-2xl">Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
