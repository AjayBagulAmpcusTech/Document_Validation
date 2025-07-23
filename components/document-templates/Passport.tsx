import React from "react";

const Passport: React.FC<any> = ({ formData }) => {
  console.log("formData: ", formData);
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Passport Page */}
      <div
        className="bg-cyan-50 rounded-lg shadow-lg overflow-hidden border border-gray-300"
        style={{ backgroundColor: "#f0f9ff" }}
      >
        {/* Header Section */}
        <div className="relative p-6 pb-4">
          {/* Top Header */}
          <div className="flex items-center justify-between mb-6">
            {/* Left - Republic of India */}
            <div className="flex-1">
              <div className="text-lg font-bold text-gray-800">
                REPUBLIC OF INDIA
              </div>
              <div className="text-sm text-gray-600">भारत गणराज्य</div>
            </div>

            {/* Center - Government Emblem */}
            <div className="flex flex-col items-center mx-8">
              <div className="w-16 h-20 bg-gray-300 rounded flex items-center justify-center mb-1">
                <span className="text-xs text-gray-600 text-center">
                  Govt
                  <br />
                  Emblem
                </span>
              </div>
              <div className="text-xs text-center font-semibold text-gray-800">
                सत्यमेव जयते
              </div>
            </div>

            {/* Right - Passport */}
            <div className="flex-1 text-right">
              <div className="text-lg font-bold text-gray-800">PASSPORT</div>
              <div className="text-sm text-gray-600">पासपोर्ट</div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-12 gap-4">
            {/* Left Section - Photo and Basic Info */}
            <div className="col-span-4">
              {/* Photo */}
              <div className="w-full h-48 bg-gray-200 border-2 border-gray-400 rounded mb-4 flex items-center justify-center">
                <img
                  src="/FD.jpg"
                  alt="Barcode"
                  className="w-30 h-30 object-contain border border-gray-400 bg-white rounded"
                />
              </div>

              {/* Signature */}
              <div className="mb-4">
                <div className="text-xs text-gray-600 mb-1">
                  Signature of Bearer
                </div>
                <div className="w-full h-12 bg-gray-100 border border-gray-300 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-500">Signature</span>
                </div>
              </div>
            </div>

            {/* Center Section - Personal Details */}
            <div className="col-span-5 space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-600 font-semibold">
                    Type
                  </div>
                  <div className="font-bold">P</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 font-semibold">
                    Country Code
                  </div>
                  <div className="font-bold">IND</div>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-600 font-semibold">
                  Passport No.
                </div>
                <div className="text-lg font-bold text-red-600">
                  {formData?.passportNumber}
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-600 font-semibold">
                  Surname
                </div>
                <div className="font-bold text-gray-900">
                  {formData?.fullName}
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-600 font-semibold">
                  Nationality
                </div>
                <div className="font-bold">INDIAN</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-600 font-semibold">Sex</div>
                  <div className="font-bold">{formData?.gender || "M"}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 font-semibold">
                    Date of Birth
                  </div>
                  <div className="font-bold">{formData?.dateOfBirth}</div>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-600 font-semibold">
                  Place of Birth
                </div>
                <div className="font-bold">
                  {formData.placeOfBirth || "Mumbai"}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-600 font-semibold">
                    Date of Issue
                  </div>
                  <div className="font-bold">
                    {formData?.dateOfIssue || "2020-01-01"}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 font-semibold">
                    Date of Expiry
                  </div>
                  <div className="font-bold">{formData?.expiryDate}</div>
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-600 font-semibold">
                  Place of Issue
                </div>
                <div className="font-bold">
                  {formData?.placeOfIssue || "Mumbai"}
                </div>
              </div>
            </div>

            {/* Right Section - Additional Info */}
            <div className="col-span-3">
              {/* File Number */}
              <div className="mb-4">
                <div className="text-xs text-gray-600 font-semibold">
                  File No.
                </div>
                <div className="font-bold">AB1234567</div>
              </div>

              {/* Old Passport Details */}
              <div className="mb-4">
                <div className="text-xs text-gray-600 font-semibold">
                  Old Passport No.
                </div>
                <div className="font-bold">-</div>
              </div>

              <div className="mb-4">
                <div className="text-xs text-gray-600 font-semibold">
                  Old PCN
                </div>
                <div className="font-bold">-</div>
              </div>

              {/* Endorsements */}
              <div className="mb-4">
                <div className="text-xs text-gray-600 font-semibold">
                  Endorsements
                </div>
                <div className="text-xs">-</div>
              </div>

              {/* Address */}
              <div>
                <div className="text-xs text-gray-600 font-semibold mb-1">
                  Address
                </div>
                <div className="text-xs leading-relaxed">
                  {formData?.address}
                  <br />
                  {formData?.city}
                  <br />
                  {formData?.state}
                  <br />
                  {formData?.pincode}
                </div>
              </div>
            </div>
          </div>

          {/* Machine Readable Zone */}
          <div className="mt-8 pt-4 border-t-2 border-gray-400">
            <div className="bg-gray-50 p-3 rounded font-mono text-xs leading-tight">
              <div className="mb-1">
                P&lt;IND
                {formData?.fullName.replace(/\s+/g, "&lt;").padEnd(39, "&lt;")}
              </div>
              <div>
                {formData?.passportNumber.padEnd(9)}1IND
                {formData?.dateOfBirth.replace(/\//g, "")}0{formData?.gender}
                {formData?.expiryDate.replace(/\//g, "")}
                0&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;04
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 text-center">
            <div className="text-xs text-gray-600">
              <div className="font-semibold">MINISTRY OF EXTERNAL AFFAIRS</div>
              <div>विदेश मंत्रालय</div>
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
    </div>
  );
};

export default Passport;
