import { useEffect, useState } from "react";

const TIMER = 3000;

export default function ProgressBar({}) {
  const [remainingTime, setRemainingTime] = useState(TIMER);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearTimeout(interval);
    };
  }, []);
  return <progress value={remainingTime} max={TIMER} />;
}
