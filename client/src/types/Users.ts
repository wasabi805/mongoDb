export type User = {
  [name: string]: string | unknown;
  userName?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;
};
export type AddUser = {
  [key: string]: unknown | string;
  userName: string;
  name: string;
  email: string;
};
export type EditUser = {
  [name: string]: unknown | string;
  userId?: string;
  toggleModal?: boolean;
  user?: User | unknown;
};

/* USER STATE */

export type User_State = {
  loading: boolean;
  users: User[];
  addUser: AddUser;
  editUser: EditUser;
};

/* USER ACTION */
type User_Payload = {
  [key: string]: unknown;
  user: User | undefined;
  userId?: string | undefined;
  userName?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;
  editUser?: EditUser | unknown | undefined;
  editedUser?: User | undefined;
};

export type User_Action = {
  payload: User_Payload;
};
