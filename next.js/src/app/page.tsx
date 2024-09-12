'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();

  return (
    <div>
      <h1>Hello</h1>
      <Link href="/dashboard">Dashboard</Link>
      <button type="button" onClick={() => router.push('/dashboard')}>
          click to go dashboard
      </button>
    </div>
  );
}
