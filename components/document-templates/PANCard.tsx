import React from "react";

interface PANCardProps {
  formData: any;
}

const PANCard: React.FC<PANCardProps> = ({ formData }) => {
  console.log('formData: ', formData);
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* PAN Card */}
      <div
        className="relative rounded-lg shadow-lg overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #4a90e2 0%, #7bb3f0 50%, #a8d0ff 100%)",
          minHeight: "320px",
        }}
      >
        {/* Header Section */}
        <div className="flex justify-between items-start p-4 pb-2">
          {/* Left Header */}
          <div className="flex-1 text-center bg-white">
            <div className="text-black font-bold text-sm leading-tight bg">
              आयकर विभाग
            </div>
            {/* <div className="text-black font-bold text-sm leading-tight"></div> */}
            <div className="text-black font-semibold text-xs mt-1 leading-tight">
              INCOME TAX DEPARTMENT
            </div>
            {/* <div className="text-black font-semibold text-xs leading-tight"></div> */}
          </div>

          {/* Government Emblem */}
          <div className="mx-4 flex flex-col items-center bg-white">
            <div className="w-12 h-12">
              <img
                src="/satyamev-jayate.jpg"
                alt="Satyamev Jayate Emblem"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="text-xs text-black text-center leading-tight">
              सत्यमेव जयते
            </div>

            {/* Center Text Below Logo */}
            <div className="mt-3 text-center bg-white">
              <div className="text-black font-semibold text-sm mb-2">
                e • Permanent Account Number Card
              </div>
              <div className="text-2xl font-bold text-black tracking-wider">
                {formData.panNumber}
              </div>
            </div>
          </div>

          {/* Right Header */}
          <div className="flex-1 text-center">
            <div className="text-black font-bold text-sm leading-tight">
              भारत सरकार
            </div>
            <div className="text-black font-semibold text-xs mt-1 leading-tight">
              GOVT. OF
            </div>
            <div className="text-black font-semibold text-xs leading-tight">
              INDIA
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="px-4 pb-4">
          <div className="flex justify-between items-start">
            {/* Left Section - Photo and Details */}
            <div className="flex-1">
              {/* Photo */}
              <div className="w-24 h-24 rounded mb-3 flex items-center justify-center">
                <img
                  src="/FD.jpg"
                  alt="Barcode"
                  className="w-24 h-24 object-contain border border-gray-400 bg-white rounded"
                />
              </div>

              {/* Personal Details */}
              <div className="space-y-2 text-sm mt-4">
                <div>
                  <div className="text-blue-900 font-semibold text-xs">
                    नाम / Name
                  </div>
                  <div className="text-black font-bold">
                    {formData.fullName}
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-blue-900 font-semibold text-xs">
                      जन्म की तारीख / Date of Birth
                    </div>
                    <div className="text-black font-bold">
                      {formData.dateOfBirth}
                    </div>
                  </div>

                  {/* Signature Area */}
                  <div className="text-center">
                    <div className="w-20 h-12 bg-purple-200 rounded border border-purple-400 flex items-center justify-center mb-1">
                      <span className="text-xs text-purple-700">Signature</span>
                    </div>
                    <div className="text-blue-900 font-semibold text-xs">
                      हस्ताक्षर / Signature
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - QR Code */}
            <div className="ml-4">
              <div className="p-2">
                <div className="w-22 h-22 bg-black flex items-center justify-center">
                  <div className="w-22 h-22 flex items-center justify-center">
                    <img
                      src="/adhar-barcode.png"
                      alt="Barcode"
                      className="w-24 h-24 object-contain border border-gray-400 bg-white rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          This is a sample UI representation for educational purposes only.
        </p>
      </div>
    </div>
  );
};

export default PANCard;
