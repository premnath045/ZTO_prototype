import React, {useEffect, useState} from 'react';


function TableHeader({openModal, totalRows, setSelectedTab}) {
    return (
      <div className="flex gap-5 justify-between px-5 text-center whitespace-nowrap max-md:flex-wrap">
        <div className="flex gap-5 justify-between pt-5 text-base text-zinc-800">
          <div onClick={() => setSelectedTab('discovered')} className="grow justify-center p-2.5 border-t border-r border-l border-gray-100 border-solid bg-zinc-100">
              <span> Discovered devices </span>
              <span className="identitycount">({totalRows})</span>
          </div>
          <div onClick={() => setSelectedTab('identities')} className="grow self-start mt-2.5">
              <span> Device identities </span>
              <span className="identitycount">(10)</span>
          </div>
          <div onClick={() => setSelectedTab('availableidentity')} className="grow self-start mt-2.5">
              <span> Available identities </span>
          </div>
        </div>
        <div className="flex gap-4 my-auto text-sm font-medium">
          <div className="flex gap-1.5 justify-center p-2.5 bg-white border border-solid border-slate-300 text-slate-400">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eba508e3234c53a494faeb88f303ece8993146f58a72c2f4d5939a73d324dda?"
              className="shrink-0 self-start w-5 aspect-square"
            />
            <div className="grow">Synchronize Scan Data</div>
          </div>
          <div className="flex gap-1.5 p-2.5 text-white border-t border-r border-l border-solid bg-slate-500 border-stone-300">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd62b6b36f0466822cb8d8f46cfee9d6e55a7aad47472f7c1c8f19719631a6e1?"
              className="shrink-0 self-start w-5 aspect-square"
            />
            <div onClick={openModal} className="grow">Search Certificates</div>
          </div>
        </div>
      </div>
    );
}

export default TableHeader;

