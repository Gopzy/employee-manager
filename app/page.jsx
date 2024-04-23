"use client";
import { redirect } from "next/navigation";
import "./globals.css";

export default function Home() {
  return redirect("/employee/list");
}
