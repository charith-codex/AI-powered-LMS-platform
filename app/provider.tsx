"use client";

import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useEffect } from "react";
import axios from "axios";

export default function Provider({ children }: any) {
  const { user } = useUser();

  useEffect(() => {
    user && CheckISNewUser();
  }, [user]);

  const CheckISNewUser = async () => {
    // //check is user already exists
    // const result = await db
    //   .select()
    //   .from(USER_TABLE)
    //   .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));

    // console.log(result);

    // if (result?.length === 0) {
    //   //if not then add to db
    //   const userResp = await db
    //     .insert(USER_TABLE)
    //     .values({
    //       name: user?.fullName,
    //       email: user?.primaryEmailAddress?.emailAddress,
    //     })
    //     .returning({ id: USER_TABLE.id });

    //   console.log(userResp);
    // }

    const res = await axios.post("/api/create-user", { user: user });

    console.log(res.data)
  };
  return <div>{children}</div>;
}
