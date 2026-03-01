import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-extrabold mb-8 text-primary">
        Privacy Policy
      </h1>

      <p className="mb-6 text-base-content/70">
        ScholarSource respects your privacy and is committed to protecting your
        personal data. This policy explains how we collect, use, and safeguard
        your information.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Information We Collect</h2>
      <p className="text-base-content/70 mb-6">
        We may collect personal details such as name, email address, academic
        interests, and application preferences when you register or interact
        with our platform.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How We Use Data</h2>
      <p className="text-base-content/70 mb-6">
        Your information is used to personalize scholarship recommendations,
        improve platform performance, and communicate important updates.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Data Security</h2>
      <p className="text-base-content/70">
        We implement secure authentication, encrypted communication, and best
        industry practices to protect your information.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
