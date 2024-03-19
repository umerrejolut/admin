import { useTranslation } from "react-i18next";

interface CustomButtonProps {
    title: string;
    onClick?: () => void;
    disabled?: boolean;
    width?: string;
    className?: string;
    loading?: boolean;
}

function CustomButton({
  title,
  onClick,
  disabled,
  width,
  className,
  loading,
  ...props
}: CustomButtonProps) {
  const { t } = useTranslation();

  const buttonStyle = {
    width: width || "100%",
  };

  return (
    <button
      type="submit"
      onClick={onClick}
      style={buttonStyle}
      className={`${className} py-2 px-4 text-white font-bold rounded hover:bg-[#131b42] ${
        disabled ? "!bg-checkBoxBorder hover:bg-modalBorder" : "bg-buttonBg"
      }${loading ? "opacity-30 cursor-not-allowed bg-buttonBg" : ""}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div>{t("Loading")}</div>
          <div className="rounded-full h-4 w-4 border-t-4 border-white border-r-4 border-b-4 animate-spin"></div>
        </div>
      ) : (
        title
      )}
    </button>
  );
}

export default CustomButton;
