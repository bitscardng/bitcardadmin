import SenderChat from "../components/Chat/SenderChat";
import ReceiverChat from "../components/Chat/ReceiverChat";
import Search from "../components/Search";
import ProfileIcon from "../components/ProfileIcon";
import LinkIcon from "../components/LinkIcon";
import { Btn } from "../components/antd/Btn";

const Chat = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="rounded-[44px] max-h-[100vh] bg-[#282C4A] p-[2%] grid grid-cols-[25%_75%] items-end overflow-y-hidden">
      <div className="flex flex-col gap-[0.5rem]">
        <span className="rounded-[10px] bg-[#6C6AEB] flex gap-[0.5rem] items-center justify-between py-[5px] px-[10px]">
          <span className="bg-[#ED1E79] p-[2%] rounded-full text-[#FDFDFD] text-[30px] font-[500]">
            VA
          </span>
          <p className="text-[20px] font-[500] text-[#FDFDFD]">
            Valentine Aninyem
          </p>
        </span>
        <div className="bg-[#D9D9D9]/[20%] p-[2%] rounded-[29px] flex flex-col gap-[0.5rem] items-center">
          <Search onChange={(e) => {}} />
          <div className="overflow-y-scroll max-h-[65vh] relative flex flex-col gap-[0.5rem] items-center">
            {arr.map((e, i) => (
              <div
                key={i}
                className="rounded-[25px] bg-[#282C4A] p-[5px] flex items-start w-[98%] justify-between cursor-pointer"
              >
                <ProfileIcon />
                <span className="text-[14px] font-[500] flex flex-col gap-[0.2rem]">
                  <p className="">xvalzs</p>
                  <p className="text-[#F09654]">view user info &gt;</p>
                </span>
                <span className="flex items-center gap-[0.2rem] px-[2px]">
                  <span className="bg-[#5FC88F] h-[12px] w-[12px] rounded-full"></span>
                  <p className="text-[14px] font-[500] text-white">online</p>
                </span>
              </div>
            ))}
          </div>
          <div className="rounded-[30px] bg-[#0F1122] grid grid-cols-2 p-[5px] w-[98%]">
            <span className="rounded-[25px] bg-[#282C4A] flex items-center justify-center gap-[0.5rem] px-[2px]">
              <span className="bg-[#5FC88F] h-[12px] w-[12px] rounded-full"></span>
              <p className="text-[14px] font-[500] text-white">online 7</p>
            </span>
            <span className="text-[#9395A4] text-center text-[14px] font-[500]">
              Total 120
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between max-h-[75vh]">
        <div className="flex flex-col justify-self-end p-[1%] h[70vh] min-h[80vh] overflow-y-scroll">
          <ReceiverChat
            time={"Sun, Jul 30, 2023 1:44 AM"}
            text={
              "WHat is your plan for the weekend, Will we go to the same place"
            }
          />
          <SenderChat
            time={"Sun, Jul 30, 2023 1:45 AM"}
            text="Hey Adrezza, All Good😊"
          />
          <ReceiverChat
            time={"Sun, Jul 30, 2023 1:44 AM"}
            text={
              "WHat is your plan for the weekend, Will we go to the same place"
            }
          />
          <SenderChat
            time={"Sun, Jul 30, 2023 1:45 AM"}
            text="Hey Adrezza, All Good😊"
          />
        </div>
        <form className="flex self-end justify-between items-center gap-[0.5rem] w-[98%] mx-auto">
          <input
            className="w-full rounded-[20px] p-[10px] text-[#000] bg-[#FDFDFD]"
            placeholder="Message"
          />
          <label
            htmlFor="file"
            className="cursor-pointer bg-[#0F1122] p-[5px] rounded-full"
          >
            <LinkIcon />
          </label>
          <input type="file" id="file" className="hidden" />
          <Btn>send</Btn>
        </form>
      </div>
    </div>
  );
};

export default Chat;
