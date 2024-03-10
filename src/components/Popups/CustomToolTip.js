import React from 'react';
import './reactTooltip.scss';

const CustomTooltip = ({ content }) => {
  const contentArray = [...content];
  let displayContent = contentArray;
  if (contentArray.length > 2) {
    displayContent = contentArray.slice(0, 2);
  }
  return (
    <div className="tooltip-container">
      <span className="tooltip" style={{ textAlign: contentArray.length <= 1 ? 'center' : '', width: contentArray.length <= 1 ? 'fit-content' : '' }}>
        {contentArray?.map((item, index) => (
          <React.Fragment key={index}>
            <div>{item?.trim()}{contentArray.length > 1 && contentArray.length - 1 !== index && !item?.includes(',') && <span>,&nbsp;</span>}</div>
          </React.Fragment>
        ))}
      </span>
      {displayContent?.map((item, index) => (
        <div key={index}>{item?.trim()}</div>
      ))}
      {contentArray.length > 2 && <div>{contentArray.length > 2 && <span>{contentArray.length - 2}</span>}+ more...</div>}
    </div>
  );
};

export default CustomTooltip;
