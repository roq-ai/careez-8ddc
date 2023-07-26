import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  type: yup.string().required(),
  model: yup.string().required(),
  location: yup.string().required(),
  status: yup.string().required(),
  owner_id: yup.string().nullable(),
});
