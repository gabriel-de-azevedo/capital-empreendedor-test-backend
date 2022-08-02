import * as yup from 'yup';

export const userSchema = yup.object().shape({
  name: yup.string().required().typeError(),
  email: yup.string().required().typeError().email(),
  isActive: yup.bool().required().typeError(),
  phone: yup
    .string()
    .required()
    .typeError()
    .matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/),
  revenue: yup.number().required().typeError(),
  agreedTerms: yup.bool().required().typeError(),
});
