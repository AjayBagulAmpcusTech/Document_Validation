interface VerificationDetailsProps {
  formData: Record<string, string>;
  currentConfig: any;
}

export default function VerificationDetails({
  formData,
  currentConfig,
}: VerificationDetailsProps) {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Verification Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">
              Document Type: {currentConfig.name}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">Status: Verified</span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">
              Verification Time: {new Date().toLocaleString()}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium">
              Fields Verified: {Object.keys(formData).length}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium">Security Level: High</span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium">
              Valid Until:{" "}
              {new Date(
                Date.now() + 30 * 24 * 60 * 60 * 1000
              ).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
