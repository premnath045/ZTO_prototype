import React from 'react';
import { InputErrorMessage } from '../../errorMessages';
import './basicInput.css';

function BasicInput({labelText, placeholderText, inputType, fieldName, fieldValue, required, errorTouchedField, errorMessageField, onChangeFunction }) {
  return (
    <div className='basic-input'>
      <label className='basic-input-form-label'>
        {labelText}{required && <span className='text-danger'> *</span>}
      </label>
      <input
        onChange={onChangeFunction}
        value={fieldValue}
        type={inputType}
        className={Boolean(errorTouchedField) && Boolean(errorMessageField) ? 'form-control border-danger' : 'basic-input-form-input'}
        placeholder={placeholderText}
        name={fieldName}
      />
      <InputErrorMessage error={errorTouchedField && errorMessageField} marginBottom={-5} />
    </div>
  );
}

export default BasicInput;