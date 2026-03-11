import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../components/Loader/Loader";
import useRole from "../../../hooks/useRole";
import { FaEdit, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const MyProfile = () => {
  const { user, setUser, loading, updateUser } = useAuth();
  const { role } = useRole();
  const [showModal, setShowModal] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    updateUser({
      displayName,
      photoURL,
    })
      .then(() => {
        setUser({ ...user, displayName, photoURL });
        setShowModal(false);
      })
      .catch((error) => {
        console.log(error);
        setUser(user);
      });
  };

  if (loading) {
    return <Loader></Loader>;
  } else {
    return (
      <div className="relative min-h-screen p-6 bg-base-200/30 overflow-hidden">
        {/* decorative gradient */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-3xl opacity-60 pointer-events-none"></div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center bg-base-100 border border-base-300 rounded-3xl px-8 py-6 shadow-sm mb-6"
        >
          <div>
            <h2 className="text-3xl font-extrabold text-base-content tracking-tight">
              Account Profile
            </h2>
            <p className="text-sm text-base-content/60">
              Manage your personal settings and verified information
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="btn btn-primary btn-outline btn-circle border-2 hover:shadow-lg hover:shadow-primary/30 transition-all group"
          >
            <FaEdit
              className="group-hover:rotate-12 transition-transform"
              size={18}
            />
          </button>
        </motion.div>

        {/* Profile Layout */}
        <div className="grid grid-cols-1 gap-6">
          {/* Identity Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-base-100/80 backdrop-blur-xl border border-base-300/60 rounded-[2.5rem] shadow-xl hover:shadow-primary/10 transition p-10 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

            {/* Avatar */}
            <div className="relative mb-8">
              <div className="w-44 h-44 rounded-full bg-gradient-to-tr from-primary via-accent to-secondary p-[3px] shadow-xl hover:scale-105 transition duration-500">
                <div className="w-full h-full rounded-full bg-base-100 p-1">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Online indicator */}
              <div className="absolute bottom-3 right-3 w-6 h-6 bg-green-500 border-4 border-base-100 rounded-full"></div>
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold text-base-content">
              {user.displayName || "Unknown User"}
            </h2>

            {/* Email */}
            <div className="flex items-center gap-2 text-base-content/60 text-sm mt-2 mb-6">
              <FaEnvelope className="text-primary/70" />
              <span>{user.email}</span>
            </div>

            {/* Role Badge */}
            <div className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {role} Account
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-md">
              <div className="bg-base-200/60 rounded-xl py-3">
                <p className="text-xs text-base-content/50">Status</p>
                <p className="text-sm font-semibold text-green-500">Active</p>
              </div>

              <div className="bg-base-200/60 rounded-xl py-3">
                <p className="text-xs text-base-content/50">Role</p>
                <p className="text-sm font-semibold capitalize">{role}</p>
              </div>

              <div className="bg-base-200/60 rounded-xl py-3">
                <p className="text-xs text-base-content/50">Account</p>
                <p className="text-sm font-semibold">Verified</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modal */}
        {showModal && (
          <dialog
            open
            className="modal items-center text-center sm:modal-middle"
          >
            <div className="modal-box bg-base-100 rounded-[2.5rem] p-8 border border-base-300 shadow-2xl max-w-2xl">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="font-bold text-2xl text-base-content">
                  Update <span className="text-primary">Profile</span>
                </h3>

                <p className="text-xs text-base-content/50 uppercase font-bold tracking-widest mt-1">
                  Personal Information
                </p>
              </div>

              <form onSubmit={handleUpdateProfile} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="form-control w-full">
                    <label className="label text-xs font-semibold uppercase text-base-content/60">
                      Full Name
                    </label>

                    <input
                      name="name"
                      type="text"
                      defaultValue={user?.displayName}
                      className="input input-bordered bg-base-200/50 rounded-xl focus:border-primary font-medium"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* Photo URL */}
                  <div className="form-control w-full">
                    <label className="label text-xs font-semibold uppercase text-base-content/60">
                      Photo URL
                    </label>

                    <input
                      name="photo"
                      type="text"
                      defaultValue={user?.photoURL}
                      className="input input-bordered bg-base-200/50 rounded-xl focus:border-primary font-medium"
                      placeholder="https://example.com/photo.jpg"
                      required
                    />
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="modal-action flex gap-3 mt-8">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="btn btn-ghost flex-1 rounded-xl border border-base-300 font-semibold"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary flex-1 rounded-xl font-bold text-white shadow-lg shadow-primary/30"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        )}
      </div>
    );
  }
};

export default MyProfile;
