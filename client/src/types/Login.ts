export type Login_Action = {
  type: string;
  payload?: {
    userName?: string;

    data?: {
      isHomeAuth: boolean;
    };
  };
};
