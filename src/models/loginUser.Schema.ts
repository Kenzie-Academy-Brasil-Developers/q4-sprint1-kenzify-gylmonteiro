import * as yup from 'yup';

const loginUserSchema = yup.object().shape({
  username: yup.string().required('username is required!'),
  password: yup.string().required('Password is required!'),
});

export default loginUserSchema;
