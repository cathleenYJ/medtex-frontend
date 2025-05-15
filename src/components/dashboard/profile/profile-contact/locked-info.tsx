"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { clientFetch } from "@/data/client";
import type { BuyerContact } from "@/types";

export const LockedInfo: React.FC = () => {
  const [lock, setLock] = useState<boolean>(true);
  const [contact, setContact] = useState<BuyerContact>({ buyer_photo: "/buyer_photo.png", buyer_name: "buyer name", buyer_job_title: "job title", brief_introduction: "introduction", buyer_contact_location: "contact info" });
  const unLock = async () => {
    if (!lock) return;
    const res = await clientFetch.buyers.contact(1);
    setLock(false);
    setContact(res[0]);
  };
  useEffect(() => {
    // run unLock here in the future
    unLock();
  }, []);
  return (
    <div className={clsx("basis-full sm:basis-(--1\\/2-basis-gap-30px) md:basis-(--1\\/2-basis-gap-60px) flex sm:flex-wrap lg:flex-nowrap gap-7 py-5 sm:py-[5.5625rem] ps-0 sm:ps-6 lg:ps-9 pe-0 sm:pe-6 relative", lock && "before:content-[''] before:absolute before:inset-0 before:backdrop-blur-md before:bg-five/10 before:rounded-xl")}>
      <div className="w-20 sm:w-28 lg:w-36 mx-auto flex items-center shrink-0">
        <img className="w-full aspect-square object-cover rounded-lg" src={contact.buyer_photo} alt="" />
      </div>
      <div className="grow flex items-center sm:justify-center">
        <div className="flex flex-col gap-1.5 text-left sm:text-center lg:text-left">
          <div className="text-five text-2xl">{contact.buyer_name}</div>
          <div className="text-six text-xl">{contact.buyer_job_title}</div>
          <div className="text-five">{contact.buyer_contact_location}</div>
        </div>
      </div>
    </div>
  );
};
