import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, DatePickerField } from '../FormFields';

export default function PaymentForm(props) {
  const {
    formField: { 
      certificateSerialNumber, 
      certificateTemplateName,
      creationTimestamp, 
      expiryDate, 
      uniqueCertificateNumber, 
    }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dynamic Attributes 
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            name={certificateSerialNumber.name}
            label={certificateSerialNumber.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={certificateTemplateName.name}
            label={certificateTemplateName.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={creationTimestamp.name}
            label={creationTimestamp.label}
            format="MM/yy"
            views={['year', 'month']}
            minDate={new Date()}
            maxDate={new Date('2050/12/31')}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={expiryDate.name}
            label={expiryDate.label}
            format="MM/yy"
            views={['year', 'month']}
            minDate={new Date()}
            maxDate={new Date('2050/12/31')}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={uniqueCertificateNumber.name} label={uniqueCertificateNumber.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
