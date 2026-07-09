import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    to="/home"
                    className="text-3xl font-extrabold text-white tracking-wide hover:scale-105 transition duration-300"
                >
                    SocialApp
                </Link>

                {/* Right Side */}
                {user && (
                    <div className="flex items-center gap-4">

                        {/* Username */}
                        <Link
                            to={`/profile/${user.id}`}
                            className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-semibold hover:bg-white/30 transition"
                        >
                            <div className="w-9 h-9 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">
                                {user.username.charAt(0).toUpperCase()}
                            </div>

                            <span>@{user.username}</span>
                        </Link>

                        {/* Logout Button */}
                        <button
                            onClick={() => {
                                logout();
                                navigate('/login');
                            }}
                            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg text-white font-semibold shadow-md transition-all duration-300 hover:scale-105"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}