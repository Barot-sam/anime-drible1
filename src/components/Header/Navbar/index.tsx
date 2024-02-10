"use client";
import { footerLinks, links } from "@/src/data";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { perspective, slideIn } from "@/src/animations";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.a
                href={href as string}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit">
                <a>{title}</a>
              </motion.a>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}>
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
