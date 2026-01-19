import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="bg-black text-slate-300 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Privacy Policy
        </h1>

        <p className="mt-6 text-slate-400">
          MangoBrains respects your privacy and is committed to protecting
          any information you share with us.
        </p>

        <div className="mt-10 space-y-6 text-sm text-slate-400 leading-relaxed">
          <p>
            We collect minimal information when you contact us, such as your
            name, email address, and message content. This information is used
            solely to respond to inquiries and communicate about our services.
          </p>

          <p>
            We may use basic analytics tools to understand how visitors use
            this website. These analytics do not personally identify you.
          </p>

          <p>
            We do not sell, rent, or share your personal data with third
            parties. Your information is used only for business communication
            and service-related purposes.
          </p>

          <p>
            If you have questions about this Privacy Policy or how your data
            is handled, you can contact us at:
            <span className="block mt-2 text-white">
              contact@mangobrains.com
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
