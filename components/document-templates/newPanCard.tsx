import React from "react";
import Header from "../header/Header";
import PanNumber from "../pan-number/PanNumber";
import Signature from "../signature/Signature";
import PersonalInfo from "../personal-info/PersonalInfo";
import QRCode from "../qr-code/QRCode";

const PanCard = (formData: any) => {
  console.log("formData: ", formData);
  return (
    <div className="flex justify-center items-center min-h-screen p-10 font-sans">
      <div className="w-[630px] h-[400px] bg-gradient-to-br from-[#77CDF4] to-[#CE9ADE] rounded-lg shadow-md text-black p-6 relative">
        <Header />
        <div className="w-[50%] grid grid-cols-2 gap-2">
          <PersonalInfo
            name={formData.formData.fullName}
            fatherName={formData.formData.fatherName}
            dob={formData.formData.dateOfBirth}
          />
          <div className="grid grid-rows-2 h-full relative">
            <div className="max-h-[20%]">
              <PanNumber />
            </div>
          </div>
        </div>
        <QRCode />
        <Signature />
      </div>
    </div>
  );
};

export default PanCard;
