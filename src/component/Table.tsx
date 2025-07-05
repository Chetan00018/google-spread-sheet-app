import arrow1 from "../assets/Arrow Split (1).png";
import arrow_split from "../assets/Arrow Split.png";
import arrow_sync from "../assets/Arrow Sync.png";
import briefcase from "../assets/Briefcase.png";
import calender from "../assets/Calendar.png";
import chevoron_circle from "../assets/Chevron Circle (1).png";
import dropdown from "../assets/Dropdown.png";
import globe from "../assets/Globe.png";
import link from "../assets/Link.png";
import person from "../assets/Person.png";
import shape2 from "../assets/Shape (2).png";
export const Table = () => {
  return (
    <div>
      <div className="w-[1440px] h-[840px] bg-[#F6F6F6]  ">
        <table className="w-full ">
          <thead className="h-[32px]  hover:border-black">
            <tr>
              <th className="p-2 bg-white border w-[38px]"></th>
              <th className="p-2  border bg-[#E2E2E2] w-[256px] " colSpan={4}>
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-row items-center gap-4 rounded-[4px] h-[24px] p-[4px] bg-[#EEEEEE]  w-[158px]">
                    <span>
                      <img src={link} alt="" />
                    </span>
                    <span className="text-xs font-normal text-[#]">
                      Q3Financial overview
                    </span>
                  </div>
                  <span>
                    <img src={arrow_sync} alt="" />
                  </span>
                </div>
              </th>
              <th className="p-2 bg-white border w-[124px]"></th>
              <th className="p-2  border bg-[#D2E0E4] w-[124px]">
                <div className="flex flex-row items-center gap-[7px] p-[2px]">
                  <span className="h=[16px] w-[16px]">
                    <img src={arrow_split} alt="" />
                  </span>
                  <span className="text-[14px] font-normal text-[#505450]">
                    ABC...
                  </span>
                </div>
              </th>
              <th className="p-2  border bg-[#DCCFFC] w-[251px]" colSpan={2}>
                <div className="flex flex-row items-center gap-[7px] p-[2px]">
                  <span className="h=[16px] w-[16px]">
                    <img src={arrow1} alt="" />
                  </span>
                  <span className="text-[14px] font-normal text-[#463E59]">
                    Answer a Question ...
                  </span>
                </div>
              </th>
              <th className="p-2  border bg-[#FAC2AF]  w-[124px]">
                <div className="flex flex-row items-center gap-[7px] p-[2px]">
                  <span className="h=[16px] w-[16px]">
                    <img src={arrow1} alt="" />
                  </span>
                  <span className="text-[14px] font-normal text-[#695149]">
                    Extract
                  </span>
                </div>
              </th>
              <th className="p-2 border bg-[#CBCBCB]  w-[124px]">+</th>
            </tr>
          </thead>

          <thead className="h-[32px]">
            <tr>
              <th className="p-2  bg-[#EEEEEE] border w-[38px]">#</th>
              <th className="p-2  border bg-[#EEEEEE] w-[256px] ">
                <div className=" flex flex-row items-center h-[16px] gap-[4px]">
                  <span>
                    <img src={briefcase} alt="" />
                  </span>
                  <span className="text-xs font-normal text-[#463E59]">
                    job Request
                  </span>
                </div>
              </th>

              <th className="p-2  bg-[#EEEEEE] border w-[124px]">
                <div className=" flex flex-row items-center h-[16px] gap-[4px]">
                  <span>
                    <img src={calender} alt="" />
                  </span>
                  <span className="text-xs font-normal text-[#463E59]">
                    Submitted
                  </span>
                  <span>
                    <img src={dropdown} alt="" />
                  </span>
                </div>
              </th>

              <th className="p-2 bg-[#EEEEEE] border w-[124px]">
                <div className=" flex flex-row items-center justify-between h-[16px] gap-[4px]">
                  <div className="flex flex-row gap-[4px]">
                    <span>
                      <img src={chevoron_circle} alt="" />
                    </span>
                    <span className="text-xs font-normal text-[#463E59]">
                      Status
                    </span>
                  </div>
                  <span>
                    <img src={dropdown} alt="" />
                  </span>
                </div>
              </th>

              <th className="p-2 bg-[#EEEEEE] border w-[124px]">
                <div className=" flex flex-row items-center justify-between h-[16px] gap-[4px] pl-[4px] pr-[4px]">
                  <div className="flex flex-row gap-[4px]">
                    <span>
                      <img src={person} alt="" />
                    </span>
                    <span className="text-xs font-normal text-[#463E59]">
                      Submitter
                    </span>
                  </div>
                  <span>
                    <img src={dropdown} alt="" />
                  </span>
                </div>
              </th>

              <th className="p-2 bg-[#EEEEEE] border w-[124px]">
                <div className=" flex flex-row items-center justify-between h-[16px] gap-[4px] pl-[4px] pr-[4px]">
                  <div className="flex flex-row gap-[4px]">
                    <span>
                      <img src={globe} alt="" />
                    </span>
                    <span className="text-xs font-normal text-[#463E59]">
                      URL
                    </span>
                  </div>
                  <span>
                    <img src={dropdown} alt="" />
                  </span>
                </div>
              </th>

              <th className="p-2 bg-[#E8F0E9] border w-[124px]">
                <div className=" flex flex-row items-center  h-[16px] gap-[6px] pl-[4px] pr-[4px]">
                  <span>
                    <img src={shape2} alt="" />
                  </span>
                  <span className="text-xs font-normal text-[#463E59]">
                    Assigned
                  </span>
                </div>
              </th>

              <th className="p-2 bg-[#EAE3FC] border w-[124px]">
                <div className=" flex flex-row items-center  h-[16px] gap-[6px] pl-[4px] pr-[4px]">
                  <span className="text-xs font-normal text-[#463E59]">
                    priority
                  </span>
                </div>
              </th>

              <th className="p-2 bg-[#EAE3FC] border w-[124px]">
                <div className=" flex flex-row items-center  h-[16px] gap-[6px] pl-[4px] pr-[4px]">
                  <span className="text-xs font-normal text-[#463E59]">
                    Due Date
                  </span>
                </div>
              </th>

              <th className="p-2 bg-[#FAC2AF] border w-[124px]">
                <div className=" flex flex-row items-center  h-[16px] gap-[6px] pl-[4px] pr-[4px]">
                  <span className="text-xs font-normal text-[#463E59]">
                    Est.Value
                  </span>
                </div>
              </th>
              <th className="p-2 bg-white border "></th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-[13px] ">
              <td className="p-2 bg-white border "> 1</td>
              <td className="p-2 bg-white border">
                Launch social media campaign pro...
              </td>
              <td className="p-2 bg-white border pl-9">15-11-2024</td>
              <td className="p-2 bg-white border pl-7">
                <span className="rounded-lg bg-[#85640B] p-[3px]">
                  In -Process
                </span>
              </td>
              <td className="p-2 bg-white border">Aisha Patel</td>
              <td className="p-2 bg-white border">www.aishapatel....</td>
              <td className="p-2 bg-white border">Sophie choudhari</td>
              <td className="p-2 pl-8 bg-white border text-[#85640B]">
                Medium
              </td>
              <td className="p-2 bg-white border pl-9">20-11-2024</td>
              <td className="p-2 bg-white border pl-9">6,200,000₹</td>
              <td className="p-2 bg-white border"></td>
            </tr>

            <tr className="text-[13px]">
              <td className="p-2 bg-white border"> 2</td>
              <td className="p-2 bg-white border ">
                Update press kit for company redesign
              </td>
              <td className="p-2 bg-white border pl-9">10-11-2024</td>
              <td className="p-2 pl-6 bg-white border ">
                <span className="rounded-lg bg-[#FF5733] p-[3px]">
                  Need to start
                </span>
              </td>
              <td className="p-2 bg-white border">Irfan Khan</td>
              <td className="p-2 bg-white border">www.irfankhan....</td>
              <td className="p-2 bg-white border">tejas pandey</td>
              <td className="p-2 pl-8 bg-white border text-[#FF5733]">High</td>
              <td className="p-2 bg-white border pl-9">15-11-2024</td>
              <td className="p-2 bg-white border pl-9">4,200,000₹</td>
              <td className="p-2 bg-white border"></td>
            </tr>

            <tr className="text-[13px]">
              <td className="p-2 bg-white border"> 3</td>
              <td className="p-2 bg-white border ">
                finalize user testing feedback for app...
              </td>
              <td className="p-2 bg-white border pl-9">23-07-2024</td>
              <td className="p-2 bg-white border pl-7">
                <span className="rounded-lg bg-[#85640B] p-[3px]">
                  In -Process
                </span>
              </td>
              <td className="p-2 bg-white border">ram gore</td>
              <td className="p-2 bg-white border">www.ramgore....</td>
              <td className="p-2 bg-white border">pankaj choudhari</td>
              <td className="p-2 pl-8 bg-white border text-[#85640B] ">
                Medium
              </td>
              <td className="p-2 bg-white border pl-9">28-07-2024</td>
              <td className="p-2 bg-white border pl-9">4,750,000₹</td>
              <td className="p-2 bg-white border"></td>
            </tr>

            <tr className="text-[13px]">
              <td className="p-2 bg-white border"> 4</td>
              <td className="p-2 bg-white border ">
                prepare fincial report for q4...
              </td>
              <td className="p-2 bg-white border pl-9">05-10-2024</td>
              <td className="p-2 bg-white border pl-7">
                <span className="rounded-lg bg-[#475569] p-[3px]">
                  completed
                </span>
              </td>
              <td className="p-2 bg-white border">prathmesh kale</td>
              <td className="p-2 bg-white border">www.prathmeshkale....</td>
              <td className="p-2 bg-white border">vaibhav jain</td>
              <td className="p-2 pl-8 bg-white border text-[#475569]">Low</td>
              <td className="p-2 bg-white border pl-9">10-10-2024</td>
              <td className="p-2 bg-white border pl-9">2,800,000₹</td>
              <td className="p-2 bg-white border"></td>
            </tr>
            <tr>
              <td className="p-2 bg-white border">5</td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
            </tr>

            <tr>
              <td className="p-2 bg-white border">6</td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
            </tr>

            <tr>
              <td className="p-2 bg-white border">7</td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
            </tr>

            <tr>
              <td className="p-2 bg-white border">8</td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
            </tr>

            <tr>
              <td className="p-2 bg-white border">9</td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
            </tr>
            <tr>
              <td className="p-2 bg-white border">10</td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
            </tr>

            <tr>
              <td className="p-2 bg-white border">11</td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
            </tr>

            <tr>
              <td className="p-2 bg-white border">12</td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
            </tr>

            <tr>
              <td className="p-2 bg-white border">13</td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
            </tr>

            <tr>
              <td className="p-2 bg-white border"> 14</td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
            </tr>

            <tr>
              <td className="p-2 bg-white border h-[32px]">15</td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
            </tr>

            <tr>
              <td className="p-2 bg-white border">16</td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
            </tr>

            <tr>
              <td className="p-2 bg-white border">17</td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
            </tr>
            <tr>
              <td className="p-2 bg-white border">18</td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
            </tr>
            <tr>
              <td className="p-2 bg-white border">19</td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
              <td className="p-2 bg-white border"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
