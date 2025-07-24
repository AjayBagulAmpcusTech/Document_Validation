import React from "react";

export default function QRCode() {
  return (
    <div className="absolute right-6 top-[90px] flex items-center gap-5">
      <div
        className="w-[150px] h-[150px] bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage:
            "url('https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=ABCDE1234F')",
        }}
      ></div>
    </div>
  );
}
