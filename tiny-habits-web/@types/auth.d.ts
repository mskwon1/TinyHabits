type LoginResponse = UserEntity & {
  accessToken: string;
};

type SignupResponse = UserEntity;
