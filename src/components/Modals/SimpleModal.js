import React from 'react';
import SimpleButton from '../common/buttons/SimpleButton/SimpleButton';
import alertCircle from '../../Icons/alertCircle.svg';
import './modals.css';

const SimpleModal  = ({children, title, description, closeModal, modalWidth, modalHeight, noDivider, noScroll, isWarning}) =>  {
  
  return (
    <div className="simple-modal" >
      <div className="simple-modal-overlay" onClick={closeModal}></div>
      <div className={`simple-modal-content ${ noScroll ? '' : 'modal-scroll'}`} style={{width: `${modalWidth ? `${modalWidth}` : 'fit-content'}`}} >
          <button className='simple-modal-close' onClick={closeModal} >X</button>
        <div style={{width: `${modalWidth}` || '408px', height: `${modalHeight}` || 'auto'}}>
          <div className='simple-modal-header'>
            {
              isWarning ? 
              <div>
                <img style={{marginBottom: '20px'}} src={alertCircle} />
              </div> : ''
            }
            <h3 className='simple-modal-title'>{title}</h3>
            {
              description && 
            <span className={`simple-modal-description ${noDivider ? '' : 'simple-modal-description-divider'}`}>{description}</span>
            }
            </div>
          <div className='simple-modal-body'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleModal;
