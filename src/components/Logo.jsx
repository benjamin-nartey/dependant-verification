import CocobodLogo from "@/assets/logo-cocobod.png";

export default function Logo() {
  return (
    <div className="flex justify-start items-center gap-2 mb-[4rem]">
      <img src={CocobodLogo} alt="logo" width={50} height={50} />

      <div className=" w-[1.7px] h-[20px] bg-[#552808]"></div>

      <div className=" text-[28px] text-[#552808] font-semibold">
        Ghana Cocoa Board
      </div>
    </div>
  );
}
