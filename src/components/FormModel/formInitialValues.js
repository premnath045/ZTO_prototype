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

export default {
  [deviceName.name]: '',
  [deviceType.name]: '',
  [articleNumber.name]: '',
  [vendor.name]: '',
  [serialNumber.name]: '',
  [hierarchicalName.name]: '',
  [deviceCategory.name]: '',

  [certificateSerialNumber.name]: '',
  [certificateTemplateName.name]: '',
  [creationTimestamp.name]: '',
  [expiryDate.name]: '',
  [uniqueCertificateNumber.name]: ''
};
