import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="uppercase text-2xl font-bold text-green-900">
        Pearstore 🍐
      </h1>
    </Link>
  );
}
