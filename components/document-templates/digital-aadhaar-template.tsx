interface DigitalAadhaarTemplateProps {
  formData: Record<string, string>
}

export function DigitalAadhaarTemplate({ formData }: DigitalAadhaarTemplateProps) {
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
    <div className="w-full max-w-sm mx-auto bg-gradient-to-br from-blue-50 via-white to-indigo-50 border border-gray-200 rounded-xl shadow-xl overflow-hidden relative">
      {/* Digital Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12"></div>
        </div>

        <div className="relative flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-blue-600 font-bold text-lg">आ</span>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Digital Aadhaar</h3>
              <p className="text-blue-100 text-xs">Government of India</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white bg-opacity-20 rounded-full px-3 py-1">
              <p className="text-white text-xs font-semibold">VERIFIED</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 relative">
        {/* Digital Security Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-1 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="bg-blue-500 rounded-sm"></div>
            ))}
          </div>
        </div>

        {/* Profile Section */}
        <div className="relative flex items-start space-x-4 mb-6">
          <div className="w-16 h-20 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-blue-200 rounded-lg flex items-center justify-center shadow-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-1 flex items-center justify-center">
                <span className="text-blue-600 text-lg">👤</span>
              </div>
              <span className="text-xs text-gray-500">PHOTO</span>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 text-lg mb-1">{formData.fullName || "Full Name"}</h4>
              <div className="space-y-1 text-sm">
                <p className="text-gray-600">
                  <span className="font-medium">DOB:</span> {formatDate(formData.dateOfBirth)}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Gender:</span> Male
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Aadhaar Number Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-4 border border-blue-200">
          <div className="text-center">
            <p className="text-xs text-blue-600 font-medium mb-2">AADHAAR NUMBER</p>
            <p className="text-2xl font-bold text-blue-800 tracking-wider font-mono">
              {formatAadhaarNumber(formData.aadhaarNumber)}
            </p>
          </div>
        </div>

        {/* Digital Verification */}
        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-green-800 font-medium text-sm">Digitally Verified</span>
            </div>
            <div className="text-right">
              <p className="text-xs text-green-600">UIDAI Authenticated</p>
              <p className="text-xs text-green-600">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm">
          <div className="grid grid-cols-4 gap-px">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? "bg-gray-800" : "bg-white"} rounded-sm`}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Digital Footer */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Digital Document</span>
          <span>uidai.gov.in</span>
        </div>
      </div>
    </div>
  )
}
