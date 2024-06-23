"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";

export const LocalSwitcher = () => {
  const data = [
    { key: "en", label: "Ingles" },
    { key: "es", label: "Español" },
  ];
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onselectionchange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const nextLocale = e.target.value;
    const currentPath = pathname.replace(`/${localActive}`, "");
    startTransition(() => {
      router.replace(`/${nextLocale}${currentPath}`);
    });
  };
  return (
    <Select
      color={"primary"}
      className="w-[150px]"
      defaultSelectedKeys={[localActive]}
      // label="Select Idioma"
      // placeholder="Select Idioma"
      //   startContent={<PetIcon />}
      onChange={onselectionchange}
      disabled={isPending}
    >
      {data.map((data) => (
        <SelectItem key={data.key}>{data.label}</SelectItem>
      ))}
    </Select>
  );
};
