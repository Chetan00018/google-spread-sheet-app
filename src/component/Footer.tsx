export const Footer = () => {
  return (
    <div>
      <div className="footer w-[1440px] h-[48px]  border-t   pr-[16px] pl-[36px] ">
        <div className="view_list w-[437px] h-[44px]  flex flex-row">
          <div className="w-[111px] h-[44px] font-semibold  bg-[#aec2b1] border-t-[#57b562] pt-[10px] pl-[16px] pb-[10px] pr-[16px]">
            <span>All Orders</span>
          </div>
          <div className="w-[94px] h-[44px] pt-[10px] pl-[16px] pb-[10px] pr-[16px]">
            <span>Pending</span>
          </div>
          <div className="w-[107px] h-[44px] pt-[10px] pl-[16px] pb-[10px] pr-[16px]">
            <span>Reviewed</span>
          </div>
          <div className="w-[89px] h-[44px] pt-[10px] pl-[16px] pb-[10px] pr-[16px]">
            <span>Arrived</span>
          </div>
          <div className="w-[36px] h-[44px] pt-[10px] pl-[16px] pb-[10px] pr-[16px]">
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  );
};
