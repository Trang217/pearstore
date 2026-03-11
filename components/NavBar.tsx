import Link from "next/link";
import Cart from "./Cart";
import Logo from "./Logo";

const links = [
  { url: "/", title: "Home" },
  { url: "/cart", title: "Cart" },
  { url: "/contact", title: "Contact" },
  { url: "/faq", title: "FAQ" },
];
export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between items-center p-6 font-bold text-green-950">
      <div>
        <Logo />
      </div>
      <div className="flex flex-row justify-evenly items-center flex-1 text-xl">
        {links.map((link) => (
          <div key={link.title}>
            <Link href={link.url}>{link.title}</Link>
          </div>
        ))}
      </div>
      <div>
        <Cart />
      </div>
    </nav>
  );
}
