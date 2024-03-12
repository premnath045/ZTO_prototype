// import React, {useEffect, useState} from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup'; // For form validation (optional)

// function ManualCreationPopup({showModal, closeModal, mapSearch}) {

//   const [selectedFilters, setSelectedFilters] = useState([]); 

//   // Select handler
//   const handleSelect = (filter) => {
//     setSelectedFilters(prev => ({...prev, [filter]: true})); 
//   }

//   return (
//     <Formik
//       initialValues={{
//         deviceName: 'SCALANCE XM 400 L3',
//         articleNumber: '65GK5 615-0AA-2AA2',
//         systemName: '',
//         automationName: '',
//         deviceCategory: '',
//         deviceType: 'SCALANCE XM 400 L3', // Pre-filled
//         vendor: 'Siemens AG', // Pre-filled
//         macAddressInternal: '',
//         macAddressExternal: ''
//       }}
//       validationSchema={Yup.object({
//         // Add validation rules for each field as needed:
//         systemName: Yup.string().required('Required'),
//         automationName: Yup.string().required('Required'),
//         // ... add other validation rules
//       })}
//       onSubmit={(values, { setSubmitting }) => {
//         console.log(values); // Access form data
//         setSubmitting(false);
//         // Handle submission (e.g., send data to server)
//       }}
//     >
//       {({ isSubmitting }) => (
//         <div className="flex w-screen h-screen fixed left-0 top-0 justify-center items-center px-16 py-20 font-medium bg-neutral-700 bg-opacity-40 max-md:px-5"> 
//           <div className="flex flex-col justify-center px-7 py-8 max-w-full bg-white w-[756px] max-md:px-5 max-md:mt-10">

//             {/* Form Header */}
            // <div className="flex flex-col pb-5 border-b border-stone-300 max-md:max-w-full"> 
            //   <div className="flex justify-between items-center px-5 py-3.5 text-xl bg-slate-300 text-zinc-800 max-md:flex-wrap max-md:pr-5 max-md:max-w-full"> 
            //     <div>Identity Creation Portal</div>
            //     <button onClick={closeModal}> 
            //       <img
            //         loading="lazy"
            //         src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e2a0fa2e40343135972d984096d4f62924f2e3e6dd5feb20ce0bc49bf18c289?"
            //         className="shrink-0 self-start w-7 aspect-square"
            //         alt="Close Form"
            //       />
            //     </button> 
            //   </div>

//                {/* ... (Search Guidance Section) */} 
//             </div>

//             {/* Main Form Content */}
//             <Form>

//               {/* (Device Details Section) */} 
//                 <div className="flex gap-8 mt-5">
//                     <div className="flex-1">
//                         <div className="mt-3">  
//                             <label htmlFor="deviceName" className="block text-sm font-medium">Device Name</label>
//                             <Field type="text" name="deviceName" id="deviceName" value="SCALANCE XM 400 L3" disabled className="border border-stone-300 px-2" />
//                         </div>
//                         <div className="mt-3">
//                             <label htmlFor="articleNumber" className="block text-sm font-medium">Article Number</label>
//                             <Field type="text" name="articleNumber" id="articleNumber" value="65GK5 615-0AA-2AA2" disabled className="border border-stone-300 px-2" />
//                         </div>
//                         <div className="mt-3">
//                             <label htmlFor="systemName" className="block text-sm font-medium">System Name</label>
//                             <Field type="text" name="systemName" id="systemName" className="border border-stone-300 px-2" /> 
//                             <ErrorMessage name="systemName" component="div" className="text-red-500" /> 
//                         </div>
//                         <div className="mt-3">
//                             <label htmlFor="automationName" className="block text-sm font-medium">Automation Name</label>
//                             <Field type="text" name="automationName" id="automationName" className="border border-stone-300 px-2" />
//                             <ErrorMessage name="automationName" component="div" className="text-red-500" />
//                         </div>
//                         <div className="mt-3">
//                             <label htmlFor="deviceCategory" className="block text-sm font-medium">Device Category</label>
//                             <Field as="select" name="deviceCategory" id="deviceCategory" className="border border-stone-300 px-2">
//                                 <option value=""> -- Select a category -- </option> 
//                                 {/* Add more options as needed */}
//                                 <option value="network">Network</option>
//                                 <option value="firewall">Firewall</option>
//                                 {/* ... other options */}
//                             </Field>
//                             <ErrorMessage name="deviceCategory" component="div" className="text-red-500" />
//                         </div>
//                     </div>

