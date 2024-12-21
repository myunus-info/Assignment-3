import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Email is required!' })
      .email({ message: 'Invalid email addresss' }),
    password: z.string({ required_error: 'Password is required!' }),
  }),
});

export const AuthValidations = {
  loginValidationSchema,
};
