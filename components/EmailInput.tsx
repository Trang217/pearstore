"use client";
export default function EmailInput() {
  return (
    <div className="flex flex-row justify-center items-center gap-4 w-full">
      <input
        className="w-full px-4 py-3 text-amber-50 outline-none bg-green-800 max-w-1/3"
        type="text"
        placeholder="Email address"
      />
      <button className="border-2 border-green-950 text-green-950 px-10 py-2 hover:bg-green-950 hover:text-amber-50 hover:cursor-pointer hover:scale-105 transition-all duration-150">
        Sign Up
      </button>
    </div>
  );
}
