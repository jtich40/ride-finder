import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <UserButton />
      <h2>Subscribe to Jared</h2>
    </div>
  );
}
