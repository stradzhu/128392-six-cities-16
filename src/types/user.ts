export type UserType = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
};

export type UserAuthType = UserType & {
  email: string;
  token: string;
};
