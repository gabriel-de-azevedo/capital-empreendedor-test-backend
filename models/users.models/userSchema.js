import * as yup from 'yup';

export const userSchema = yup.object().shape({
  name: yup.string().required().typeError('name must be a string'),
  email: yup.string().required().typeError('email must be a string').email(),
  isActive: yup.bool().required().typeError('isActive must be a boolean'),
  phone: yup
    .string()
    .required()
    .typeError('phone must be a string')
    .matches(
      /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
      'phone must match the following: (xx) xxxxx-xxxx'
    ),
  revenue: yup.number().required().typeError('revenue must be a number'),
  agreedTerms: yup.bool().required().typeError('agreedTerms must be a boolean'),
});
