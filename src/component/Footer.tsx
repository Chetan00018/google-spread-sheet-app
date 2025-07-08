import { useState } from "react";

export const Footer = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <div className="footer   w-full h-[48px]  border-t bg-white pt-1  pr-[16px] pl-[36px] sticky  bottom-0 left-0 right-0 ">
      <div className="view_list w-[437px] h-[44px]  flex flex-row">
        <div
          className={`w-[111px] h-[44px] cursor-pointer   ${
            activeTab === "All Orders" &&
            " font-semibold border-t-2 border-t-[#57b562] bg-[#aec2b1]"
          }  flex justify-center items-center cursor-pointer`}
          onClick={() => setActiveTab("All Orders")}
        >
          <span>All Orders</span>
        </div>

        <div
          onClick={() => setActiveTab("Pending")}
          className={`w-[94px] h-[44px] flex justify-center items-center  ${
            activeTab === "Pending" &&
            " font-semibold border-t-2 border-t-[#57b562] bg-[#aec2b1]"
          }  flex justify-center items-center cursor-pointer`}
        >
          <span>Pending</span>
        </div>

        <div
          onClick={() => setActiveTab("Reviewed")}
          className={`w-[107px] h-[44px] flex justify-center items-center  ${
            activeTab === "Reviewed" &&
            " font-semibold border-t-2 border-t-[#57b562] bg-[#aec2b1]"
          }  flex justify-center items-center cursor-pointer`}
        >
          <span>Reviewed</span>
        </div>

        <div
          onClick={() => setActiveTab("Arrived")}
          className={`w-[89px] h-[44px] flex justify-center items-center  ${
            activeTab === "Arrived" &&
            " font-semibold border-t-2 border-t-[#57b562] bg-[#aec2b1]"
          }  flex justify-center items-center cursor-pointer`}
        >
          <span>Arrived</span>
        </div>
        <div className="w-[36px] h-[44px] flex justify-center items-center">
          <span>+</span>
        </div>
      </div>
    </div>
  );
};
