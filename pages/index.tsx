import type { NextPage } from "next";
import Layouts from "../components/Layouts";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layouts pageTitle="Home Page">
      <Image src="/yoman 2.png" width={200} height={200} alt="yoman" />
      <h1 className={styles["title-homepage"]}>Welcome Taufik</h1>
    </Layouts>
  );
};

export default Home;
