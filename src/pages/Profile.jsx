import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import PostCard from '../components/PostCard';

export default function Profile() {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [profileData, setProfileData] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await API.get(`/users/${id}`);
                setProfileData(res.data.user);
                setPosts(res.data.posts);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProfile();
    }, [id]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mt-4">
                <div className="md:col-span-1">
                    <ProfileCard userProfile={profileData} postsCount={posts.length} />
                </div>
                <div className="md:col-span-2 space-y-4">
                    <h3 className="font-bold text-gray-700 border-b pb-2">User Posts</h3>
                    {posts.length === 0 ? (
                        <p className="text-gray-500 text-sm">No posts by this user yet.</p>
                    ) : (
                        posts.map(post => <PostCard key={post._id} post={post} currentUserId={user?.id} />)
                    )}
                </div>
            </div>
        </div>
    );
}