//                     <div className="flex-1">
//                         <div className="mt-3">
//                             <label htmlFor="deviceType" className="block text-sm font-medium">Device Type</label>
//                             <Field 
//                             type="text" 
//                             name="deviceType" 
//                             id="deviceType" 
//                             disabled 
//                             value="SCALANCE XM 400 L3" 
//                             className="border border-stone-300 px-2" 
//                             />
//                         </div>
//                         <div className="mt-3">
//                             <label htmlFor="vendor" className="block text-sm font-medium">Vendor</label>
//                             <Field 
//                             type="text" 
//                             name="vendor" 
//                             id="vendor" 
//                             disabled 
//                             value="Siemens AG" 
//                             className="border border-stone-300 px-2" 
//                         />
//                         </div>
//                         <div className="mt-3">
//                             <label htmlFor="macAddressInternal" className="block text-sm font-medium">MAC Address (Internal)</label>
//                             <Field 
//                             type="text" 
//                             name="macAddressInternal" 
//                             id="macAddressInternal" 
//                             className="border border-stone-300 px-2" 
//                             />
//                             <ErrorMessage name="macAddressInternal" component="div" className="text-red-500" />
//                         </div>
//                         <div className="mt-3">
//                             <label htmlFor="macAddressExternal" className="block text-sm font-medium">MAC Address (External)</label>
//                             <Field 
//                             type="text" 
//                             name="macAddressExternal" 
//                             id="macAddressExternal" 
//                             className="border border-stone-300 px-2" 
//                         />
//                             <ErrorMessage name="macAddressExternal" component="div" className="text-red-500" />
//                         </div>
//                     </div>
                    
//                 </div>

//               {/* (Device Details Section) */} 
//               <div className="mt-5">
//                 <h2>Network Details</h2>
//                  {/* ... (Network Details Fields) */}
//               </div>

//               {/* Buttons */}
//               <div className="button-container mt-5"> 
//                 <button type="button" disabled={isSubmitting}>Back</button>
//                 <button type="submit" disabled={isSubmitting}>Proceed</button>
//               </div>
//             </Form>
//           </div>
//         </div>
//       )}
//     </Formik>
//   );

// };



import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';

import AddressForm from '../Forms/AddressForm';
import PaymentForm from '../Forms/PaymentForm';
// import CheckoutSuccess from './CheckoutSuccess';

import validationSchema from '../FormModel/validationSchema';
import checkoutFormModel from '../FormModel/checkoutFormModel';
import formInitialValues from '../FormModel/formInitialValues';

import useStyles from './styles';

const steps = ['Descriptive Attributes ', 'Dynamic Attributes ', 'Certificate Signature'];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;
    case 1:
      return <PaymentForm formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

function ManualCreationPopup({closeModal}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
        <div className ="flex w-screen h-screen fixed left-0 top-0 justify-center items-center px-16 py-20 font-medium bg-neutral-700 bg-opacity-40 max-md:px-5">
            <div className ="flex flex-col justify-center px-7 py-8 max-w-full bg-white w-[756px] max-md:px-5 max-md:mt-10">
                <div className="flex flex-col pb-5 border-b border-stone-300 max-md:max-w-full"> 
                    <div className="flex justify-between items-center px-5 py-3.5 text-xl bg-slate-300 text-zinc-800 max-md:flex-wrap max-md:pr-5 max-md:max-w-full"> 
                        <div>Identity Creation Portal</div>
                        <button onClick={closeModal}> 
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e2a0fa2e40343135972d984096d4f62924f2e3e6dd5feb20ce0bc49bf18c289?"
                            className="shrink-0 self-start w-7 aspect-square"
                            alt="Close Form"
                        />
                        </button> 
                    </div>
                </div>    
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
                <React.Fragment>
                    {activeStep === steps.length ? (
                    {/* <CheckoutSuccess /> */}
                    ) : (
                    <Formik
                        initialValues={formInitialValues}
                        validationSchema={currentValidationSchema}
                        onSubmit={_handleSubmit}
                    >
                        {({ isSubmitting }) => (
                        <Form id={formId}>
                            {_renderStepContent(activeStep)}

                            <div className={classes.buttons}>
                            {activeStep !== 0 && (
                                <Button onClick={_handleBack} className={classes.button}>
                                Back
                                </Button>
                            )}
                            <div className={classes.wrapper}>
                                <Button
                                disabled={isSubmitting}
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                {isLastStep ? 'Place order' : 'Next'}
                                </Button>
                                {isSubmitting && (
                                <CircularProgress
                                    size={24}
                                    className={classes.buttonProgress}
                                />
                                )}
                            </div>
                            </div>
                        </Form>
                        )}
                    </Formik>
                    )}
                </React.Fragment>
            </div>
        </div>
    </React.Fragment>
  );
}




export default  ManualCreationPopup;
 