import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);
      login(res.data.token, res.data.user);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#220404]">
      <div className="w-[360px] border-4 border-pink-700 bg-[#2b0909] p-8 shadow-2xl">

        <h1 className="text-center text-5xl font-bold text-white mb-10">
          Login
        </h1>

        {error && (
          <p className="text-red-400 text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <input
            type="email"
            placeholder="User Name"
            required
            className="w-full rounded-md border border-white bg-transparent px-4 py-3 text-white placeholder-gray-300 outline-none focus:border-pink-500"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-md border border-white bg-transparent px-4 py-3 text-white placeholder-gray-300 outline-none focus:border-pink-500"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-r from-pink-700 to-purple-900 py-3 text-lg font-semibold text-white hover:opacity-90 transition"
          >
            Login
          </button>

          <p className="text-center text-white font-semibold">
            OR
          </p>

          {/* Register Button */}
          <Link
            to="/register"
            className="block w-full rounded-md border border-white py-3 text-center text-lg font-semibold text-white hover:bg-white hover:text-black transition"
          >
            Register Now
          </Link>

        </form>
      </div>
    </div>
  );
}