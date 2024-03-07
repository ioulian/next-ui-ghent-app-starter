import { createRoot } from "react-dom/client";
import { ToastContainer, toast, ToastContent, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// DO NOT import this file directly, (it works), but it's better to load it on demand by using functions inside `notify.ts`

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
