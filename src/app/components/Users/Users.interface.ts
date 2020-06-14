export interface UserPropsIF {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}
export interface UsersStateIF {
  users: Array<UserPropsIF>;
}

export interface UsersPropIf {
  isLoading: any;
}
