type CreateActionParams = {
  userId: number;
  aspirationId: number;
  name: string;
};

type UpdateActionParams = {
  name?: string;
};

type ActionWheres = {
  userId?: number;
  aspirationId?: number;
};
