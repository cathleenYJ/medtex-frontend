"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { clientFetch } from "@/data/client";
import { useAuth } from "@/hooks/use-auth";
import type { BuyerContact } from "@/types";

const contactPlaceholder = {
  buyer_photo: "/buyer_photo.png",
  buyer_name: "buyer name",
  buyer_job_title: "job title",
  brief_introduction: "introduction",
  buyer_contact_location: "contact info",
};

export const LockedInfo: React.FC = () => {
  const { isAuthorized } = useAuth();
  const [lock, setLock] = useState<boolean>(true);
  const [contact, setContact] = useState<BuyerContact>(contactPlaceholder);
  const unLockInfo = async () => {
    if (!lock || !isAuthorized) return;
    const res = await clientFetch.buyers.contact(1);
    setLock(false);
    setContact(res[0]);
  };
  const lockInfo = () => {
    setLock(true);
    setContact(contactPlaceholder);
  };
  useEffect(() => {
    isAuthorized ? unLockInfo() : lockInfo();
  }, [isAuthorized]);
  return (
    <div
      className={clsx(
        "basis-full sm:basis-(--1-2-basis-gap-30px) md:basis-(--1-2-basis-gap-60px) flex sm:flex-wrap lg:flex-nowrap gap-7 py-5 sm:py-[5.5625rem] px-3 sm:px-6 lg:ps-9 relative",
        (lock || !isAuthorized) &&
          "before:content-[''] before:absolute before:inset-0 before:backdrop-blur-md before:bg-b2b-lv1/10 before:rounded-xl"
      )}
    >
      <div className="w-20 sm:w-28 lg:w-36 mx-auto flex items-center shrink-0">
        <div className="w-full aspect-square rounded-lg overflow-hidden">
          <Image
            fill
            className="!relative object-cover"
            src={contact.buyer_photo}
            alt="buyer photo"
          />
        </div>
      </div>
      <div className="grow flex items-center sm:justify-center">
        <div className="flex flex-col gap-1.5 text-left sm:text-center lg:text-left">
          <div className="text-b2b-lv1 text-2xl">{contact.buyer_name}</div>
          <div className="text-b2b-lv2 text-xl">{contact.buyer_job_title}</div>
          <div className="text-b2b-lv1">{contact.buyer_contact_location}</div>
        </div>
      </div>
    </div>
  );
};
