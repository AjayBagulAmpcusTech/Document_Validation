import Image from "next/image";
import React from "react";

export default function RightSideAadhaar() {
  return (
    <>
      {/* Right Side */}
      <div className="flex-1 p-4 relative">
        <div className="flex items-center justify-between">
          <Image src="/logo/emblem.png" alt="Emblem" width={40} height={40} />
          <div
            className="text-center font-bold text-sm text-gray-800"
            style={{
              backgroundImage: "url(/logo/flag.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "280px",
              height: "50px",
            }}
          >
            <span>
              भारतीय विशिष्ट पहचान प्राधिकरण
              <br />
              Unique Identification Authority of India
            </span>
          </div>
          <Image
            src="/logo/adhar.png"
            alt="Aadhaar Logo"
            width={40}
            height={40}
          />
        </div>

        {/* Address */}
        <div className="text-sm leading-relaxed w-[290px]">
          <p>
            <strong>पता / Address:</strong>
          </p>
          <p>
            123 Street Name,
            <br />
            City, State - 000000 lo
          </p>
        </div>

        {/* QR Code */}
        <div className="absolute top-[90px] right-[20px] w-[110px] h-[110px]">
          <Image
            src="https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=AADHAAR-XXXX"
            alt="QR Code"
            width={110}
            height={110}
          />
        </div>

        <div className="text-lg font-bold tracking-wider text-center mt-[84px]">
          XXXX XXXX XXXX
        </div>
        <hr className="border-t-2 border-red-600 my-1" />

        {/* Footer */}
        <div className="absolute bottom-1.5 left-4 text-xs flex gap-10 items-center">
          <span className="flex items-center">
            <Image
              src="https://img.icons8.com/ios/50/phone--v1.png"
              alt="phone"
              width={16}
              height={16}
            />
            1947
          </span>
          <span className="flex items-center">
            <Image
              src="https://img.icons8.com/ios/50/new-post--v1.png"
              alt="email"
              width={16}
              height={16}
            />
            help@uidai.gov.in
          </span>
          <span className="flex items-center">
            <Image
              src="https://img.icons8.com/ios/50/domain.png"
              alt="domain"
              width={16}
              height={16}
            />
            www.uidai.gov.in
          </span>
        </div>
      </div>
    </>
  );
}
