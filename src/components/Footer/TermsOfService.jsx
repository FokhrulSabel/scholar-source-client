import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-extrabold mb-8 text-primary">
        Terms of Service
      </h1>

      <p className="mb-6 text-base-content/70">
        By using ScholarSource, you agree to comply with the following terms and
        conditions.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Platform Usage</h2>
      <p className="text-base-content/70 mb-6">
        Users must provide accurate information and use the platform
        responsibly. Misuse or fraudulent activities are strictly prohibited.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Scholarship Listings</h2>
      <p className="text-base-content/70 mb-6">
        ScholarSource verifies listings but does not guarantee final selection
        outcomes. Users should independently confirm scholarship requirements.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Limitation of Liability</h2>
      <p className="text-base-content/70">
        ScholarSource is not liable for application outcomes, third-party
        decisions, or external institutional policies.
      </p>
    </div>
  );
};

export default TermsOfService;
