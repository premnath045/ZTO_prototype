import React from 'react';
import { Link } from 'react-router-dom';
import './simpleButton.css';

function SimpleButton({title, icon, altText, link, buttonType, buttonFunction, href, onClickEvent, toggle}) {

  const getClassName = () => {
    const classNameVariant = {
      primary: 'primary',
      primaryUnfilled: 'primary-unfilled',
      secondary: 'secondary',
      secondaryUnfilled: 'secondary-unfilled'
    };

    return classNameVariant[buttonType];
  };

  return (
    <>
      { buttonFunction == 'link' &&
        <Link to={link || ''} onClick={onClickEvent} className={`simple-button ${getClassName()}`}>
          {icon && <img src={icon} alt={altText} className='simple-button-icon'/>}
          {title}
        </Link>
      }
      { buttonFunction == 'openModal' &&
          <button className={`simple-button ${getClassName()}`} href={href}  data-bs-toggle={toggle} onClick={onClickEvent}>
            {icon && <img src={icon} alt={altText} className='simple-button-icon'/>}
            {title}
          </button>
      }
      { !buttonFunction &&
          <button className={`simple-button ${getClassName()}`} href={href}  data-bs-toggle={toggle} onClick={onClickEvent}>
            {icon && <img src={icon} alt={altText} className='simple-button-icon'/>}
            {title}
          </button>
      }

    </>

  );
}

export default SimpleButton;