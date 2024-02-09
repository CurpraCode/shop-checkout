/* eslint-disable import/no-anonymous-default-export */
import model from "./form-model";

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
    useAddressForPaymentDetails,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv,
  },
} = model;

export default {
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [phoneNumber.name]: "",
  [address1.name]: "",
  [city.name]: "",
  [zipcode.name]: "",
  [country.name]: "",
  [useAddressForPaymentDetails.name]: false,
  [nameOnCard.name]: "",
  [cardNumber.name]: "",
  [expiryDate.name]: "",
  [cvv.name]: "",
};
