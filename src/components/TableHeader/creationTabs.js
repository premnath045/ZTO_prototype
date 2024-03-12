import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function IdentityCreationTabs({openModal}) {
  return (
    <div className="flex gap-0 pr-20 text-sm font-medium whitespace-nowrap border-b border-solid border-slate-300 text-slate-400 max-md:flex-wrap max-md:pr-5">
      <div className="flex flex-col justify-center px-4 py-3 bg-white text-neutral-600">
        <div className="flex gap-2.5 justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f66d8c8cfcfb0520cfaa17f860738f1535c8a3752c3dafca2ef7a9a9913f2b1?"
            className="shrink-0 my-auto aspect-square w-[18px]"
          />
          <div className="grow">Compare Devices</div>
        </div>
      </div>
      <div onClick={openModal} className="flex flex-col justify-center px-4 py-3 bg-white">
        <div className="flex gap-2.5 justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c9e0c77d809c82a5262982b135d79cc978e17abe949d673d54b9a91fb44afdd?"
            className="shrink-0 my-auto aspect-square w-[18px]"
          />
          <div className="grow">Manual Creation</div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-4 py-3 bg-white">
        <div className="flex gap-2.5 justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e2c89fda7706d22155daabd0fe3b96d38679458750b087770383680b26d6fbe?"
            className="shrink-0 my-auto aspect-square w-[18px]"
          />
          <div className="grow">Automated Generation</div>
        </div>
      </div>
    </div>
  );
}

export default IdentityCreationTabs;


