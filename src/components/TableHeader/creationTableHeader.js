import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';


function CreationTableHeader({openModal, totalRows, setSelectedTab}) {

    const navigate = useNavigate();
  
    const createBtnClick = () => {
      navigate('/identity-creation'); 
    };
  
    return (
      <div className="flex gap-5 justify-between px-5 text-center whitespace-nowrap max-md:flex-wrap">
        <div className="flex gap-5 justify-between pt-5 text-base text-zinc-800">
          <div onClick={() => setSelectedTab('discovered')} className="grow justify-center p-2.5 border-t border-r border-l border-gray-100 border-solid bg-zinc-100">
              <span> New devices </span>
              <span className="identitycount">({totalRows})</span>
          </div>
          <div onClick={() => setSelectedTab('identities')} className="grow self-start mt-2.5">
              <span> Existing identities </span>
              <span className="identitycount">(10)</span>
          </div>
        </div>
      </div>
    );
}

export default CreationTableHeader;

