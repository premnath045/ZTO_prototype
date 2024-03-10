import React from 'react';
import SimpleButton from './SimpleButton/SimpleButton';
import plusIconCircle from '../../../Icons/plusIconCircle.svg';

function AddButton({title, altText, link, buttonType, buttonFunction, href, onClickEvent, toggle}) {
  return (
    <>
      <SimpleButton 
        title={title} 
        icon={plusIconCircle} 
        altText={altText} 
        link={link} 
        buttonType={buttonType} 
        buttonFunction={buttonFunction} 
        href={href} 
        onClickEvent={onClickEvent} 
        toggle={toggle} />
    </>
  );
}

export default AddButton;