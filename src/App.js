import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  memo,
  useCallback,
  useMemo,
} from "react";
import { Routes, Route, Link, useParams, Outlet } from "react-router-dom";
import AppPovider, { AppContext } from "./context/AppContext";
import useApiCallInitilaRender from "./hooks/useApiCall";
import useLocalStorage from "./hooks/useLocalStorage";
//home
//blog
//home Route chidle
//route ""
//roout services

//before 16.8 v

//hooks
//useRef => ref

//useReducer => handle //self-study
//useLayoutEffect => self-study

//custome hook

//useCallback
//useMemo
// function Home() {
//   return (
//     <AppPovider>
//       <div>
//         <Outlet />
//       </div>
//     </AppPovider>
//   );
// }
//controled compone
// function Login() {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });
//   //DX

//   const userEmailRef = useRef(null);
//   const userPasswordRef = useRef(null);
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(userEmailRef.current.value);
//     console.log(userPasswordRef.current.value);
//   }
//   function handleChange(e) {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   }
//   console.log(user);

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         ref={userEmailRef}
//         className="block w-1/2 border border-rose-300"
//         name="email"
//         type="text"
//       />
//       <input
//         ref={userPasswordRef}
//         className="block w-1/2 border border-rose-300"
//         name="password"
//         type="password"
//       />
//       <button className="bg-gray-500 text-white py-2 px-3">submit</button>
//     </form>
//   );
// }

//data dynamic // don't render component
// function ProductList() {
//   const [stateCount, setCount] = useState(0);

//   let count = useRef(0);
//   let divRef = useRef(null);
//   const globalState = useContext(AppContext);
//   function increaseCount() {
//     count.current++;
//   }
//   function increaseSetCount() {
//     setCount(count + 1);
//   }
//   useEffect(() => {
//     increaseCount();
//     console.dir(divRef.current);
//     // setCount(stateCount + 1);
//   });

//   return (
//     <div ref={divRef} className="container mx-auto">
//       <div>
//         this Component has benn rendered ref: {count.current} ::: state:
//         {stateCount}
//         <div>
//           <button className="bg-gray-500 text-white py-2 px-3">
//             Change State
//           </button>
//           <button
//             onClick={increaseCount}
//             className="bg-rose-500 text-white py-2 px-3"
//           >
//             Change ref
//           </button>
//         </div>
//       </div>
//       {!globalState.products ? (
//         <h2> Loading...</h2>
//       ) : (
//         <div className="flex gap-2 flex-wrap ">
//           {globalState.products.map((product) => (
//             <div
//               key={product.id}
//               onClick={globalState.handleSetProducts}
//               className="rounded-md shadow bg-white"
//               style={{
//                 width: "calc(33% - .5rem)",
//               }}
//             >
//               <h3 className="mb-3 text-lg">{product.title}</h3>
//               <p>{product.description}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// function ProductList() {
//   return <div> Proudcts </div>;
// }
// function ServicesList() {
//   return <div> Services </div>;
// }
// function Blog() {
//   return (
//     <>
//       <h1 className="text-xl text-blue-500">Blog Page </h1>;
//       <div>
//         <Outlet />
//       </div>
//     </>
//   );
// }

// function ProductDetails() {
//   const [product, setProduct] = useState(null);

//   const params = useParams();

//   useEffect(() => {
//     fetch(`https://dummyjson.com/products/${params.id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//       });
//   }, []); //object //property

//   return (
//     <>
//       {product ? (
//         <h1>
//           {product.title} {product.id}{" "}
//         </h1>
//       ) : (
//         <>Loding... </>
//       )}
//     </>
//   );
// }
//routing
//BOM

//react-router-dom

//object Function
// refernce
const object = {};
function App(props) {
  const [stateOne, setStateOne] = useState(0);
  const [stateTwo, setStateTwo] = useState(0);
  const [stateThree, setStateThree] = useState(0);
  const [products, setProducts] = useState(null);
  const [posts, setPosts] = useState(null);
  useApiCallInitilaRender("products", (data) => setProducts(data.products));
  useApiCallInitilaRender("posts", (data) => setProducts(data.posts));

  console.log(products);
  console.log(posts);
  const authUser = useLocalStorage("auth_user");
  console.log(authUser);

  // const mappedProducts = products.map((product) => ({
  //   ...product,
  //   quantity: 1,
  // }));
  // useEffect(()=> {
  //   //api
  //   setProducts(data.map())
  // }, [products.proprty])

  // const mappedProducts = useMemo(() => {
  //   return products.map((product) => ({
  //     ...product,
  //     quantity: 1,
  //   }));
  // }, [products]);

  const changeStateOne = useCallback(() => {
    setStateOne(stateOne + 1);
  }, [stateOne]);

  function changeStateTow() {
    setStateTwo((prevState) => prevState + 1);
  }
  function changeStateThree() {
    setStateThree((prevState) => prevState + 1);
  }

  return (
    <>
      <ComponentOne handleChangeState={changeStateOne} stateOne={stateOne} />
      <ComponentTwo handleChangeState={changeStateTow} stateTwo={stateTwo} />
      <ComponentThree
        handleChangeState={changeStateThree}
        stateThree={stateThree}
      />
    </>
  );
}
// HOC
const ComponentOne = memo(function ComponentOne(props) {
  console.log("Component One render");

  return (
    <h2>
      Component Satate one {props.stateOne}
      <button
        onClick={props.handleChangeState}
        className="bg-rose-500 text-white py-2 px-3"
      >
        Change State
      </button>
    </h2>
  );
});

function ComponentTwo(props) {
  console.log("Component Two render");
  return (
    <h2>
      Component Satate Two {props.stateTwo}
      <button
        onClick={props.handleChangeState}
        className="bg-rose-500 text-white py-2 px-3"
      >
        Change State
      </button>
    </h2>
  );
}
function ComponentThree(props) {
  console.log("Component three render");
  return (
    <h2>
      Component Satate Three {props.stateThree}
      <button
        onClick={props.handleChangeState}
        className="bg-rose-500 text-white py-2 px-3"
      >
        Change State
      </button>
    </h2>
  );
}

/* ---------------
  1-mounting / initial render
  
  When?
  //with first calling
  What? 
  //initial props
  //initail state
  //definde fucntion useEffect => 
  //return jsx element - update DOM 
  // call useEffect
  logic:
  useEffect(()=>{
      //logic 
    }, [])
  ----------------------------------------------------------------
  2- re-render /updating phase
  When? 
  //sate update
  //props change
  //parent render
  //context change 
  What?
  //1- update props
  //2- update state
  //3- define useEffect based on depend array
  //4- return JSX (update DOM) 
  //5- call useEffect 
  
  logic:
  useEffect(()=> {
    //logic
    
    }, [item])

  ----------------------------------------------------------------
  3- unmounting phase
    when?
    re-rdner => call component based on condition

    what?
    compoennt destroyed and removed rom react tree
    
    logic: 
      useEffect(() => {
    return () => {
      console.log("Umount Component");
    };
  }, []);
  */
export default App;
