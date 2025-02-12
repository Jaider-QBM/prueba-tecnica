import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { GroupExpe } from "@/components/sections/GroupExpe";
import { Hero } from "@/components/sections/Hero";
import React, { Suspense } from "react";



export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <GroupExpe/>
    </>
  );
}
