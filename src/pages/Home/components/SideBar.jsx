import { useEffect, useState } from "react";
const arr = [];

export default function SideBar(props) {
  const [categories, setCategories] = useState(null);
  arr.push("items"); //side effect logic
  console.log("Hello");
  //call api

  //useEffect && useState = hooks => v16.8
  //use function component
  //class SideBar extends React.Component
  //state-less component
  //logic effect global outside (external world)
  //component lifeCycle && array dependinces
  useEffect(() => {
    //after initila render
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
    console.log("initial render");
    //window
    // third party packages
    return () => console.log("unmount component ");
  }, []);

  //sideeffect =>  useEffect - event handler
  const submitSomedate = () => {
    //post some api
    //side effect
  };
  //   useEffect(() => {
  //     if (props.color) {
  //       console.log("re-render phase in Case the props.color changed");
  //       console.log(`${props.color} updated`);
  //     }
  //     return () => console.log("Unmount phase");
  //   }, [props.color]); //initial render && in

  //component lifecycle
  return (
    <aside className={`bg-white shadow rounded-[5px] p-2 ${props.color}`}>
      <h2 className="text-xl font-bold mb-3">Categories</h2>
      <p className="text-gray-300 text-lg">Loading...</p>
    </aside>
  );
}
