import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const Tost = () => {
  const lang = useSelector((state) => state.setting.lang);
  const theme = useSelector((state) => state.setting.theme);

  const isRtl = lang === "fa" || lang === "ar";

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={isRtl}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
    />
  );
};

export default Tost;

export const openToast = (type, text) => {
  const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  if (type === "info") toast.info(text, options);
  else if (type === "success") toast.success(text, options);
  else if (type === "warning") toast.warn(text, options);
  else if (type === "error") toast.error(text, options);
  else toast(text, options);
};
