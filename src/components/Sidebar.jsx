import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-24">

            <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">
                📌 Navigation
            </h3>

            <div className="space-y-3">

                <Link
                    to="/home"
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-700 font-medium transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-1 hover:shadow-md"
                >
                    <span className="text-xl">🏠</span>
                    <span>Home Feed</span>
                </Link>

                <Link
                    to="/create-post"
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-700 font-medium transition-all duration-300 hover:bg-green-50 hover:text-green-600 hover:translate-x-1 hover:shadow-md"
                >
                    <span className="text-xl">➕</span>
                    <span>Create Post</span>
                </Link>

            </div>

            {/* Divider */}
            <div className="my-6 border-t"></div>

            {/* Footer */}
            <div className="text-center">
                <p className="text-xs text-gray-400">
                    Social Media App
                </p>
            </div>

        </aside>
    );
}