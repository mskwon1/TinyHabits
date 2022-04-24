import axios from 'axios';

export const createAspiration = async (
  params: { name: string },
  token: string
): Promise<Aspiration> => {
  const { name } = params;

  const { data } = await axios.post<Aspiration>(
    `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/aspirations`,
    { name },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return data;
};
