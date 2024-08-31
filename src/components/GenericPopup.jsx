import ToggleSwitch from "./toggle-switch";

const GenericPopup = ({
    onConfirm = () => {},
    onCancel = () => {},
    paramvalue = "",
  }) => {
    const handleonswitchChange = () => {
      console.log("switch changed");
    };
    return (
      <div className="fixed top-0 left-0 h-dvh w-dvw bg-[#00000070]">
        <div
          style={{
            // boxShadow: "0px 9px 28px 8px #0000000D",
  
            boxShadow:
              "0px 1vw 3vw 0px #00000014, 0px 0.5vw 1vw -0.8vw #0000001F, 0px 1.5vw 5vw 1.3vw #0000000D",
  
            // "boxShadow": "0px 3px 6px -4px #0000001F"
          }}
          className="flex flex-col gap-[2vw] rounded-[3vw] bg-white p-[3vw] w-[17vw] h-[35vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >

          <div className="flex gap-[3vw]">
            <input type="text" value={paramvalue} className="border-[#D9D9D9] rounded right-3 aria-disabled: " />

          </div>
          <div className="flex justify-end gap-[3vw]">
          <ToggleSwitch title="Read Access Only" onChange={()=> handleonswitchChange} />

            <button
              onClick={() => {
                onConfirm();
              }}
             
              className="font-risque rounded-[3vw] border-[0.25vw] border-[#D9D9D9] px-[1vw] py-[0.5vw]"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default GenericPopup;