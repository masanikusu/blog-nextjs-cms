import Link from "next/link";
import { client } from "../libs/client";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <>
      <Header />
      <Layout blog={blog} />
      <Footer />
    </>
  );
}
