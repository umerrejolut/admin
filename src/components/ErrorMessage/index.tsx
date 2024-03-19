import { ReactNode } from "react";

const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return <div className="text-xs text-red-700 py-1">{children}</div>;
};

export default ErrorMessage;
