import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layouts.module.css";
import Head from "next/head";

interface LayoutsProps {
  children: ReactNode;
  pageTitle: string;
}
export default function Layouts(props: LayoutsProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>NextJS Basic | {pageTitle}</title>
        <meta name="description" content="Website NextJS Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
