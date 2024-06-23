"use client";
import { useLocale } from "next-intl";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";

export const LoacalSwitcher2 = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  console.log(pathname);
  const onselectionchange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const nextLocale = e.target.value;
    const currentPath = pathname.replace(`/${localActive}`, "");
    startTransition(() => {
      router.replace(`/${nextLocale}${currentPath}`);
    });
  };
  return (
    <label className="border-2 rounded">
      <p className="sr-only">Change language</p>
      <select
        className="bg-transparent py-2"
        defaultValue={localActive}
        onChange={onselectionchange}
        disabled={isPending}
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </label>
    // <label className="relative inline-block w-full max-w-xs">
    //   <p className="sr-only">Change language</p>
    //   <select
    //     className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    //     defaultValue={localActive}
    //     onChange={onselectionchange}
    //     disabled={isPending}
    //   >
    //     <option value="es">Español</option>
    //     <option value="en">English</option>
    //   </select>
    //   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    //     <svg
    //       className="fill-current h-4 w-4"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 20 20"
    //     >
    //       <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
    //     </svg>
    //   </div>
    // </label>
  );
};
