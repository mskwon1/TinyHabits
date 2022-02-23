import { TextField } from '@mui/material';
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form';
import { LoginInputs } from 'hooks/form-hooks/useLoginForm';

type LoginFormProps = {
  inputProps: Record<keyof LoginInputs, UseFormRegisterReturn>;
};

const LoginForm = ({ inputProps }: LoginFormProps): JSX.Element => {
  const {
    formState: { errors },
  } = useFormContext<LoginInputs>();

  return (
    <>
      <TextField
        id="email"
        label="이메일"
        type="email"
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

export default LoginForm;
