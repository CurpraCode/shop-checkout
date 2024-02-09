import React, { FC } from "react";
import { TextField, TextFieldProps } from "@material-ui/core";
import { useField } from "formik";
import { at } from "lodash";

interface PropsType {
  errorText?: string;
  defaultProps: TextFieldProps;
}

const InputField: FC<PropsType> = (props) => {
  const { errorText, ...restProps } = props;
  const [field, meta] = useField(props.defaultProps.name as string);

  const renderHelperText = () => {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  };

  // Determine the error state based on meta.error
  const isError = Boolean(meta.touched && meta.error);

  return (
    <TextField
      type="text"
      error={isError} // Use isError to determine the error state
      helperText={renderHelperText()}
      {...field}
      {...restProps.defaultProps}
    />
  );
};

export default InputField;
