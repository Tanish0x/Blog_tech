import Link from "next/link";

const navlinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  },
  {
    name: "Blog",
    href: "/",
  },
  {
    name: "Services",
    href: "/",
  },
  {
    name: "Portfolio",
    href: "/",
  },
];
export default function Header() {
  return (
    <header>
      <div className="bg-tertiary py-3 px-5 flex items-center">
        <span className="text-sm font-bold">{new Date().toDateString()}</span>
      </div>
      <Link
        href={"/"}
        className="bg-secondary h-[120px] px-7 flex items-center"
      >
        <span className="text-3xl md:text-6xl font-extrabold">Tech Blog</span>
      </Link>
      <div className="bg-tertiary py-3 px-3">
        {navlinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white px-3 hover:underline underline-offset-4 py-2 text-sm font-bold hover:bg-secondary transition"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}
