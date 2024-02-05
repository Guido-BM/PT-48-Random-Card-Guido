import React from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

const Card = ({ number, symbol }) => {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    set({ x: down ? mx : 0, y: down ? my : 0 });
  });

  const [{ scale }, setHover] = useSpring(() => ({ scale: 1 }));
  const bindHover = {
    onMouseOver: () => setHover({ scale: 1.1 }),
    onMouseLeave: () => setHover({ scale: 1 }),
  };

  const color =
    symbol === "♥" || symbol === "♦" ? "text-red-600" : "text-black";

  return (
    <animated.div
      {...bind()}
      {...bindHover}
      style={{ x, y, scale, width: "200px", height: "300px" }}
      className={`card bg-white border-2 border-black rounded-2xl p-4 m-2 relative overflow-hidden ${color}`}
    >
      <div className="absolute flex top-0 left-0 p-2">
        <div className="text-3xl">{number}</div>
        <div className="text-3xl">{symbol}</div>
      </div>
      <div className="absolute flex bottom-0 right-0 p-2 transform rotate-180">
        <div className="text-3xl">{number}</div>
        <div className="text-3xl">{symbol}</div>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="text-6xl">{symbol}</div>
      </div>
    </animated.div>
  );
};

export default Card;
