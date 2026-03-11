"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h3>Something went wrong!</h3>
      <div>
        <Link href="/">
          <button>Home</button>
        </Link>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Error;
