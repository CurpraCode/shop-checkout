import React from "react";
import { FC } from "react";
import { FormikValues } from "formik";

import { InputField } from "../common";
import { Grid, Typography } from "@material-ui/core";

interface PropsType {
  formField: FormikValues;
}

const PersonalInfo: FC<PropsType> = ({ formField }) => {
  const { firstName, lastName, phoneNumber, email } = formField;

  return (
    <>
      <Typography>Personal Information</Typography>
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
      </Grid>
    </>
  );
};

export default PersonalInfo;
