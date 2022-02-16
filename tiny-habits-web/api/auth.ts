import axios from 'axios';

export const login = async (params: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const { email, password } = params;

  const { data } = await axios.post<LoginResponse>(
    `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/auth/login`,
    {
      data: {
        email,
        password,
      },
    }
  );

  return data;
};

export const signup = async (params: {
  email: string;
  name: string;
  password: string;
}): Promise<SignupResponse> => {
  const { email, name, password } = params;

  const { data } = await axios.post<SignupResponse>(
    `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/auth/signup`,
    {
      data: {
        email,
        name,
        password,
      },
    }
  );

  return data;
};
