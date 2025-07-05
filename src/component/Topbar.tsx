import ellipse from "../assets/Ellipse 1.png";
import notificationbell from "../assets/Notification_bell.png";
import panal from "../assets/Panel.png";
import search from "../assets/search2 (1).png";
export const Topbar = () => {
  return (
    <div>
      <div className="w-full  h-[56px] px-4 py-2 border-b border-[#EEEEEE] flex justify-between items-center">
        <div className="text-[#828282] text-sm flex items-center gap-2">
          <span>
            <img src={panal} alt="" />
          </span>
          <span>Workspace</span>
          <span>{">"}</span>
          <span>Folder 2</span>
          <span>{">"}</span>
          <span className="font-medium text-black">Spreadsheet 3 ...</span>
        </div>

        <div className="flex items-center gap-1 ">
          <div className="h-[40px] p-3 gap-2 w-[165px] flex items-center border border-[#ddd] rounded-[6px]">
            <img src={search} alt="search" />
            <input
              type="text"
              placeholder="Search within sheet"
              className="overflow-hidden w-[117px] text-sm outline-none"
            />
          </div>

          <div className="relative w-[40px] h-[40px] rounded-[8px]">
            <img src={notificationbell} alt="Notifications" />
          </div>

          <div className="flex items-center gap-2 pr-4 pl-2 py-1.5 ">
            <img
              src={ellipse}
              alt="User"
              className="h-[32px] w-[32px] rounded-full"
            />
            <div className="text-sm">
              <div className="font-medium">John Doe</div>
              <div className="text-[#828282] text-xs leading-none">
                john.doe...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
