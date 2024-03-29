/* eslint-disable import/no-anonymous-default-export */
import * as yup from "yup";
import moment from "moment";
import formModel from "./form-model";

const {
  formField: {
    firstName,
    lastName,
    email,
    phoneNumber,
    address1,
    city,
    zipcode,
    country,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv,
  },
} = formModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  yup.object().shape({
    [firstName.name]: yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: yup.string().required(`${lastName.requiredErrorMsg}`),
    [email.name]: yup
      .string()
      .email("Invalid email")
      .required(email.requiredErrorMsg),
    [phoneNumber.name]: yup
      .string()
      .matches(
        /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
        "Phone number is not valid (e.g. (555) 555-5555)"
      )
      .required(`${phoneNumber.requiredErrorMsg}`),
    [address1.name]: yup.string().required(`${address1.requiredErrorMsg}`),
    [city.name]: yup.string().nullable().required(`${city.requiredErrorMsg}`),
    [zipcode.name]: yup
      .string()
      .required(`${zipcode.requiredErrorMsg}`)
      .test(
        "len",
        `${zipcode.invalidErrorMsg}`,
        (val: string | null | undefined) => {
          if (!val) return false; // Handle undefined and null values
          return val.length === 5;
        }
      ),
    [country.name]: yup
      .string()
      .nullable()
      .required(`${country.requiredErrorMsg}`),
  }),
  yup.object().shape({
    [nameOnCard.name]: yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    [cardNumber.name]: yup
      .string()
      .required(`${cardNumber.requiredErrorMsg}`)
      .matches(visaRegEx, cardNumber.invalidErrorMsg),
    [expiryDate.name]: yup
      .string()
      .nullable()
      .required(`${expiryDate.requiredErrorMsg}`)
      .test(
        "expDate",
        expiryDate.invalidErrorMsg,
        (val: string | null | undefined) => {
          if (!val) return false; // Handle undefined and null values
          const startDate = new Date();
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
      ),
    [cvv.name]: yup
      .string()
      .required(`${cvv.requiredErrorMsg}`)
      .test(
        "len",
        `${cvv.invalidErrorMsg}`,
        (val: string | null | undefined) => {
          if (!val) return false; // Handle undefined and null values
          return val.length === 3;
        }
      ),
  }),
];
