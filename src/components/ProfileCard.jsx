export default function ProfileCard({ userProfile, postsCount }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-2xl transition-all duration-300">
            
            {/* Profile Image */}
            <div className="w-28 h-28 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center text-4xl font-bold text-white border-4 border-white shadow-lg mb-4">
                {userProfile?.username?.charAt(0).toUpperCase()}
            </div>

            {/* User Info */}
            <h2 className="text-2xl font-bold text-gray-800">
                {userProfile?.username || "FAZAIN"}
            </h2>

            <p className="text-gray-500 text-sm mt-1">
                {userProfile?.email || "fazian@gmail.com"}
            </p>

            <p className="text-gray-600 mt-4 text-sm italic bg-gray-50 p-3 rounded-lg">
                {userProfile?.bio || "FAZAIN KHAN"}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-t mt-6 pt-5">
                <div className="hover:bg-gray-50 p-3 rounded-lg transition">
                    <span className="block text-2xl font-bold text-blue-600">
                        {postsCount || 100}
                    </span>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">
                        Posts
                    </span>
                </div>

                <div className="hover:bg-gray-50 p-3 rounded-lg transition">
                    <span className="block text-2xl font-bold text-green-600">
                        {userProfile?.followers?.length || 200}
                    </span>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">
                        Followers
                    </span>
                </div>

                <div className="hover:bg-gray-50 p-3 rounded-lg transition">
                    <span className="block text-2xl font-bold text-purple-600">
                        {userProfile?.following?.length || 10}
                    </span>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">
                        Following
                    </span>
                </div>
            </div>

            {/* Button */}
            <button className="mt-6 w-full bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition duration-300">
                Edit Profile
            </button>
        </div>
    );
}