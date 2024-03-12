import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    deviceName,
    deviceType,
    articleNumber,
    vendor,
    serialNumber,
    hierarchicalName,
    deviceCategory,

    certificateSerialNumber,
    certificateTemplateName,
    creationTimestamp,
    expiryDate,
    uniqueCertificateNumber
  }
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [deviceName.name]: Yup.string().required(`${deviceName.requiredErrorMsg}`),
    [deviceType.name]: Yup.string().required(`${deviceType.requiredErrorMsg}`),
    [articleNumber.name]: Yup.string().required(`${articleNumber.requiredErrorMsg}`),
    [vendor.name]: Yup.string().required(`${vendor.requiredErrorMsg}`),
    [serialNumber.name]: Yup.string().required(`${serialNumber.requiredErrorMsg}`),
    [hierarchicalName.name]: Yup.string().required(`${hierarchicalName.requiredErrorMsg}`),
    [deviceCategory.name]: Yup.string().required(`${deviceCategory.requiredErrorMsg}`),

    
    // [zipcode.name]: Yup.string()
    //   .required(`${zipcode.requiredErrorMsg}`)
    //   .test(
    //     'len',
    //     `${zipcode.invalidErrorMsg}`,
    //     val => val && val.length === 5
    //   ),
    // [country.name]: Yup.string()
    //   .nullable()
    //   .required(`${country.requiredErrorMsg}`)
  }),
  Yup.object().shape({
    [certificateSerialNumber.name]: Yup.string().required(`${certificateSerialNumber.requiredErrorMsg}`),

    [certificateTemplateName.name]: Yup.string()
      .required(`${certificateTemplateName.requiredErrorMsg}`),
    //   .matches(visaRegEx, cardNumber.invalidErrorMsg),

    [creationTimestamp.name]: Yup.string()
      .nullable()
      .required(`${creationTimestamp.requiredErrorMsg}`)
      .test('createDate', creationTimestamp.invalidErrorMsg, val => {
        if (val) {
          const startDate = new Date();
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      }),


    [expiryDate.name]: Yup.string()
      .nullable()
      .required(`${expiryDate.requiredErrorMsg}`)
      .test('expDate', expiryDate.invalidErrorMsg, val => {
        if (val) {
          const startDate = new Date();
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      }),
    [uniqueCertificateNumber.name]: Yup.string()
      .required(`${uniqueCertificateNumber.requiredErrorMsg}`)
      .test('len', `${uniqueCertificateNumber.invalidErrorMsg}`, val => val && val.length === 3)
  })
];
