"use client";

import { useEffect, useState } from "react";
import { clientFetch } from "@/data/client";
import { LoadingBar } from "@ui/loading";

export const UserAdmin: React.FC = () => {
  const [userData, setUserData] = useState<number[]>([]);
  useEffect(() => {
    (async () => {
      const res = await clientFetch.users.data();
      res && setUserData(res.data);
    })();
  }, []);
  return userData ? (
    <div className="text-white hidden">
      {userData.map((id) => (
        <div key={id}>User {id}</div>
      ))}
    </div>
  ) : (
    <LoadingBar />
  );
};
