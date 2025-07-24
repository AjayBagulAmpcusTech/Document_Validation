import React from "react";

export default function Header() {
  return (
    <div className="flex justify-around font-bold text-[#550000] text-lg">
      <div className="w-[40%] text-nowrap">
        आयकर विभाग
        <br />
        INCOME TAX DEPARTMENT
      </div>
      <div className="flex justify-center w-[20%] mt-[-15px]">
        <img
          src="http://freevectorlogo.net/wp-content/uploads/2012/12/emblem-of-india-logo-vector-400x400.png"
          alt="Gov Emblem"
          width="80"
          height="80"
        />
      </div>
      <div className="w-[40%] text-nowrap">
        भारत सरकार
        <br />
        GOVT. OF INDIA
      </div>
    </div>
  );
}
