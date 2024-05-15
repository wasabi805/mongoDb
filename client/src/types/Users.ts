export type User = {
  [name: string]: string | unknown;
  userName?: string | undefined;
  password?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;

  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipcode?: string;
  };

  _id?: string | undefined;
};
export type AddUser = {
  [key: string]: unknown | string;
  userName: string;
  name: string;
  email: string;
  phone: string;

  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipcode?: string;
  };
  panel?: string;
};
export type EditUser = {
  [name: string]: unknown | string;

  userId?: string;
  _id?: string | undefined;
  toggleModal?: boolean | undefined | false;

  user?: {
    [name: string]: string | unknown;
    userName?: string | undefined;
    password?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    _id?: string | undefined;

    address?: {
      street?: string;
      city?: string;
      state?: string;
      zipcode?: string;
    };
  };
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
  user?: User | undefined;
  userId?: string | undefined;
  userName?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;
  editUser?: EditUser | unknown | undefined;
  editedUser?: User | undefined;
  addUser?: {
    panel?: string | undefined;
  };
};

export type User_Action = {
  payload: User_Payload;
};

/* */
export type NewUserAdded = {
  _id?: string;
  name?: string;
  email?: string;
  userName?: string;
  phone?: string;

  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipcode?: string;
  };

  createdAt?: string;
  updatedAt?: string;
};
