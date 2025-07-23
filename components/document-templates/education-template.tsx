import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const EducationVerification = (formData: any) => {
  console.log("formData: ", formData);
  // Dummy API response
  const educationData = {
    status: "success",
    verified: true,
    data: {
      student_name: formData?.fullName || "John Doe",
      father_name: "Down Doe",
      dob: "1997-06-21",
      board_or_university: "Savitribai Phule Pune University",
      institution_name:
        formData?.institutionName || "Modern College of Engineering, Pune",
      roll_number: formData?.rollNumber || "PUC1234567",
      course_name: formData.certificateName || "Bachelor of Engineering",
      stream: "Computer Science",
      year_of_passing: formData?.yearOfPassing || "2020",
      grade: "First Class with Distinction",
      // document_url: "https://karza.com/certificates/ajay-bagul-degree.pdf",
      document_url: "",
    },
  };

  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {educationData.verified ? (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Student Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Student Name
                </label>
                <p className="text-gray-900 font-semibold">
                  {formData?.fullName || educationData.data.student_name}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  {"Father's Name"}
                </label>
                <p className="text-gray-900 font-semibold">
                  {educationData.data.father_name}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Date of Birth
                </label>
                <p className="text-gray-900 font-semibold">
                  {educationData.data.dob}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Roll Number
                </label>
                <p className="text-gray-900 font-semibold">
                  {formData?.rollNumber || educationData.data.roll_number}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  University/Board
                </label>
                <p className="text-gray-900 font-semibold">
                  {educationData.data.board_or_university}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Institution
                </label>
                <p className="text-gray-900 font-semibold">
                  {formData?.institutionName ||
                    educationData.data.institution_name}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Course
                </label>
                <p className="text-gray-900 font-semibold">
                  {formData.certificateName || educationData.data.course_name}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Stream
                </label>
                <p className="text-gray-900 font-semibold">
                  {educationData.data.stream}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Year of Passing
                </label>
                <p className="text-gray-900 font-semibold">
                  {formData?.yearOfPassing ||
                    educationData.data.year_of_passing}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Grade
                </label>
                <p className="text-gray-900 font-semibold">
                  {educationData.data.grade}
                </p>
              </div>
            </div>

            <div className="border-t pt-6">
              <a
                href={educationData.data.document_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                Download Certificate
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-red-600 font-medium text-center">
              Verification Failed or Document Not Found
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationVerification;
