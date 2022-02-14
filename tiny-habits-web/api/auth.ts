import axios from 'axios';

type LoginResponse = {
  userId: number;
  email: string;
  accessToken: string;
};

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
