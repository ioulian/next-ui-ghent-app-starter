/**
 * If you want named chunks, use: import(webpackChunkName: "toastify" ...)
 */
const toastify = () => import("./toastify");

/**
 * Shows success toast
 */
export const success = (content: string | JSX.Element) => {
  return toastify().then((toast) => {
    toast.success(content);
  });
};

/**
 * Shows error toast
 */
export const error = (content: string | JSX.Element) => {
  return toastify().then((toast) => {
    toast.error(content);
  });
};
