import Link from "next/link";

export default function Header() {
  return (
    <nav className="*:font-medium mb-14">
      <ul className="flex px-10 bg-slate-400 h-16 items-center justify-between">
        <li>
          <Link href={"/"} className="hover:text-lime-300">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/about"} className="hover:text-lime-300">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
