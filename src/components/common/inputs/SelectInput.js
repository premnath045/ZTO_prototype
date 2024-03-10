import React from 'react';
import { InputErrorMessage } from '../../errorMessages';
import Select from 'react-select';

function SelectInput({inputOptions}) {
  return (

    <div className='basic-input'>
      <label className='basic-input-form-label'>
        {labelText}{required && <span className='text-danger'> *</span>}
      </label>
      <Select
        options={inputOptions}
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


export default SelectInput;