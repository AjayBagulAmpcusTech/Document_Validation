interface PassportData {
  passportNumber?: string;
  fullName?: string;
  dateOfBirth?: string;
  expiryDate?: string;
}

const PassportTemplate = ({ formData }: { formData: PassportData }) => {
  return (
    <div className="max-w-3xl mx-auto border-2 border-blue-800 shadow-lg p-6 font-sans bg-white text-sm">
      {/* Header */}
      <div className="text-center mb-4 border-b-2 border-blue-800 pb-2">
        <div className="flex justify-center items-center mb-2">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-3">
            <div className="text-white font-bold text-lg">🇮🇳</div>
          </div>
          <div>
            <div className="font-bold text-blue-800 text-lg">भा��त गणराज्य</div>
            <div className="text-sm">REPUBLIC OF INDIA</div>
          </div>
        </div>
        <h2 className="text-blue-800 font-bold text-xl">PASSPORT</h2>
      </div>

      {/* Passport Details */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div>
            <div className="font-semibold text-blue-800">Passport No.</div>
            <div className="text-gray-700 text-lg font-mono">
              {formData.passportNumber || "A1234567"}
            </div>
          </div>
          <div>
            <div className="font-semibold text-blue-800">Name / नाम</div>
            <div className="text-gray-700 font-medium">
              {formData.fullName || "Your Name"}
            </div>
          </div>
          <div>
            <div className="font-semibold text-blue-800">
              Date of Birth / जन्म तिथि
            </div>
            <div className="text-gray-700">
              {formData.dateOfBirth
                ? new Date(formData.dateOfBirth).toLocaleDateString("en-GB")
                : "01/01/2000"}
            </div>
          </div>
          <div>
            <div className="font-semibold text-blue-800">
              Date of Expiry / समाप्ति तिथि
            </div>
            <div className="text-gray-700">
              {formData.expiryDate
                ? new Date(formData.expiryDate).toLocaleDateString("en-GB")
                : "01/01/2030"}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start">
          <div className="text-center">
            <div className="w-32 h-40 bg-gray-300 mx-auto mb-2 border border-gray-400" />
            <div className="text-xs">Photograph</div>
          </div>
        </div>
      </div>

      {/* Machine Readable Zone */}
      <div className="bg-gray-100 p-3 font-mono text-xs border-t-2 border-blue-800">
        <div>
          P&lt;IND{formData.fullName?.replace(/\s/g, "&lt;") || "YOUR&lt;NAME"}
          &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
        </div>
        <div>
          {formData.passportNumber || "A1234567"}7IND
          {formData.dateOfBirth?.replace(/-/g, "") || "900101"}M
          {formData.expiryDate?.replace(/-/g, "") || "300101"}
          &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;7
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-600 text-center mt-4">
        <p>
          This passport is valid for all countries unless otherwise endorsed
        </p>
      </div>
    </div>
  );
};

export { PassportTemplate };
