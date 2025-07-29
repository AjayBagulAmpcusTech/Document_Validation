import React from "react";

export default function Info(formData: any) {
  let data = formData?.formData?.formData || {};
  console.log("data: ", data);
  return (
    <div className="text-sm leading-6 absolute left-[130px] top-[80px] text-left">
      <div>
        <span>
          <strong>Name:</strong> {data?.fullName || "RAJESH KUMAR SINGH"}
        </span>
      </div>
      <div>
        <span>
          <strong>DOB:</strong> {data?.dateOfBirth || "1992-11-22"}
        </span>
      </div>
      <div>
        <span>
          <strong>Gender:</strong> {data?.gender || "M"}
        </span>
      </div>
    </div>
  );
}
