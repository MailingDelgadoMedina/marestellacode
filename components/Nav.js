// Just test
import Link from "next/link";

export default function Nav() {
  return (
    <header className="text-gray-200 border-b sticky top-0 z-20 bg-slate-800">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer ">
            <span className="text-lg pt-1 font-bold">MarestellaCode</span>
          </a>
        </Link>

        <a className="text-md font-bold cursor-pointer">Cart</a>
      </div>
    </header>
  );
}
