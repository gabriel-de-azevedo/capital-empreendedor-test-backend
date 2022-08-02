import * as yup from 'yup';

export const opportunitySchema = yup.object().shape({
  name: yup.string().required().typeError('name must be a string'),
  limit: yup.number().required().typeError('limit must be a string'),
  interest: yup.number().required().typeError('interest must be a number'),
  term: yup.number().integer().required().typeError('term must be a number'),
  isActive: yup.bool().required().typeError('isActive must be a boolean'),
});
