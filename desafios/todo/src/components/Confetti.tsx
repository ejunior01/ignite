import { useEffect, useState } from "react";

import ReactConfetti from "react-confetti";

export default function Confetti({
  width = 0,
  height = 0,
  recycle = false,
  numberOfPieces = 100,
  tweenDuration = 15000,
  gravity = 0.15,
  ...props
}) {
  const [confettiWidth, setConfettiWidth] = useState(width);
  const [confettiHeight, setConfettiHeight] = useState(height);

  useEffect(() => {
    function handleResize() {
      setConfettiWidth(document.body.clientWidth);
      setConfettiHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ReactConfetti
      width={confettiWidth}
      height={confettiHeight}
      recycle={false}
      numberOfPieces={100}
      tweenDuration={15000}
      gravity={0.15}
      colors={["#e25858", "#1e6f9f", "#5e60ce"]}
      {...props}
    />
  );
}
