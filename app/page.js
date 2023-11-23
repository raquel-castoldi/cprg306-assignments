import StudentInfo from "./StudentInfo";
import week2 from "./week2/page.js";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen bg-pink-50 flex-col items-center pt-24">
      <h1 className="font:64 font-bold">CPRG 306: Web Dev 2 - Assignments</h1>
      <StudentInfo />
      <Link href={`/week2`} className="hover:text-pink-300 text-sm "> Week 2 </Link>
      <Link href={`/week3`} className="hover:text-pink-300 text-sm "> Week 3 </Link>
      <Link href={`/week4`} className="hover:text-pink-300 text-sm "> Week 4 </Link>
      <Link href={`/week5`} className="hover:text-pink-300 text-sm "> Week 5 </Link>
      <Link href={`/week6`} className="hover:text-pink-300 text-sm "> Week 6 </Link>
      <Link href={`/week7`} className="hover:text-pink-300 text-sm "> Week 7 </Link>
    </main>
  );
}
