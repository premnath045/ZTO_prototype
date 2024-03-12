export default {
    formId: 'checkoutForm',
    formField: {
      deviceName: {
        name: 'deviceName',
        label: 'Device name*',
        requiredErrorMsg: 'Device name is required'
      },
      deviceType: {
        name: 'deviceType',
        label: 'Device type*',
        requiredErrorMsg: 'Device type is required'
      },
      articleNumber: {
        name: 'articleNumber',
        label: 'Article Number*',
        requiredErrorMsg: 'Article Number is required'
      },
      vendor: {
        name: 'vendor',
        label: 'vendor Name'
      },
    //   zipcode: {
    //     name: 'zipcode',
    //     label: 'Zipcode*',
    //     requiredErrorMsg: 'Zipcode is required',
    //     invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)'
    //   },
      serialNumber: {
        name: 'serialNumber',
        label: 'Serial Number*',
        requiredErrorMsg: 'Country is required'
      },
      hierarchicalName: {
        name: 'hierarchicalName',
        label: 'Hierarchical Name*',
        requiredErrorMsg: 'Hierarchical Name is required'
      },
      deviceCategory: {
        name: 'deviceCategory',
        label: 'Device Category*',
        requiredErrorMsg: 'Device Category is required'
      },
      certificateSerialNumber: {
        name: 'certificateSerialNumber',
        label: 'Certificate Serial Number*',
        requiredErrorMsg: 'Serial Number is required'
      },
      certificateTemplateName: {
        name: 'certificateTemplateName',
        label: 'Certificate Template Name*',
        requiredErrorMsg: 'Template Name is required',
      },
      creationTimestamp: {
        name: 'creationTimestamp',
        label: 'Creation Timestamp*',
        requiredErrorMsg: 'Creation date is required',
        invalidErrorMsg: 'Creation date is not valid'
      },
      expiryDate: {
        name: 'expiryDate',
        label: 'Expiry date*',
        requiredErrorMsg: 'Expiry date is required',
        invalidErrorMsg: 'Expiry date is not valid'
      },
      uniqueCertificateNumber: {
        name: 'uniqueCertificateNumber',
        label: 'Unique Certificate Number*',
        requiredErrorMsg: 'Certificate Number is required',
      }
    }
  };
  