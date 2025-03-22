import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-between items-center h-[72px] w-full bg-white px-7 py-4">
      <Link to="/" className="flex items-center gap-1 h-9">
        <div className="w-9 h-9 bg-[#AA3700] rounded-[50%]" />
        <div className="text-[#AA3700] text-[27px] font-bold leading-[27px] tracking-[-1.079px]">
          1000XRewards
        </div>
      </Link>

      <nav className="flex items-center gap-[34px] max-sm:hidden">
        <Link
          to="/"
          className="text-[#271813] text-sm font-medium leading-5 tracking-[0.1px] opacity-[0.38] cursor-pointer px-3 py-2.5"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-[#271813] text-sm font-medium leading-5 tracking-[0.1px] opacity-[0.38] cursor-pointer px-3 py-2.5"
        >
          About
        </Link>
        <Link
          to="/help"
          className="text-[#271813] text-sm font-medium leading-5 tracking-[0.1px] opacity-[0.38] cursor-pointer px-3 py-2.5"
        >
          Help
        </Link>
        <Link
          to="/contact"
          className="text-[#271813] text-sm font-medium leading-5 tracking-[0.1px] opacity-[0.38] cursor-pointer px-3 py-2.5"
        >
          Contact
        </Link>
        <Link
          to="/legal"
          className="text-[#271813] text-sm font-medium leading-5 tracking-[0.1px] opacity-[0.38] cursor-pointer px-3 py-2.5"
        >
          Legal
        </Link>
      </nav>

      <div className="flex items-center gap-2">
        <button className="h-10 border text-[#AA3700] text-sm font-medium cursor-pointer px-6 py-2.5 rounded-[100px] border-solid border-[#8E7067]">
          Login
        </button>
        <button className="h-10 text-white text-sm font-medium cursor-pointer bg-[#AA3700] px-6 py-2.5 rounded-[100px]">
          Register
        </button>
      </div>
    </header>
  );
}
