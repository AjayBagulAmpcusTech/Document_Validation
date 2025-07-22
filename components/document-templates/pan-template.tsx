interface PanTemplateProps {
  formData: Record<string, string>
}

export function PanTemplate({ formData }: PanTemplateProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "01/06/1995"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-100 via-white to-blue-50 border-2 border-blue-300 rounded-lg shadow-lg overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-200 to-blue-300 p-3">
        <div className="flex items-center justify-between">
          {/* Left Side - Hindi Text */}
          <div className="text-left">
            <p className="text-sm font-bold text-blue-900">आयकर विभाग</p>
            <p className="text-xs font-semibold text-blue-800">INCOME TAX DEPARTMENT</p>
          </div>

          {/* Center - Government Emblem */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center mb-1">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-blue-800 font-bold text-xs">🦁</span>
              </div>
            </div>
            <div className="w-6 h-1 bg-orange-500"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-green-600"></div>
          </div>

          {/* Right Side - English Text */}
          <div className="text-right">
            <p className="text-sm font-bold text-blue-900">भारत सरकार</p>
            <p className="text-xs font-semibold text-blue-800">GOVT OF INDIA</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative p-4 bg-gradient-to-br from-blue-50 to-white">
        {/* Card Title */}
        <div className="text-center mb-4">
          <p className="text-sm font-bold text-blue-900">स्थायी लेखा संख्या कार्ड</p>
          <p className="text-xs font-semibold text-blue-800">Permanent Account Number Card</p>
        </div>

        {/* PAN Number */}
        <div className="text-center mb-4">
          <div className="bg-white border-2 border-blue-300 rounded p-2 shadow-sm">
            <p className="text-xl font-bold text-blue-900 tracking-widest font-mono">
              {formData.panNumber || "ABCDE1234F"}
            </p>
          </div>
        </div>

        <div className="flex space-x-3">
          {/* Photo Section */}
          <div className="w-16 h-20 bg-gray-200 border-2 border-blue-300 flex items-center justify-center flex-shrink-0">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-300 rounded mx-auto mb-1 flex items-center justify-center">
                <span className="text-gray-600 text-xs">👤</span>
              </div>
              <span className="text-xs text-gray-500">PHOTO</span>
            </div>
          </div>

          {/* Personal Details */}
          <div className="flex-1 space-y-2">
            {/* Name */}
            <div>
              <p className="text-xs text-blue-700 font-medium">नाम / Name</p>
              <p className="text-sm font-bold text-gray-900 uppercase border-b border-dotted border-gray-400 pb-1">
                {formData.fullName || "APPLICANT NAME"}
              </p>
            </div>

            {/* Father's Name */}
            <div>
              <p className="text-xs text-blue-700 font-medium">पिता का नाम / Father's Name</p>
              <p className="text-sm font-bold text-gray-900 uppercase border-b border-dotted border-gray-400 pb-1">
                {formData.fatherName || "APPLICANT'S FATHER NAME"}
              </p>
            </div>

            {/* Date of Birth */}
            <div>
              <p className="text-xs text-blue-700 font-medium">जन्म तिथि / Date of Birth</p>
              <p className="text-sm font-bold text-gray-900 border-b border-dotted border-gray-400 pb-1">
                {formatDate(formData.dateOfBirth)}
              </p>
            </div>
          </div>

          {/* QR Code */}
          <div className="w-16 h-16 bg-white border-2 border-blue-300 flex items-center justify-center flex-shrink-0">
            <div className="grid grid-cols-6 gap-px">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? "bg-black" : "bg-white"}`}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Signature Section */}
        <div className="mt-4 flex justify-between items-end">
          <div>
            <p className="text-xs text-blue-700 font-medium mb-1">Signature</p>
            <div className="w-24 h-8 border-b-2 border-gray-400 relative">
              <span className="absolute bottom-0 left-2 text-lg font-cursive text-gray-700 italic">Signature</span>
            </div>
            <p className="text-xs text-blue-700 mt-1">हस्ताक्षर / Signature</p>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-30"></div>
      <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20"></div>
    </div>
  )
}
