// /* eslint-disable no-unused-vars */
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../services/api";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

// export default function CreatePost() {
//     const [caption, setCaption] = useState("");
//     const [image, setImage] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         const formData = new FormData();
//         formData.append("caption", caption);
//         if (image) formData.append("image", image);

//         try {
//             await API.post("/posts", formData, {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                 },
//             });

//             navigate("/home");
//         } catch (err) {
//             alert("Failed to create post");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
//             <Navbar />

//             <div className="max-w-6xl mx-auto flex gap-6 p-6">

//                 <Sidebar />

//                 <div className="flex-1 flex justify-center">

//                     <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-gray-200 p-8">

//                         <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">
//                             ✨ Create New Post
//                         </h2>

//                         <form onSubmit={handleSubmit} className="space-y-6">

//                             {/* Caption */}
//                             <div>
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                     Caption
//                                 </label>

//                                 <textarea
//                                     rows="5"
//                                     placeholder="What's on your mind?"
//                                     required
//                                     value={caption}
//                                     onChange={(e) => setCaption(e.target.value)}
//                                     className="w-full rounded-2xl border border-gray-300 bg-gray-50 p-4 text-gray-700 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 resize-none"
//                                 />
//                             </div>

//                             {/* Image Upload */}
//                             <div>
//                                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                                     📷 Upload Image (Optional)
//                                 </label>

//                                 <input
//                                     type="file"
//                                     accept="image/*"
//                                     onChange={(e) => setImage(e.target.files[0])}
//                                     className="block w-full text-sm text-gray-600
//                                     file:mr-4
//                                     file:rounded-full
//                                     file:border-0
//                                     file:bg-blue-600
//                                     file:px-5
//                                     file:py-2
//                                     file:text-white
//                                     file:font-medium
//                                     hover:file:bg-blue-700
//                                     cursor-pointer"
//                                 />
//                             </div>

//                             {/* Preview */}
//                             {image && (
//                                 <div className="overflow-hidden rounded-2xl border border-gray-200">
//                                     <img
//                                         src={URL.createObjectURL(image)}
//                                         alt="Preview"
//                                         className="w-full max-h-80 object-cover"
//                                     />
//                                 </div>
//                             )}

//                             {/* Button */}
//                             <button
//                                 type="submit"
//                                 disabled={loading}
//                                 className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
//                             >
//                                 {loading ? "Posting..." : "🚀 Share Post"}
//                             </button>

//                         </form>

//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }


/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function CreatePost() {

    const [caption, setCaption] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {

            await API.post("/posts", {
                caption,
                image: ""
            });


            navigate("/home");


        } catch (err) {

            console.log("Create Post Error:", err.response?.data || err.message);

            alert(
                err.response?.data?.message || 
                "Failed to create post"
            );

        } finally {

            setLoading(false);

        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">

            <Navbar />


            <div className="max-w-6xl mx-auto flex gap-6 p-6">

                <Sidebar />


                <div className="flex-1 flex justify-center">


                    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-gray-200 p-8">


                        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">

                            ✨ Create New Post

                        </h2>



                        <form 
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >


                            <div>

                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Caption
                                </label>


                                <textarea

                                    rows="5"

                                    placeholder="What's on your mind?"

                                    required

                                    value={caption}

                                    onChange={(e)=>setCaption(e.target.value)}

                                    className="w-full rounded-2xl border border-gray-300 bg-gray-50 p-4 text-gray-700 outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 resize-none"

                                />

                            </div>

                            <button

                                type="submit"

                                disabled={loading}

                                className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-lg font-semibold text-white shadow-lg disabled:opacity-60"

                            >

                                {loading ? "Posting..." : "🚀 Share Post"}

                            </button>



                        </form>


                    </div>


                </div>


            </div>


        </div>
    );
}