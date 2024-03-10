
import * as yup from 'yup';
import { isValidPhoneNumber } from 'react-phone-number-input';

const URL = /^(?:(?:https?|http|www)\:\/\/)?(?:[a-zA-Z0-9\-]+\.)+(?:(?:[a-zA-Z]{2,4})|(?:[a-zA-Z0-9\-]+))(?:\:[0-9]+)?(?:[a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~])*$/;

export const CreateCompanyValidation = yup.object({
    companyname: yup.string().required('Company Name is required.'),
    companyemail: yup.string().required('Email is required.').email('Invalid email format.'),
    company_phoneno: yup.string().test('validator-custom-name', function (value) {
      if (value) {
        if (!isValidPhoneNumber(value)) {
          return this.createError({
            message: 'Invalid Phone Number',
          });
        } else {
          return true;
        }
      } else {
        return this.createError({
          message: 'Phone Number can\'t be isEmpty',
        });
      }
    }),
    country: yup.string().required('Country is required.'),
    companyloc: yup.string().required('Location is required.'),
    industry:yup.string().required('Industry is required.'),
    region:yup.string().required('Region is required.'),
    type:yup.string().required('Type is required.'),
    websiteLink:yup.string().required('Website Link is required.'),
    notes:yup.string().required('notes is required.'),
  
  });

export  const createInfluencerSchema = yup.object({
  handleId: yup.string().required('This field is required'),
  // Followers: yup.string().required(),
  // Following: yup.string().required(),
  // Platform: yup.string().required(),
});