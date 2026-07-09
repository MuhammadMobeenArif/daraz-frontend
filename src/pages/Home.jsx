import { useState, useEffect, useContext } from 'react';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PostCard from '../components/PostCard';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchFeed = async () => {
            try {
                const res = await API.get('/posts');
                setPosts(res.data.posts);
            } catch (err) {
                console.error(err);
            }
        };
        fetchFeed();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-5xl mx-auto flex gap-6 p-4 mt-4">
                <Sidebar />
                <div className="flex-1 space-y-4">
                    {posts.length === 0 ? (
                        <p className="text-center text-gray-500 mt-10">No posts available.</p>
                    ) : (
                        posts.map(post => <PostCard key={post._id} post={post} currentUserId={user?.id} />)
                    )}
                </div>
            </div>
        </div>
    );
}