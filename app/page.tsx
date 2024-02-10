"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import pinkLabelGirl from "../src/assets/pink-label-girl.jpg";
import Header from "@/src/components/Header";

export default function Home() {
  return (
    <main className="h-auto w-screen relative z-2">
      <motion.div className="w-screen absolute top-0 left-0 z-1 bg-top h-screen overflow-hidden">
        <Image
          src={pinkLabelGirl}
          alt="pink_label-girl"
          className="w-full mt-[-100px]"
        />
      </motion.div>
      <motion.section>
        <Header />
      </motion.section>
    </main>
  );
}
