import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      Home
      <Button>hey</Button>
      <UserButton/>
    </div>
  );
}
