import { createRoot } from "react-dom/client";
import { ToastContainer, toast, ToastContent, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let hasContainer = false;

const setup = () => {
  if (!hasContainer) {
    hasContainer = true;
    const element = document.createElement("div");
    document.body.append(element);
    const root = createRoot(element);
    root.render(<ToastContainer position="top-right" toastClassName="c-toast" />);
  }
};

export const success = (content: ToastContent, options?: ToastOptions) => {
  setup();
  toast.success(content, options);
};

export const error = (content: ToastContent, options?: ToastOptions) => {
  setup();
  toast.error(content, options);
};
