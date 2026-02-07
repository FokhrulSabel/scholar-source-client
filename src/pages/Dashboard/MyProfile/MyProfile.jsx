import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../components/Loader/Loader";

const MyProfile = () => {
  const { user, setUser, loading, updateUser } = useAuth();
  const [showModal, setShowModal] = useState(false);

  if (loading) return <Loader />;

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const form = e.target;
    const displayName = form.name.value.trim();
    const photoURL = form.photo.value.trim();

    if (!displayName && !photoURL) return;

    try {
      await updateUser({ displayName, photoURL });

      setUser({
        ...user,
        displayName: displayName || user?.displayName,
        photoURL: photoURL || user?.photoURL,
      });

      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
        
        <div className="h-24 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent"></div>

        <div className="flex justify-center -mt-12">
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 transition-transform duration-300 hover:scale-105">
              <img
                src={user?.photoURL || "/default-avatar.png"}
                alt={user?.displayName || "User"}
                onError={(e) => (e.currentTarget.src = "/default-avatar.png")}
              />
            </div>
          </div>
        </div>

        {/* body */}
        <div className="p-6 text-center space-y-3">
          <h2 className="text-2xl font-bold text-primary">
            {user?.displayName || "Unknown User"}
          </h2>

          <p className="text-sm opacity-70 break-all">
            {user?.email || "No email found"}
          </p>

          <div className="divider"></div>

          <button
            onClick={() => setShowModal(true)}
            className="btn btn-primary w-full hover:scale-105 transition-all duration-200"
          >
            ✏️ Edit Profile
          </button>
        </div>
      </div>

      {/* modal */}
      {showModal && (
        <dialog open className="modal modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-primary text-center mb-4">
              Update Profile
            </h3>

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  defaultValue={user?.displayName || ""}
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="label">Photo URL</label>
                <input
                  name="photo"
                  type="url"
                  defaultValue={user?.photoURL || ""}
                  className="input input-bordered w-full"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              <div className="modal-action justify-center">
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn btn-ghost"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyProfile;
