const EducationTemplate = ({ formData }: { formData: any }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl border-8 border-yellow-500 relative">
      {/* Certificate Background */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 relative">
        {/* University Seal - Top Right */}
        <div className="absolute top-6 right-8 w-16 h-16 bg-black rounded-full flex items-center justify-center">
          <div className="text-white text-xs font-bold text-center">SEAL</div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-8">
          {/* University Logo */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center border-4 border-yellow-700">
              <div className="text-white font-bold text-sm text-center">
                UNIV
                <br />
                LOGO
              </div>
            </div>
          </div>

          {/* University Name */}
          <h1
            className="text-3xl font-bold text-red-800 mb-2"
            style={{ fontFamily: "serif" }}
          >
            {formData.institutionName || "Savitribai Phule Pune University"}
          </h1>
          <p className="text-sm text-gray-700 italic">
            (Formerly University of Pune)
          </p>
        </div>

        {/* Certificate Body */}
        <div className="text-center mb-8 px-4">
          <p className="text-base leading-relaxed mb-4">
            <span className="italic">
              We, the Chancellor, the Vice Chancellor and the Members of the
              Management Council and
            </span>
            <br />
            <span className="italic">
              the Academic Council of the{" "}
              {formData.institutionName || "Savitribai Phule Pune University"},
              certify that
            </span>
          </p>

          {/* Student Name */}
          <div className="my-6">
            <p className="text-lg font-semibold">
              <span className="font-bold text-xl">
                {formData.fullName || "John Doe"}
              </span>
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Roll No: {formData.rollNumber || "EN23-15951"}
            </p>
          </div>

          <p className="text-base leading-relaxed mb-4">
            <span className="italic">
              of Government College of Engineering & Research, Avasari Khurd,
              Tal. Ambegaon, Dist.
            </span>
            <br />
            <span className="italic">
              Pune having been examined and found duly qualified for the degree
              of
            </span>
          </p>

          {/* Degree Name */}
          <div className="my-6 p-4 bg-white border-2 border-yellow-400 rounded-lg shadow-inner">
            <h2 className="text-2xl font-bold text-gray-800">
              {formData.certificateName || "Bachelor of Engineering"}
              <span className="text-lg font-normal italic"></span>
            </h2>
          </div>

          <p className="text-base leading-relaxed mb-6">
            <span className="italic">
              and placed in the <strong>First Class with Distinction</strong> in{" "}
              <strong>April {formData.yearOfPassing || "2023"}</strong>. The
              said degree has been conferred
            </span>
            <br />
            <span className="italic">
              on him. So testimony whereof is at the seal of the said
              University.
            </span>
          </p>
        </div>

        {/* Hindi/Marathi Section */}
        <div className="text-center mb-8 border-t border-gray-300 pt-6">
          <h3 className="text-xl font-bold text-red-700 mb-4">
            सावित्रीबाई फुले पुणे विश्वविद्यालय
          </h3>
          <p className="text-sm leading-relaxed text-gray-700">
            (पूर्व में पुणे विश्वविद्यालय)
          </p>
          <div className="mt-4 text-sm leading-relaxed">
            <p className="mb-2">
              हम, सावित्रीबाई फुले पुणे विश्वविद्यालय के कुलपति, उपकुलपति और
              प्रबंधन परिषद एवं शिक्षा परिषद
            </p>
            <p className="mb-2">सदस्य प्रमाणित करते हैं कि,</p>
            <p className="font-semibold">
              श्री हर्षद बालासाहेब, माता का नाम: बालासा
            </p>
            <p className="mt-2">
              को <strong>इंजीनियरिंग स्नातक</strong> (सिविल)
            </p>
            <p>
              डिग्री परीक्षा उत्तीर्ण करने के बाद उन्हें यह डिग्री प्रदान की जा
              रही है। उनकी सभी प्रमाण के अनुसार विश्वविद्यालय की
            </p>
            <p>आधिकारिक मुहर यहाँ अंकित की जा रही है।</p>
          </div>
        </div>

        {/* Signature Section */}
        <div className="flex justify-between items-end mt-12">
          {/* Left - Seal */}
          <div className="text-center">
            <div className="w-24 h-16 bg-red-100 border border-red-300 mb-2 flex items-center justify-center">
              <span className="text-xs text-red-600 font-semibold">
                OFFICIAL
                <br />
                SEAL
              </span>
            </div>
          </div>

          {/* Center - Signature */}
          <div className="text-center">
            <div className="mb-4">
              <div className="w-32 h-12 border-b-2 border-gray-400 mb-2 flex items-end justify-center pb-1">
                <span className="text-lg font-cursive italic">Signature</span>
              </div>
              <p className="text-sm font-semibold">Vice Chancellor</p>
            </div>
          </div>

          {/* Right - Convocation Details */}
          <div className="text-right text-sm">
            <p className="font-semibold">123rd Convocation (Winter)</p>
            <p className="text-gray-600">
              {formData.rollNumber || "EN23-15951"}
            </p>
          </div>
        </div>

        {/* Bottom Border Design */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400"></div>
      </div>
    </div>
  );
};

export { EducationTemplate };
