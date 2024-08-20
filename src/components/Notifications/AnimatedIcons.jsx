import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react/dist/player";

export default function PlayOnce({ imgname,timer=1000,size=40 }) {
  const ICON = require(`..//../assets/Icons/${imgname}`);
  const playerRef = useRef(ICON);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <div className="cursor-pointer">
      <Player
        ref={playerRef}
        icon={ICON}
        size={size}
        onComplete={() => {
          setTimeout(() => {
            playerRef.current?.playFromBeginning();
          }, `${timer}`);
        }}
      />
    </div>
  );
}
