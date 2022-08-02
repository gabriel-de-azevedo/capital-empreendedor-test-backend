import * as yup from 'yup';

export const opportunitySchema = yup.object().shape({
  name: yup.string().required().typeError(),
  limit: yup.number().required().typeError(),
  interest: yup.number().required().typeError(),
  term: yup.number().integer().required().typeError(),
  isActive: yup.bool().required().typeError(),
});
