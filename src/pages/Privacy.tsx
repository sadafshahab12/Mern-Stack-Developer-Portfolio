import React from "react";
import { BiShield } from "react-icons/bi";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br pt-30 flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full rounded-3xl p-10 border border-gray-100">
        <div className="flex items-center mb-6">
          <BiShield className="w-8 h-8 text-amber-600 mr-3" />
          <h1 className="text-4xl font-extrabold text-gray-800">
            Privacy Policy
          </h1>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Your privacy matters. We only use your information to contact you
          regarding your inquiry. We do not sell, rent, or share your data with
          any third parties.
        </p>

        <div className="space-y-5 text-gray-700 text-base">
          <div>
            <h2 className="font-semibold text-xl text-gray-800 mb-1">
              📥 What We Collect
            </h2>
            <p>
              When you submit a form, we may collect your name, email, and
              message. That’s it—no sneaky tracking, no unnecessary data.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl text-gray-800 mb-1">
              🛠️ How We Use It
            </h2>
            <p>
              Your information is only used to:
              <ul className="list-disc list-inside mt-1">
                <li>Respond to your inquiry</li>
                <li>Provide requested services</li>
                <li>Offer occasional updates (if opted-in)</li>
              </ul>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl text-gray-800 mb-1">
              🔐 Your Rights
            </h2>
            <p>
              You have full control over your data. You can request to view,
              update, or delete your information at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl text-gray-800 mb-1">
              📧 Contact Us
            </h2>
            <p>
              If you have any questions or concerns, reach out anytime at:
              <a
                href="mailto:sadafshahabsr12@gmail.com"
                className="text-amber-600 underline ml-1"
              >
                sadafshahabsr12@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500 border-t pt-4">
          <p>
            This policy was last updated on <strong>June 25, 2025</strong>. We
            may revise it in the future as needed.
          </p>
          <p className="mt-2 italic">
            Thank you for trusting us with your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
