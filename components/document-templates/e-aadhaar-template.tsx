interface EAadhaarData {
  aadhaarNumber?: string;
  fullName?: string;
  dateOfBirth?: string;
  address?: string;
}

const EAadhaarTemplate = ({ formData }: { formData: EAadhaarData }) => {
  return (
    <div className="max-w-3xl mx-auto border border-gray-400 shadow-lg p-6 font-sans bg-white text-sm">
      {/* Header */}
      <div className="text-center mb-4 border-b pb-2">
        <div className="flex justify-between items-center text-sm">
          <div className="text-left">
            <div className="font-bold text-blue-700">भारत सरकार</div>
            <div className="text-xs">GOVERNMENT OF INDIA</div>
          </div>
          <div className="text-center">
            <div className="font-bold">आधार</div>
            <div className="text-xs">AADHAAR</div>
          </div>
        </div>
        <h2 className="mt-2 text-blue-700 font-semibold text-lg">e-Aadhaar</h2>
      </div>

      {/* Info Table */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="font-semibold">आधार संख्या / Aadhaar Number</div>
          <div className="text-gray-700 text-lg font-mono">
            {formData.aadhaarNumber?.replace(
              /(\d{4})(\d{4})(\d{4})/,
              "$1 $2 $3"
            ) || "XXXX XXXX XXXX"}
          </div>
        </div>
        <div>
          <div className="font-semibold">नाम / Name</div>
          <div className="text-gray-700">
            {formData.fullName || "Your Name"}
          </div>
        </div>
        <div>
          <div className="font-semibold">जन्म की तारीख / Date of Birth</div>
          <div className="text-gray-700">
            {formData.dateOfBirth
              ? new Date(formData.dateOfBirth).toLocaleDateString("en-GB")
              : "01/01/2000"}
          </div>
        </div>
        <div className="col-span-2">
          <div className="font-semibold">पता / Address</div>
          <div className="text-gray-700">
            {formData.address || "Full Address"}
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
        <p className="text-center font-medium">
          This is a digitally signed e-Aadhaar. It is valid for all purposes.
        </p>
      </div>
    </div>
  );
};

export { EAadhaarTemplate };
