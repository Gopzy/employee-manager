"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import "./globals.css";

export default function Home() {
  // return redirect("/employee/list");
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
