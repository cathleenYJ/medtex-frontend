"use client";

import { useEffect, useState } from "react";
import { clientFetch } from "@/data/client";
import { Loading } from "@ui/loading";

export const UserAdmin: React.FC = () => {
  const [userData, setUserData] = useState<number[]>([]);
  useEffect(() => {
    (async () => {
      const res = await clientFetch.users.data();
      res && setUserData(res.data);
    })();
  }, []);
  return userData ? (
    <div>
      {userData.map((id) => (
        <div key={id}>User {id}</div>
      ))}
    </div>
  ) : (
    <Loading />
  );
};
