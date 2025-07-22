interface DigitalEPanData {
  panNumber?: string;
  fullName?: string;
  dateOfBirth?: string;
}

const DigitalEPanTemplate = ({ formData }: { formData: DigitalEPanData }) => {
  return (
    <div className="max-w-3xl mx-auto border border-gray-400 shadow-lg p-6 font-sans bg-white text-sm">
      {/* Header */}
      <div className="text-center mb-4 border-b pb-2">
        <div className="flex justify-between items-center text-sm">
          <div className="text-left">
            <div className="font-bold text-red-700">आयकर विभाग</div>
            <div className="text-xs">INCOME TAX DEPARTMENT</div>
          </div>
          <div className="text-center">
            <div className="font-bold">भारत सरकार</div>
            <div className="text-xs">GOVT. OF INDIA</div>
          </div>
        </div>
        <h2 className="mt-2 text-blue-700 font-semibold text-lg">
          e - Permanent Account Number (e-PAN) Card
        </h2>
      </div>

      {/* PAN Number - Prominent Display */}
      <div className="text-center mb-6">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <div className="font-semibold text-sm mb-1">
            स्थायी खाता संख्या / Permanent Account Number
          </div>
          <div className="text-2xl font-bold text-blue-800 font-mono tracking-wider">
            {formData.panNumber || "ABCDE1234F"}
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
          <div className="font-semibold">जन्म की तारीख / Date of Birth</div>
          <div className="text-gray-700">
            {formData.dateOfBirth
              ? new Date(formData.dateOfBirth).toLocaleDateString("en-GB")
              : "01/01/2000"}
          </div>
        </div>
      </div>

      {/* Signature and QR */}
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

      {/* Signature Note */}
      <div className="text-xs border border-yellow-400 p-2 bg-yellow-100 text-yellow-800 mb-4">
        <strong>Signature Not Verified</strong>
        <br />
        Digitally signed by INCOME TAX DEPARTMENT
        <br />
        Date: {new Date().toLocaleDateString("en-GB")} IST
        <br />
        Location: NSDL e-Gov
      </div>

      {/* Note */}
      <div className="text-xs text-gray-700 leading-snug">
        <p>
          <strong>Permanent Account Number (PAN)</strong> facilitates linking of
          various documents, including payment of taxes, assessment, tax demand,
          arrears, matching of information and easy maintenance & retrieval of
          electronic information relating to a taxpayer.
        </p>
        <p className="mt-2">
          Quoting of PAN is now mandatory for several transactions specified
          under Income Tax Act, 1961 (Refer Rule 114B of Income Tax Rules,
          1962).
        </p>
      </div>
    </div>
  );
};

export { DigitalEPanTemplate };
