import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  return <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center pl-14  pr-14 ">
    <Link to={'/'}><h2 className="text-lg font-medium select-none">WebD Codepen</h2></Link>
    
    <ul className="flex gap-2 items-center justify-around">
        <li className="mr-4">
           <Link to={'/'}>Home</Link> 
        </li>
        <li>
           <Link to={'/compiler'}><Button variant={'default'}>Compiler</Button></Link> 
        </li>
    </ul>
    </nav>;
}
