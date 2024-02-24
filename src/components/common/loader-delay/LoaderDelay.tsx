import { FC, memo, PropsWithChildren, useEffect, useState } from "react";

const LoaderDelay: FC<PropsWithChildren<{ delay?: number }>> = ({ children, delay = 100 }) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShown(true);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return isShown ? children : null;
};

export default memo(LoaderDelay);
