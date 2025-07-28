import React from "react";
interface PersonalInfoProps {
  name?: string;
  fatherName?: string;
  dob?: string;
}
export default function PersonalInfo({
  name,
  fatherName,
  dob,
}: PersonalInfoProps) {
  return (
    <div className="!text-nowrap flex-1 pl-1 text-[12px] text-start font-[500]">
      <div
        className="w-[120px] h-[140px] bg-gray-300 border border-gray-500 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/aadhaarProfile.jpg')",
        }}
      ></div>
      <p className="my-2">
        <strong>नाम / Name</strong>
        <br />
        {name || "APPLICANT NAME"}
      </p>
      <p className="my-2">
        <strong>पिता का नाम / Father's Name</strong>
        <br />
        {fatherName || "FATHER'S NAME"}
      </p>
      <p className="my-2">
        <strong>जन्म की तारीख / Date of Birth</strong>
        <br />
        {dob || "01/06/1995"}
      </p>
    </div>
  );
}
