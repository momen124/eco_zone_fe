import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <Link href={"/momen"}>Go to momen</Link>
    </div>
  );
}
