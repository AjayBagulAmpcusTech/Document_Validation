interface AadhaarTemplateProps {
  formData: Record<string, string>
}

export function AadhaarTemplate({ formData }: AadhaarTemplateProps) {
  const formatAadhaarNumber = (number: string) => {
    if (!number) return "XXXX XXXX XXXX"
    return number.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3")
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return "DD/MM/YYYY"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-gradient-to-br from-orange-50 via-white to-green-50 border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100"></div>
      </div>

      {/* Header with Government of India */}
      <div className="relative bg-white p-3 border-b border-gray-200">
        {/* Indian Flag Colors Stripe */}
        <div className="flex h-1 mb-2">
          <div className="flex-1 bg-orange-500"></div>
          <div className="flex-1 bg-white border-x border-gray-300"></div>
          <div className="flex-1 bg-green-600"></div>
        </div>

        <div className="flex items-center justify-center space-x-3">
          {/* Government Emblem */}
          <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-blue-800 font-bold text-xs">🦁</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm font-bold text-gray-800">भारत सरकार</p>
            <p className="text-xs font-semibold text-gray-700">GOVERNMENT OF INDIA</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative p-4 bg-gradient-to-br from-orange-50 via-white to-green-50">
        <div className="flex space-x-3">
          {/* Photo Section */}
          <div className="w-16 h-20 bg-gray-200 border border-gray-400 flex items-center justify-center flex-shrink-0">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-1 flex items-center justify-center">
                <span className="text-gray-600 text-xs">👤</span>
              </div>
              <span className="text-xs text-gray-500">PHOTO</span>
            </div>
          </div>

          {/* Personal Details */}
          <div className="flex-1 space-y-1">
            {/* Name in Hindi and English */}
            <div>
              <p className="text-sm font-bold text-gray-900 leading-tight">
                {formData.fullName
                  ? `${formData.fullName
                      .split(" ")
                      .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
                      .join(" ")}`
                  : "नाम उपलब्ध नहीं"}
              </p>
              <p className="text-xs font-semibold text-gray-800 uppercase">
                {formData.fullName || "NAME NOT AVAILABLE"}
              </p>
            </div>

            {/* Date of Birth */}
            <div>
              <p className="text-xs text-gray-700">
                <span className="font-medium">जन्म तारीख/DOB:</span>
                <span className="font-bold ml-1">{formatDate(formData.dateOfBirth)}</span>
              </p>
            </div>

            {/* Gender */}
            <div>
              <p className="text-xs text-gray-700">
                <span className="font-bold">पुरुष Male</span>
              </p>
            </div>
          </div>

          {/* QR Code */}
          <div className="w-12 h-12 bg-gray-800 flex items-center justify-center flex-shrink-0">
            <div className="grid grid-cols-6 gap-px">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? "bg-white" : "bg-gray-800"}`}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Aadhaar Number */}
        <div className="mt-4 text-center">
          <p className="text-lg font-bold text-gray-900 tracking-wider font-mono">
            {formatAadhaarNumber(formData.aadhaarNumber)}
          </p>

          {/* Red underline */}
          <div className="w-full h-0.5 bg-red-600 mt-1"></div>
        </div>

        {/* Bottom Text */}
        <div className="mt-2 text-center">
          <p className="text-xs font-bold text-red-700">आधार - सामान्य नागरिकाचा अधिकार</p>
        </div>

        {/* Subtle watermark pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(0,0,0,0.1) 10px,
              rgba(0,0,0,0.1) 11px
            )`,
            }}
          ></div>
        </div>
      </div>

      {/* Card aging effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full rounded-lg shadow-inner"
          style={{
            background: `radial-gradient(circle at 20% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
                       radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.05) 0%, transparent 50%),
                       radial-gradient(circle at 40% 40%, rgba(139, 69, 19, 0.03) 0%, transparent 50%)`,
          }}
        ></div>
      </div>
    </div>
  )
}
