export interface SignUpData {
  password: string;
  email: string;
  // password: string;
  // confirmPassword: string;
}

export interface ChangeNewPasswordData {
  // oldPassword: string;
  new_password: string;
  confirm_new_password: string;
}

// export interface RowData {
//   name: string;
//   location: string;
//   createdAt: string;
//   email: string;
//   // Define other properties as needed
// }
export interface RowData {
  name: string;
  location: string;
  createdAt: string;
  email: string;
  // Define other properties as needed
}
export interface Row {
  name: string;
  location: string;
  createdAt: string;
  email: string;
  id: string;
  description: string;
  users: {
    user_name: string;
    Wallets: {
      wallet_address: string;
    }[],
  }
  value: number;
  created_at: string
  // Define other properties as needed
}

export interface MatrixData {
  airdroppedUsers: number;
  totalAirdropped?: {
    _sum?: {
      value?: number;
    };
  };
}

export interface AirdropTable {
  wallet_address: string | number,
  limit: number,
  offset: number,
} 

export interface ParamsType {
  // eslint-disable-next-line
  [key: string]: any,
}

export interface WalletType {
  wallet_address: string | number,
}

export interface Detail {
  wallet_address: string;
  value: string;
  description: string;
}