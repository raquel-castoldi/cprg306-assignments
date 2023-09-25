import Link from "next/link";

export default function StudentInfo() {
    return (
      <main>
        <p className="text-sm">
            Name: Raquel Fernandes Castoldi <br></br>
            Course Section: CPRG 306A <br></br>
    
            <Link href={"https://github.com/raquel-castoldi/cprg306-assignments"} className="hover:text-pink-300">Github Repository</Link>
        </p>
      </main>
    );
  }