import React from "react";
import Image from "next/image";

export default function AadhaarHeader() {
  return (
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
          भारत सरकार
          <br />
          Government of India
        </span>
      </div>
      <Image src="/logo/adhar.png" alt="Aadhaar Logo" width={40} height={40} />
    </div>
  );
}
