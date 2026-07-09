
// import { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import API from "../services/api";
// import { AuthContext } from "../context/AuthContext";

// export default function Register() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await API.post("/auth/signup", {
//         username: formData.username,
//         email: formData.email,
//         password: formData.password,
//       });

//       login(res.data.token, res.data.user);
//       navigate("/home");
//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//   <div
//     className="min-h-screen flex items-center justify-center bg-cover bg-center"
//     style={{
//       background:
//         "linear-gradient(to bottom,#3d536b,#1f2d3d,#0e1621)",
//     }}
//   >
//     <div className="w-[330px] rounded-lg border border-white/30 bg-white/10 backdrop-blur-md shadow-2xl p-6 relative">

//       {/* Close Button */}
//       <button className="absolute top-2 right-2 w-6 h-6 bg-black text-white rounded text-sm">
//         ✕
//       </button>

//       <h2 className="text-center text-3xl font-bold text-white mb-8">
//         Register
//       </h2>

//       {error && (
//         <p className="text-red-300 text-center mb-3">{error}</p>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-5">
// {/* 
//         <input
//           type="text"
//           placeholder="Name"
//           className="w-full bg-transparent border-b border-gray-300 text-white placeholder-gray-300 outline-none pb-2"
//           onChange={(e) =>
//             setFormData({ ...formData, fullname: e.target.value })
//           }
//         /> */}

//         <input
//           type="text"
//           placeholder="Username"
//           className="w-full bg-transparent border-b border-gray-300 text-white placeholder-gray-300 outline-none pb-2"
//           onChange={(e) =>
//             setFormData({ ...formData, username: e.target.value })
//           }
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full bg-transparent border-b border-gray-300 text-white placeholder-gray-300 outline-none pb-2"
//           onChange={(e) =>
//             setFormData({ ...formData, email: e.target.value })
//           }
//         />


//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full bg-transparent border-b border-gray-300 text-white placeholder-gray-300 outline-none pb-2"
//           onChange={(e) =>
//             setFormData({ ...formData, password: e.target.value })
//           }
//         />

//         <div className="flex items-center gap-2 text-xs text-gray-200">
//           <input type="checkbox" required />
//           <span>I agree to Terms & Conditions</span>
//         </div>

//         <button
//           type="submit"
//           className="w-full py-2 rounded bg-gradient-to-r from-sky-500 to-gray-400 text-white font-semibold hover:opacity-90"
//         >
//           Register
//         </button>

//         <p className="text-center text-xs text-gray-200">
//           Already have an account?{" "}
//           <Link to="/login" className="text-white underline">
//             Login
//           </Link>
//         </p>

//       </form>
//     </div>
//   </div>
// );
// }




import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/signup", formData);

      login(res.data.token, res.data.user);
      navigate("/home");
    } catch (err) {
      console.log(err.response?.data);
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(to bottom,#3d536b,#1f2d3d,#0e1621)",
      }}
    >
      <div className="w-[340px] bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-6">

        <h2 className="text-3xl text-white font-bold text-center mb-8">
          Register
        </h2>

        {error && (
          <p className="text-red-300 text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white text-white placeholder-gray-300 outline-none pb-2"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white text-white placeholder-gray-300 outline-none pb-2"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white text-white placeholder-gray-300 outline-none pb-2"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold"
          >
            Register
          </button>

          <p className="text-center text-white">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}

