import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const handleCustomError = async (error: any) => {
    if (error.response) {
        const status = error.response.status;
        const data = error.response.data;
        if (
            status === 401 &&
            data.message === "Unauthorized"
        ) {
            await localStorage.removeItem("access_token");
            await localStorage.removeItem("user");
            toast.error("Try after Logging in");
            setTimeout(() => {
                window.location.href = "/signin";
            }, 3000);
            return;
        }

        const errorMessage = data.message || "An error occurred";
        toast.error(errorMessage);
    } else if (error.message) {
        toast.error(error.message);
    } else {
        toast.error("An unexpected error occurred");
    }
};