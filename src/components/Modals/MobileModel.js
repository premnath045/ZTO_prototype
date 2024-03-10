import React from "react";

function MobileModel({
  MobileModelHeader,
  MobileModelBody,
  MobileModelFooter,
  popupCloseFunction,
}) {
  return (
    <div className="fixed top-0 left-0 w-full min-h-screen bg-black/25">
      <div
        className="bg-transparent w-full h-full absolute top-0 left-0"
        onClick={popupCloseFunction}
      ></div>
      <div className="modelContainer max-h-[90%] w-full bg-white rounded-tr-3xl rounded-tl-3xl p-4 absolute bottom-0">
        <div className="modelHead">
          <div className="w-1/3 max-w-16 h-1 bg-gray-200 rounded-lg mx-auto mb-4"></div>
          {MobileModelHeader}
        </div>
        <div className="modelBody my-2 py-2">{MobileModelBody}</div>
        <div className="modelFooter">{MobileModelFooter}</div>
      </div>
    </div>
  );
}

export default MobileModel;
