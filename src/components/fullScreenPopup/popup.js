import React, {useEffect, useState} from 'react';

function FullviewPopupModal({showModal, closeModal}) {
  return (
    <div className="flex w-screen h-screen fixed left-0 top-0 justify-center items-center px-16 py-20 font-medium bg-neutral-700 bg-opacity-40 max-md:px-5">
      <div className="flex flex-col justify-center px-7 py-8 max-w-full bg-white w-[756px] max-md:px-5 max-md:mt-10">
        <div className="flex flex-col pb-5 border border-solid border-stone-300 max-md:max-w-full">
          <div className="flex gap-5 justify-between px-5 py-3.5 text-xl bg-slate-300 text-zinc-800 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="flex-auto">Search Identity Certificates</div>

            <button onClick={closeModal}>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e2a0fa2e40343135972d984096d4f62924f2e3e6dd5feb20ce0bc49bf18c289?"
                    className="shrink-0 self-start w-7 aspect-square"
                />
            </button>
            
          </div>
          <div className="flex flex-col justify-center py-2.5 pr-6 pl-2.5 mx-5 mt-4 text-sm border border-solid border-stone-300 text-neutral-400 max-md:pr-5 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-2.5 max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/42fed38fae2644931a20dd4d23a9ed9ebe110ceabc6b4dec16e74b555d241263?"
                className="shrink-0 self-start aspect-square w-[18px]"
              />
              <div className="flex-auto max-md:max-w-full">
                Search existing certificates based on any one of the below
                network scan parameters.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 justify-between content-start pr-3.5 mx-5 mt-8 text-base text-black max-md:mr-2.5">
            <div className="flex gap-2.5 p-4 bg-stone-50">
                <input className="shrink-0 w-5 aspect-square" type="checkbox"/>
                <div className="flex-auto">IP Address</div>
            </div>
            <div className="flex gap-2.5 p-4 bg-stone-50">
                <input className="shrink-0 w-5 aspect-square" type="checkbox"/>
                <div className="flex-auto">MAC Address</div>
            </div>
            <div className="flex gap-2.5 p-4 whitespace-nowrap bg-stone-50">
                <input className="shrink-0 w-5 aspect-square" type="checkbox"/>
            <div className="grow">Serial Number</div>
            </div>
          </div>
          <div /*onClick={mapSearch}*/ className="justify-center self-end px-10 py-2.5 mt-20 mr-5 text-sm text-center text-white whitespace-nowrap bg-slate-400 max-md:px-5 max-md:mt-10 max-md:mr-2.5">
            Search
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullviewPopupModal;
 