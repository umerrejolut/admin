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
  // Define other properties as needed
}