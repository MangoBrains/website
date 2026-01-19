import React from "react";

export default function TermsOfUse() {
  return (
    <main className="bg-black text-slate-300 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Terms of Use
        </h1>

        <p className="mt-6 text-slate-400">
          These Terms of Use govern your access to and use of the MangoBrains
          website.
        </p>

        <div className="mt-10 space-y-6 text-sm text-slate-400 leading-relaxed">
          <p>
            This website is provided for informational purposes only.
            Viewing or using this site does not create a contractual
            relationship between you and MangoBrains.
          </p>

          <p>
            While we strive to keep information accurate and up to date,
            MangoBrains makes no guarantees regarding completeness or
            accuracy of the content.
          </p>

          <p>
            MangoBrains is not responsible for decisions made based on
            information found on this website.
          </p>

          <p>
            All content on this website, unless otherwise stated, is the
            property of MangoBrains and may not be reused without permission.
          </p>

          <p>
            For questions regarding these terms, contact us at:
            <span className="block mt-2 text-white">
              contact@mangobrains.com
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
