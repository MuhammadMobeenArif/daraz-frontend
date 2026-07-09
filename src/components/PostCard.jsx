import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import CommentBox from "./CommentBox";

export default function PostCard({ post, currentUserId }) {
    const [likes, setLikes] = useState(post.likes || []);
    const [showComments, setShowComments] = useState(false);

    const handleLike = async () => {
        try {
            await API.put(`/posts/${post._id}/like`);

            if (likes.includes(currentUserId)) {
                setLikes(likes.filter((id) => id !== currentUserId));
            } else {
                setLikes([...likes, currentUserId]);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl">

            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-lg font-bold text-white">
                    {post.user?.username?.charAt(0).toUpperCase()}
                </div>

                <div>
                    <Link
                        to={`/profile/${post.user?._id}`}
                        className="font-semibold text-gray-800 hover:text-blue-600"
                    >
                        @{post.user?.username || "user"}
                    </Link>

                    <p className="text-xs text-gray-400">
                        Just now
                    </p>
                </div>

            </div>

            {/* Caption */}
            <div className="px-4 pt-4">
                <p className="text-gray-700 leading-relaxed">
                    {post.caption}
                </p>
            </div>

            {/* Image */}
            {post.image && (
                <div className="mt-4">
                    <img
                        src={`http://localhost:5000${post.image}`}
                        alt="Post"
                        className="max-h-[500px] w-full object-cover"
                    />
                </div>
            )}

            {/* Likes Count */}
            <div className="px-4 py-2 text-sm text-gray-500 border-b">
                ❤️ {likes.length} Likes
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-2 p-3">

         

                <button
                    onClick={() => setShowComments(!showComments)}
                    className="flex items-center justify-center gap-2 rounded-xl py-2 font-medium text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-blue-600"
                >
                    💬 Comment
                </button>

            </div>

            {/* Comments */}
            {showComments && (
                <div className="border-t bg-gray-50 p-4">
                    <CommentBox postId={post._id} />
                </div>
            )}

        </div>
    );
}