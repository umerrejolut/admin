export interface SignUpData {
  password: string;
  email: string;
  // password: string;
  // confirmPassword: string;
}

export interface ChangeNewPasswordData {
  old_password: string;
  new_password: string;
  confirm_new_password: string;
}

export interface ChangeProfilePasswordData {
  old_password: string;
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
  // eslint-disable-next-line
  id: any;
  // eslint-disable-next-line
  item: any;
  description: string; // Adding missing property
  // users?: any; // Adding missing property
  users: { // Make 'users' property mandatory
    user_name: string;
    Wallets: {
      wallet_address: string;
    }[];
  };
  // eslint-disable-next-line
  value: any; // Adding missing property
  // eslint-disable-next-line
  created_at: any; 
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
  value: number;
  description: string;
}

export interface USER_DETAILS {
  id: string,
  user_name: string,
  email: string,
  avatar: string,
  password: string,
  role: string,
  is_password_default: boolean,
  created_at: string,
  updated_at: string
}

  export interface AdminImage {
    myfile: string | null;
  }

  export interface UpdateProfile {
    email: string;
    image_uri?: File ;
  }