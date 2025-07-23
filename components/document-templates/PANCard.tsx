import { Card } from "@/components/ui/card";

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[600px] h-[350px] relative overflow-hidden rounded-xl shadow-lg border-0">
        {/* Exact background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-cyan-200 via-sky-300 to-blue-400"
          style={{ backgroundImage: "url('/panbg.png')" }}
        ></div>
        {/* Background image overlay */}
        <div
          className="absolute inset-0 z-0 bg-no-repeat bg-contain bg-center opacity-60"
          style={{ backgroundImage: "url('/panbg.png')" }}
        ></div>
        <div className="relative z-10 p-3">
          {/* Top header row */}
          <div className="flex justify-between items-start mb-2">
            {/* Left side */}
            <div>
              <div className="text-red-900 font-bold text-lg">आयकर विभाग</div>
              <div className="text-red-900 font-semibold text-md">
                INCOME TAX DEPARTMENT
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img
                  src="/pansatymevjayte.png"
                  alt="Satyamev Jayate Emblem"
                  className="w-12 h-16 object-contain"
                />
              </div>
            </div>
            {/* Right side */}
            <div className="text-right">
              <div className="text-red-900 font-bold text-lg">भारत सरकार</div>
              <div className="text-red-900 font-semibold text-md">
                GOVT OF INDIA
              </div>
            </div>
          </div>

          {/* Main layout: Photo left, PAN info middle, QR right */}
          <div className="flex items-start justify-between mt-4 mb-4">
            {/* Left - Photo with personal details below */}
            <div className="flex-shrink-0">
              <div
                className="bg-gray-200 border-2 border-gray-400 flex items-center justify-center mb-2"
                style={{ width: "120px", height: "132px" }}
              >
                <svg
                  className="w-16 h-20 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Personal details under photo */}
              <div className="text-left">
                {/* Name */}
                <div className="mb-0.5">
                  <div className="text-black text-xs font-medium">
                    नाम / Name
                  </div>
                  <div className="text-black text-sm font-bold">
                    APPLICANT NAME
                  </div>
                </div>
                {/* Father's Name */}
                <div className="mb-0.5">
                  <div className="text-black text-xs font-medium">
                    पिता का नाम / Father's Name
                  </div>
                  <div className="text-black text-sm font-bold">
                    APPLICANT'S FATHER NAME
                  </div>
                </div>
                {/* Date of Birth */}
                <div className="mb-1">
                  <div className="text-black text-xs font-medium">
                    जन्म की तारीख / Date of Birth
                  </div>
                  <div className="text-black text-sm font-bold">01/06/1995</div>
                </div>
              </div>
            </div>

            {/* Middle - PAN title and number only */}
            <div className="flex-1 mx-4 text-center mt-12 mr-20">
              <div className="text-black font-semibold text-sm">
                स्थायी लेखा संख्या कार्ड
              </div>
              <div className="text-black font-semibold text-sm mb-1">
                Permanent Account Number Card
              </div>
              <div className="text-black font-bold text-lg tracking-wider">
                ABCDE1234F
              </div>
            </div>

            {/* Right - QR Code */}
            <div className="flex-shrink-0 mt-10">
              <img
                src="/adhar-barcode.png"
                alt="Barcode"
                className="w-36 h-36 object-contain border border-gray-400 bg-white rounded"
              />
            </div>
          </div>

          {/* Signature section - positioned at middle bottom */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="text-center">
              <div
                className="italic text-black text-lg mb-1"
                style={{ fontFamily: "cursive" }}
              >
                Signature
              </div>
              <div className="text-black text-xs font-medium">
                हस्ताक्षर / Signature
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
