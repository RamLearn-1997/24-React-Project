import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="flex items-center align-middle justify-between h-18 max-w-6xl mx-auto ">
        <Link to={"/"}>
          <h1 className="ml-1 text-red-400 font-medium text-xl sm:text-2xl md:text-3xl cursor-pointer trackking-wide uppercase">
            REACT-REDUX Shopping Cart
          </h1>
        </Link>
        <ul className="flex list-none item-center space-x-6 text-white font-semibold">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link to={"/cart"}>
            <li className="cursor-pointer">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
