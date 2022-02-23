import _ from 'lodash';
import { signIn } from 'next-auth/react';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export type LoginInputs = {
  email: string;
  password: string;
};

const useLoginForm = () => {
  const formHandlers = useForm<LoginInputs>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { register, handleSubmit } = formHandlers;

  const inputProps = {
    email: register('email', {
      setValueAs: _.trim,
      required: { value: true, message: '이메일을 입력해주세요' },
    }),
    password: register('password', {
      required: { value: true, message: '비밀번호를 입력해주세요' },
    }),
  };

  const onSubmit = useCallback<SubmitHandler<LoginInputs>>(async (data) => {
    const { email, password } = data;
    await signIn('credentials', { email, password });
  }, []);

  return {
    formHandlers,
    inputProps,
    submitHandler: handleSubmit(onSubmit),
  };
};

export default useLoginForm;
