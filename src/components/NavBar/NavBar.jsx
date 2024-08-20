//inline style
// style file
//CSS componet
import styles from "./style.module.css";

/*
1- tailwind VS bootstrap:

#tailwind => utlity calsses => way handel Responsive, RTL, TLR, Dark, light, override classes 

#Grid system - Utilty classes - Components => js => dom dirctly X react

----------------------------------------------------------------
# tailwind classes []
# bootsrtap size => 

*/
export default function NavBar(props) {
  return (
    <nav className="bg-slate-900 text-white py-[1rem]">
      <div className="container mx-auto">
        <ul className="flex gap-3">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
