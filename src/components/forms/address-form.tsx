import React, { FC } from "react";
import { FormikValues } from "formik";

import { InputField, SelectField, CheckboxField } from "../common";
import { Grid, Typography } from "@material-ui/core";

interface PropsType {
  formField: FormikValues;
}

const AddressForm: FC<PropsType> = (props) => {
  const {
    formField: {
      firstName,
      lastName,
      email,
      phoneNumber,
      address1,
      address2,
      city,
      state,
      zipcode,
      country,
      useAddressForPaymentDetails,
    },
  } = props;

  return (
    <>
      <Typography>Shipping address</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: firstName.name,
              label: firstName.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: lastName.name,
              label: lastName.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: phoneNumber.name,
              label: phoneNumber.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: email.name,
              label: email.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            defaultProps={{
              name: address1.name,
              label: address1.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            defaultProps={{
              name: address2.name,
              label: address2.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            defaultProps={{
              name: zipcode.name,
              label: zipcode.label,
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
        </Grid>
      </Grid>
    </>
  );
};

const cities = [
  {
    value: "",
    label: "None",
  },
  {
    value: "1",
    label: "New York",
  },
  {
    value: "2",
    label: "Chicago",
  },
  {
    value: "3",
    label: "Saigon",
  },
];

const states = [
  {
    value: "",
    label: "None",
  },
  {
    value: "11",
    label: "Florida",
  },
  {
    value: "22",
    label: "Michigan",
  },
  {
    value: "33",
    label: "Texas",
  },
];

const countries = [
  {
    value: "",
    label: "None",
  },
  {
    value: "111",
    label: "United States",
  },
  {
    value: "222",
    label: "Italy",
  },
  {
    value: "333",
    label: "Vietnam",
  },
];

export default AddressForm;
