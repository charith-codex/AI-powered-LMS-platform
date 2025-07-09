"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export const WelcomeBanner = () => {
  const { user } = useUser();
  return (
    <div className="p-5 w-full rounded-lg bg-primary text-white flex justify-center items-center gap-10">
      <Image src={"/laptop.png"} alt="laptop" width={100} height={100} />
      <div>
        <h2 className="text-3xl font-bold">Hello, {user?.fullName}</h2>
        <p>Welcome back, It is time to get back and start learning</p>
      </div>
    </div>
  );
};
