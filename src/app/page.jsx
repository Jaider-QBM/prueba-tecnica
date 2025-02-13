import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Alliances } from "@/components/sections/Alliances";
import { Blogs } from "@/components/sections/Blogs";
import { CustoExpe } from "@/components/sections/CustoExpe";
import { DesignYour } from "@/components/sections/DesignYour";
import { GroupExpe } from "@/components/sections/GroupExpe";
import { Hero } from "@/components/sections/Hero";
import { Subscribe } from "@/components/sections/Subscribe";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <GroupExpe/>
      <CustoExpe/>
      <Blogs/>
      <DesignYour/>
      <Alliances/>
      <Subscribe/>
      <Footer/>
    </>
  );
}
