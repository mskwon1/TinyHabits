import { signup } from '@api/auth';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@constants';
import _ from 'lodash';
import Email from 'next-auth/providers/email';
import { signIn } from 'next-auth/react';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export type SignupInputs = {
  name: string;
  email: string;
  password: string;
};

const useSignupForm = () => {
  const formHandlers = useForm<SignupInputs>({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const { register, handleSubmit } = formHandlers;

  const inputProps = {
    name: register('name', {
      setValueAs: _.trim,
      required: { value: true, message: '이름을 입력해주세요' },
      minLength: { value: 1, message: '1-20자로 입력해주세요' },
      maxLength: { value: 20, message: '1-20자로 입력해주세요' },
    }),
    email: register('email', {
      setValueAs: _.trim,
      required: { value: true, message: '이메일을 입력해주세요' },
      pattern: {
        value: EMAIL_REGEX,
        message: '올바른 이메일을 입력해주세요',
      },
    }),
    password: register('password', {
      required: { value: true, message: '비밀번호를 입력해주세요' },
      minLength: { value: 8, message: '8-20자로 입력해주세요' },
      maxLength: { value: 20, message: '8-20자로 입력해주세요' },
      pattern: {
        value: PASSWORD_REGEX,
        message:
          '비밀번호는 알파벳, 숫자, 일부 특수문자(!@#$_-)만 사용할 수 있습니다',
      },
    }),
  };

  const onSubmit = useCallback<SubmitHandler<SignupInputs>>(async (data) => {
    const { email, password } = data;
    const signupResult = await signup(data);

    await signIn('credentials', { email, password });
  }, []);

  return {
    formHandlers,
    inputProps,
    submitHandler: handleSubmit(onSubmit),
  };
};

export default useSignupForm;
