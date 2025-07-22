interface UnDocumentData {
  uanNumber?: string;
  fullName?: string;
  employerName?: string;
}

const UnDocumentTemplate = ({ formData }: { formData: UnDocumentData }) => {
  return (
    <div className="max-w-3xl mx-auto border border-gray-400 shadow-lg p-6 font-sans bg-white text-sm">
      {/* Header */}
      <div className="text-center mb-4 border-b pb-2">
        <div className="flex justify-between items-center text-sm">
          <div className="text-left">
            <div className="font-bold text-green-700">EPFO</div>
            <div className="text-xs">
              Employees' Provident Fund Organisation
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold">भारत सरकार</div>
            <div className="text-xs">GOVT. OF INDIA</div>
          </div>
        </div>
        <h2 className="mt-2 text-blue-700 font-semibold text-lg">
          Universal Account Number (UAN) Card
        </h2>
      </div>

      {/* UAN Number - Prominent Display */}
      <div className="text-center mb-6">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
          <div className="font-semibold text-sm mb-1">
            यूनिवर्सल खाता संख्या / Universal Account Number
          </div>
          <div className="text-2xl font-bold text-green-800 font-mono tracking-wider">
            {formData.uanNumber || "101010101010"}
          </div>
        </div>
      </div>

      {/* Info Table */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="font-semibold">नाम / Name</div>
          <div className="text-gray-700">
            {formData.fullName || "Your Name"}
          </div>
        </div>
        <div>
          <div className="font-semibold">नियोक्ता / Employer</div>
          <div className="text-gray-700">
            {formData.employerName || "Employer Name"}
          </div>
        </div>
      </div>

      {/* Photo and QR */}
      <div className="grid grid-cols-3 gap-4 items-center mb-4">
        <div className="text-center">
          <div className="w-20 h-24 bg-gray-300 mx-auto mb-1" />
          <div className="text-xs">फोटो / Photo</div>
        </div>
        <div className="text-center">
          <div className="w-32 h-12 bg-gray-200 mx-auto mb-1" />
          <div className="text-xs">हस्ताक्षर / Signature</div>
        </div>
        <div>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=example"
            alt="QR Code"
            className="w-24 h-24 mx-auto"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-700 leading-snug border-t pt-2">
        <p>
          <strong>Universal Account Number (UAN)</strong> is a 12-digit number
          allotted to employees by EPFO. It remains same throughout the career
          of an employee.
        </p>
        <p className="mt-2">
          UAN enables portability of PF account and helps in tracking service
          history and PF contributions.
        </p>
      </div>
    </div>
  );
};

export { UnDocumentTemplate };
