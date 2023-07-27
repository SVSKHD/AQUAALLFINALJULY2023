import toast from "react-hot-toast";

const SuccessNotify = (message) =>
  toast.success(message, {
    icon: "👏",
    duration: 4000,
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
const ErrorNotify = (message) => toast.error(message);
const infoNotify = (message) => toast(message);
const ToastMessages = () => {
  return {
    SuccessNotify,
    ErrorNotify,
    infoNotify,
  };
};

export default ToastMessages;
