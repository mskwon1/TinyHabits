import { TextField } from '@mui/material';
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form';
import { SignupInputs } from 'hooks/form-hooks/useSignupForm';

type SignupFormProps = {
  inputProps: Record<keyof SignupInputs, UseFormRegisterReturn>;
};

const SignupForm = ({ inputProps }: SignupFormProps): JSX.Element => {
  const {
    formState: { errors },
  } = useFormContext<SignupInputs>();

  return (
    <>
      <TextField
        id="name"
        label="이름"
        sx={{ marginTop: 5 }}
        fullWidth
        {...inputProps.name}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        id="email"
        label="이메일"
        variant="outlined"
        fullWidth
        sx={{ marginTop: 5 }}
        {...inputProps.email}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        id="password"
        label="비밀번호"
        variant="outlined"
        type="password"
        fullWidth
        sx={{ marginTop: 5 }}
        {...inputProps.password}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
    </>
  );
};

export default SignupForm;
