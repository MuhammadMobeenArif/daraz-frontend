/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import API from '../services/api';

export default function CommentBox({ postId }) {
    const [comments, setComments] = useState([]);
    const [text, setText] = useState('');

    const fetchComments = async () => {
        try {
            const res = await API.get(`/comments/${postId}`);
            setComments(res.data.comments);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchComments();
    }, [postId]);

    const handleAddComment = async (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        try {
            const res = await API.post(`/comments/${postId}`, { text });
            setComments([res.data.comment, ...comments]);
            setText('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="mt-4 rounded-2xl border border-gray-200 bg-white shadow-md p-4">

            {/* Comment Form */}
            <form onSubmit={handleAddComment} className="flex items-center gap-3 mb-4">

                <input
                    type="text"
                    placeholder="Write a comment..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="flex-1 rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm outline-none transition-all duration-300 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />

                <button
                    type="submit"
                    className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                    Send
                </button>

            </form>

            {/* Comments */}
            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">

                {comments.length === 0 ? (
                    <p className="text-center text-sm text-gray-400">
                        No comments yet.
                    </p>
                ) : (
                    comments.map((c) => (
                        <div
                            key={c._id}
                            className="flex gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md"
                        >
                            {/* Avatar */}
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 font-bold text-white">
                                {c.user?.username?.charAt(0).toUpperCase()}
                            </div>

                            {/* Comment */}
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-800">
                                    @{c.user?.username}
                                </h4>

                                <p className="mt-1 text-sm text-gray-600">
                                    {c.text}
                                </p>
                            </div>
                        </div>
                    ))
                )}

            </div>
        </div>
    );
}