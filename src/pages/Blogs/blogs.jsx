import { useState } from "react";
import SideBar from "./components/SideBar";

export default function Home(props) {
  //   //state
  const [color, setColor] = useState("bg-[#000]");
  return (
    <main className="mt-5">
      <div className="container mx-auto">
        <div className="flex">
          {/* sidbar */}
          <div className="w-1/4">{color && <SideBar />}</div>

          <button onClick={() => setColor(null)}>Unmount Sidebar</button>
          {/* <button
            onClick={() => setColor("bg-rose-500")}
            className="block mb-4 bg-rose-400"
          >
            Cahgne Color
          </button>
          
          {/* products list */}
        </div>
      </div>
    </main>
  );
}
