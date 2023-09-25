import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function week2() {
    
  return (
      <main  className="flex min-h-screen flex-col items-center pt-24"> 
        <h1 className="font=64">My Shopping List</h1>
        <StudentInfo />
      </main>
    );
  }