import { Dispatch } from "@reduxjs/toolkit";
import { User } from "../types/Users";
export type UserSlice = {
  state:
    | {
        userSlice?: {
          addUser: {
            name: string;
          };
        };
      }
    | unknown;
};

export type RootState = {
  userSlice: {
    addUser: {
      name: string;
      userName: string;
      email: string;
    };
    users: User[];

    editUser: User;
  };
};

export type GetState = () => RootState;
