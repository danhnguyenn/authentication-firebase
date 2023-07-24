import { useCallback, useState } from "react";

const useCountdown = (initialCountdown = 5) => {
  const [countdown, setCountdown] = useState(initialCountdown);

  const handleStartCountdown = useCallback(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    });

    if (countdown === 0) {
      clearInterval(interval);
    }
  }, [countdown]);

  return { countdown, handleStartCountdown };
};

export default useCountdown;
