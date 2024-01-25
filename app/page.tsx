// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import Header from "./components/Header";
import ContentGrid from "./components/ContentGrid";
import Footer from "./components/Footer";
import "../app/globals.css";

export default function Page() {
  return (
    <div>
      <Header />
      <ContentGrid />
    </div>
  );
}
