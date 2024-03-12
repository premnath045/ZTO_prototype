import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../FormFields';


const deviceCategories = [
  {
    value: null,
    label: 'Router'
  },
  {
    value: '111',
    label: 'Switch'
  },
  {
    value: '222',
    label: 'Firewall'
  },
  {
    value: '333',
    label: 'PLC'
  }
];

function AddressForm(props) {
  const {
    formField: {
      deviceName,
      deviceType,
      articleNumber,
      vendor,
      serialNumber,
      hierarchicalName,
      deviceCategory
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Descriptive Attributes 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={deviceName.name} label={deviceName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={deviceType.name} label={deviceType.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={articleNumber.name} label={articleNumber.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={vendor.name} label={vendor.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={serialNumber.name} label={serialNumber.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={hierarchicalName.name} label={hierarchicalName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={deviceCategory.name}
            label={deviceCategory.label}
            data={deviceCategories}
            fullWidth
          />
        </Grid>
        
        {/* <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={useAddressForPaymentDetails.name}
            label={useAddressForPaymentDetails.label}
          />
        </Grid> */}

      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;
