import Link from "next/link";
import EmailInput from "./EmailInput";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center font-bold text-lg text-green-950">
      <div className="links flex flex-row justify-around ">
        <div className="w-1/3">
          <Logo />
          <p className="text-justify mt-2">
            At PEARSTORE we source freshly picked and nutrient dense, organic
            fruit from trusted growers. Fruits that bring sunshine and health
            into your life ☀
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="text-2xl">Store</h3>
          <Link href="/">Home</Link>
          <Link href="/">Cart</Link>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="text-2xl">Support</h3>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center items-center w-full mt-5">
        <h5 className="text-xl">
          Subscribe to get information of new arrivals
        </h5>
        <EmailInput />
        <div className="">
          <p className="text-sm">
            © 2026 by
            <a href="https://animated-portfolio-two-chi.vercel.app/">
              Jenny Nguyen
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
