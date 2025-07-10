import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Home
      <Link href={"/dashboard"}>
        <Button>dashboard</Button>
      </Link>
      <UserButton />
    </div>
  );
}
