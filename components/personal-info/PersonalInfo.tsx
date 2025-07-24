import React from "react";

export default function PersonalInfo() {
  return (
    <div className="!text-nowrap flex-1 pl-1 text-[12px] text-start font-[500]">
      <div
        className="w-[120px] h-[140px] bg-gray-300 border border-gray-500 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/120x140.png?text=Photo')",
        }}
      ></div>
      <p className="my-2">
        <strong>नाम / Name</strong>
        <br />
        APPLICANT NAME
      </p>
      <p className="my-2">
        <strong>पिता का नाम / Father's Name</strong>
        <br />
        APPLICANT’S FATHER NAME
      </p>
      <p className="my-2">
        <strong>जन्म की तारीख / Date of Birth</strong>
        <br />
        01/06/1995
      </p>
    </div>
  );
}
