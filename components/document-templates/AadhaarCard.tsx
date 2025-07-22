import React from "react";

interface AadhaarCardProps {
  formData: any;
}

const AadhaarCard: React.FC<AadhaarCardProps> = ({ formData }) => {
  console.log("formData: ", formData);
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Aadhaar Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        {/* Header Section */}
        <div className="relative p-6 pb-4">
          {/* Top Header with Government Emblem and Text */}
          <div className="flex items-start justify-between mb-4">
            {/* Government Emblem */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-20 bg-gray-300 rounded flex items-center justify-center mb-1">
                <img
                  src="/satyamev-jayate.jpg"
                  alt="Satyamev Jayate Emblem"
                  className="w-12 h-16 object-contain"
                />
              </div>
              <div className="text-xs text-center font-semibold text-gray-800">
                सत्यमेव जयते
              </div>
            </div>

            {/* Center Header Text */}
            <div className="flex-1 text-center px-4">
              {/* Orange and Green Bars */}
              <div className="mb-2">
                <div className="bg-orange-500 text-white py-1 px-4 rounded-full text-sm font-bold mb-1">
                  भारत सरकार
                </div>
                <div className="bg-green-600 text-white py-1 px-4 rounded-full text-sm font-bold">
                  GOVERNMENT OF INDIA
                </div>
              </div>
            </div>

            {/* Right side spacer */}
            <div className="w-16"></div>
          </div>

          {/* Main Content Area */}
          <div className="flex items-start justify-between">
            {/* Left Section - Photo */}
            <div className="flex-shrink-0">
              <div className="w-36 h-40 flex items-center justify-center">
                <img
                  src="/FD.jpg"
                  alt="Barcode"
                  className="w-36 h-40"
                />
              </div>
            </div>

            {/* Center Section - Personal Details */}
            <div className="flex-1 px-6 space-y-3">
              {/* Name in English */}
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-800">
                  {formData.fullName}
                </div>
              </div>

              {/* DOB */}
              <div className="flex items-center justify-center space-x-4">
                <span className="text-sm font-semibold text-gray-700">
                  जन्म तारीख / DOB:
                </span>
                <span className="text-sm font-bold text-gray-900">
                  {formData.dateOfBirth}
                </span>
              </div>

              {/* Gender */}
              <div className="flex items-center justify-center space-x-4">
                <span className="text-sm font-semibold text-gray-700">
                  पुरुष / MALE
                </span>
              </div>

              {/* Aadhaar Number */}
              <div className="text-center mt-6">
                <div className="text-2xl font-bold text-gray-900 tracking-wider">
                  {formData.aadhaarNumber}
                </div>
              </div>
            </div>

            {/* Right Section - Barcode Image */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src="/adhar-barcode.png"
                alt="Barcode"
                className="w-24 h-24 object-contain border border-gray-400 bg-white rounded"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section - Address */}
        <div className="bg-gray-50 px-6 py-4 border-t border-red-500">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900 mb-2">
              माझे आधार, माझी ओळख
            </div>
            <div className="text-sm text-gray-700">
              123, Sample Street, Mumbai, Maharashtra - 400001
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          This is a sample UI representation for educational purposes only.
        </p>
      </div>

      {/* Aadhaar Card Back Side */}
      <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        {/* Header Section */}
        <div className="p-6">
          {/* UIDAI Header */}
          <div className="flex items-center justify-between mb-6">
            {/* UIDAI Logo and Text */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🇮🇳</span>
              </div>
              <div>
                <div className="text-orange-600 font-bold text-lg">
                  भारतीय विशिष्ट पहचान प्राधिकरण
                </div>
                <div className="text-gray-700 font-semibold text-base">
                  Unique Identification Authority of India
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-black flex items-center justify-center border border-gray-400">
                <div className="w-30 h-30 bg-white flex items-center justify-center">
                  <img
                    src="/adhar-barcode.png"
                    alt="Barcode"
                    className="w-32 h-32 object-contain border border-gray-400 bg-white rounded"
                  />
                  {/* <div className="grid grid-cols-16 gap-px w-28 h-28">
                    {Array.from({ length: 256 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-full h-full ${
                          Math.random() > 0.5 ? "bg-black" : "bg-white"
                        }`}
                      />
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="mb-8">
            <div className="mb-4">
              <div className="text-sm font-semibold text-gray-700 mb-2">
                पता:
              </div>
              <div className="text-sm text-gray-900 leading-relaxed">
                १२३, उदाहरण गली, मुंबई, महाराष्ट्र - ४००००१
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-gray-700 mb-2">
                Address:
              </div>
              <div className="text-sm text-gray-900 leading-relaxed">
                123, Sample Street, Mumbai, Maharashtra - 400001
              </div>
            </div>
          </div>

          {/* Aadhaar Number and VID */}
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-gray-900 tracking-wider mb-2">
              {formData.aadhaarNumber.replace(/\s/g, " ")}
            </div>
            <div className="border-t border-red-500 pt-2">
              <div className="text-sm text-gray-700">
                VID : 9174 0502 0094 5412
              </div>
            </div>
          </div>

          {/* Bottom Section with Icons */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-6 bg-gray-400 rounded flex items-center justify-center">
                <span className="text-xs text-white">📱</span>
              </div>
              <div className="text-xs text-gray-600">mAadhaar.uidai.gov.in</div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-6 bg-gray-400 rounded flex items-center justify-center">
                <span className="text-xs text-white">🌐</span>
              </div>
              <div className="text-xs text-gray-600">www.uidai.gov.in</div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-6 bg-gray-400 rounded flex items-center justify-center">
                <span className="text-xs text-white">📞</span>
              </div>
              <div className="text-xs text-gray-600">1947</div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer for back card */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          This is a sample UI representation for educational purposes only.
        </p>
      </div>
    </div>
  );
};

export default AadhaarCard;
