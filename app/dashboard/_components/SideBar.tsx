"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LayoutDashboard, Shield, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export const SideBar = () => {
  const path = usePathname();

  const MenuList = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
    {
      name: "Profile",
      icon: UserCircle,
      path: "/dashboard/profile",
    },
  ];

  return (
    <div className="h-screen shadow-md p-5">
      <div className="flex justify-center items-center gap-2">
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
        <h2 className="font-bold text-2xl text-slate-700">Zeven Study</h2>
      </div>

      <div className="mt-10">
        <Link href={"/create-course"}>
          <Button className="w-full">Create New</Button>
        </Link>

        <div className="mt-6">
          {MenuList.map((menu, index) => (
            <div
              key={index}
              className={`flex gap-5 items-center mt-3 cursor-pointer hover:bg-slate-200 p-2 rounded-md ${
                path === menu.path && "bg-slate-200"
              }`}
            >
              <menu.icon />
              <h2>{menu.name}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="border p-3 bg-slate-100 rounded-lg absolute bottom-10 w-[85%]">
        <h2 className="text-lg mb-2 text-slate-800">Available Credits : 5</h2>
        <Progress value={30} />
        <h2 className="text-sm text-slate-500">1 out of 5 credits used</h2>
        <Link
          href={"/dashboard/upgrade"}
          className="text-primary text-xs mt-3 font-bold"
        >
          Upgrade to create more
        </Link>
      </div>
    </div>
  );
};
