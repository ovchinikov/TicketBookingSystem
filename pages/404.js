"use client";

import "@styles/globals.css";
import { Button } from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <main className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-blue-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/">
            <Button variant="filled">Go back home</Button>
          </Link>
          <Link href="/support">
            <Button variant="text" className="flex items-center gap-2">
              Contact Support{" "}
              <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
