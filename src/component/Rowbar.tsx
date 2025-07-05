import btn from "../assets/Button.png";
import btn2 from "../assets/Button_Neutral (1).png";
import btn3 from "../assets/Button_Neutral (2).png";
import btn4 from "../assets/Button_Neutral (3).png";
import btn5 from "../assets/Button_Neutral (4).png";
import btn6 from "../assets/Button_Neutral (5).png";
import btn7 from "../assets/Button_Neutral (6).png";
import btn1 from "../assets/Button_Neutral.png";
import seperator from "../assets/Separator--V--1px.png";
import shape from "../assets/Shape (1).png";
import toolbar from "../assets/Tool bar.png";
export const Rowbar = () => {
  return (
    <div className="flex flex-row items-center w-[1440px] h-[48px] border-b border-[#EEEEEE] pt-[6px] pr-[8px] pb-[6px] pl-[8px] gap-[8px]">
      <div className="flex flex-row items-center left-content">
        <div className="flex flex-row relative  toolbar-content h-[36px] w-[91px] p-[8px] gap-[4px] rounded-[4px] bg-[#FFFFFF] mt-2 hover:bg-blue-100">
          <div className="toolbar-image h-[20px] w-[55px] font-normal text-[14px] leading-[20px] tracking-[0%] mb-[8px] ">
            <img src={toolbar} alt="" />
          </div>
          <div className='shape-image "w-[8.6px] h-[9.8px] absolute top-[10px] left-[68.5px]  '>
            <img src={shape} alt="" />
          </div>
        </div>

        <div className="seperator w-[1px] h-[24px] ">
          <img src={seperator} alt="" className="w-[1px] h-[24px]" />
        </div>

        <div className="tablecontrol-block flex flex-row items-center h-[36px] w-[871px] gap-[8px] mb-1 hover:border-red-500">
          <div className="btn1  w-[118px] h-[36px] mb-2 rounded-[6px] pt-[8px] pr-[12px] pb-[8px] pl-[8px] gap-[4px] hover:scale-105 transition duration-300 rounded-lg">
            <button onClick={() => alert("hide fields")}>
              <img src={btn1} alt="" />
            </button>
          </div>
          <div className="btn2  w-[73px] h-[36px] rounded-[6px] pt-[8px] pr-[12px] pb-[8px] pl-[8px] gap-[4px] hover:scale-105 transition duration-300 rounded-lg">
            <button onClick={() => alert("sort entries")}>
              <img src={btn2} alt="" />
            </button>
          </div>
          <div className="btn3  w-[80px] h-[36px] rounded-[6px] pt-[8px] pr-[12px] pb-[8px] pl-[8px] gap-[4px] hover:scale-105 transition duration-300 rounded-lg">
            <button onClick={() => alert("apply filter")}>
              <img src={btn3} alt="" />
            </button>
          </div>
          <div className="btn4  w-[105px] h-[36px] rounded-[6px] pt-[8px] pr-[12px] pb-[8px] pl-[8px] gap-[4px] hover:scale-105 transition duration-300 rounded-lg">
            <button onClick={() => alert("")}>
              <img src={btn4} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="right-content flex flex-row items-center w-[437px] h-[36px] gap-[8px] ml-3">
        <div className="fun-btn flex flex-row w-[279px] h-[36px] gap-[8px] ml-2 ">
          <button
            onClick={() => alert("import a file")}
            className="transition duration-300 rounded-sm rounded-lg hover:bg-gray-400 hover:scale-105"
          >
            <img src={btn5} alt="" />
          </button>
          <button
            onClick={() => alert("export a file")}
            className="transition duration-300 rounded-sm rounded-lg hover:bg-gray-400 hover:scale-105"
          >
            <img src={btn6} alt="" />
          </button>
          <button
            onClick={() => alert("share spreadsheet")}
            className="transition duration-300 rounded-sm rounded-lg hover:bg-gray-400 hover:scale-105"
          >
            <img src={btn7} alt="" />
          </button>
        </div>

        <button
          className="bg-[#4B6A4F] rounded-[6px] w-[150px] h-[36px] pr-[24px] pl-[24px] ml-2 hover:scale-105 transition duration-300 rounded-lg"
          onClick={() => alert("take new action")}
        >
          <img src={btn} />
        </button>
      </div>
    </div>
  );
};
