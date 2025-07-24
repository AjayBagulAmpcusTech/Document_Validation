import React from "react";
import AadhaarHeader from "./aadhaar/header";
import Info from "./aadhaar/info";
import RightSideAadhaar from "./aadhaar/rightSideAadhaar";

const NewAadhaarCard = (formData: any) => {
  return (
    <div className=" p-5">
      <div className="flex w-[900px] h-[300px] shadow-lg border-2 border-black bg-white">
        {/* Left Side */}
        <div className="flex-1 p-4 border-r-2 border-black relative">
          {/* Header */}
          <AadhaarHeader />

          {/* Photo */}
          <div className="w-[100px] h-[120px] bg-gray-300 mt-2">
            {/* Photo Placeholder */}
          </div>
          <div>
            <Info />
          </div>
          {/* Note */}
          <div className="text-[7px] bg-gray-100 border border-gray-400 p-1 -mt-2 leading-tight w-[280px] absolute left-[120px] top-[170px]">
            आधार पहचान का प्रमाण है, नागरिकता या जन्मतिथि का नहीं। <br />
            इसका उपयोग सत्यापन (ऑनलाइन प्रमाणीकरण, या क्यूआर कोड/ऑफलाइन एक्सएमएल
            के स्कैनिंग) के साथ किया जाना चाहिए।
            <br />
            <br />
            <b>
              Aadhaar is proof of identity, not of citizenship or date of birth.
            </b>
            It should be used with verification (online authentication, or
            scanning of QR code / offline XML).
          </div>

          <div className="text-lg font-bold tracking-wider text-center mt-[25px]">
            XXXX XXXX XXXX
          </div>
          <hr className="border-t-2 border-red-600 my-1" />
          <div className="text-center font-bold text-base">
            मेरा <span className="text-red-600">आधार</span>, मेरी पहचान
          </div>
        </div>

        {/* Right Side */}
        <RightSideAadhaar />
      </div>
    </div>
  );
};

export default NewAadhaarCard;
