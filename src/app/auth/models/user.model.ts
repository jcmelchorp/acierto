export interface User extends firebase.UserInfo {
  /* firstName?: string;
  lastName?: string;
  fullName?: string;
  roles?: string[];
  isOnline?: boolean; */
  myCustomData?: string;
}

export interface Credentials {
  email: string;
  password: string;
}
