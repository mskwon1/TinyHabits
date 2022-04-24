import axios from 'axios';

export const createAction = async (
  params: {
    name: string;
    aspirationId: number;
  },
  token: string
): Promise<Action> => {
  const { name, aspirationId } = params;

  const { data } = await axios.post<Action>(
    `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/actions`,
    { name, aspirationId },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return data;
};
