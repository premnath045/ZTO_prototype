import React from 'react';

function ToastPopup({toastHead,toastBody,toastFooter}) {
  return (
    <div className="bg-black/25 w-full h-screen overflow-y-auto scrollBar flex z-[999]">
      <div className="overlay bg-transparent w-full h-full absolute top-0 left-0"></div>
      <div className="tostCard bg-white rounded-2xl shadow-md p-4 space-y-2 m-auto max-w-sm w-full max-h-fit overflow-y-auto relative z-10" >
        <div className="toastHead">{toastHead}</div>
        <div className="toastBody">{toastBody}</div>
        <div className="toastFooter">{toastFooter}</div>
      </div>
    </div>
  );
}

export default ToastPopup;
