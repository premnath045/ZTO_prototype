import React, {useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import './modals.css';

function SimplePrintModal({children, onClickEvent, modalWidth}) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Mash Brief'
  });

  return (
    <>
      <div className="simple-modal">
        <div className="simple-modal-overlay" onClick={onClickEvent}></div>
        <div className="pdf-simple-modal-content" style={{width: `${modalWidth}`}} >
          <div className='pdf-simple-modal-header'>
            <button className="close-simple-modal" onClick={onClickEvent}>
              Cancel
            </button>
            <button className="print-pdf-simple-modal" onClick={handlePrint}>Export</button>
          </div>
          <div ref={componentRef}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default SimplePrintModal;